import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import open from 'open'

import { extractOwnerAndRepoFromGitRemoteURL } from '../utils/extractors'
import packageJSON from '../../../../../package.json'
import { checkValidations } from '../utils/validations'
import { question } from '../utils/question'
import { COLORS } from '../constants/colors'
import { exec } from '../utils/exec'

async function makeRelease() {
  console.clear()

  const { version } = packageJSON

  const newVersion = await question(
    `Enter a new version: ${COLORS.SOFT_GRAY}(current is ${version})${COLORS.RESET} `
  )

  if (checkValidations({ version, newVersion })) {
    return
  }

  packageJSON.version = newVersion

  try {
    console.log(
      `${COLORS.CYAN}> Updating package.json version...${COLORS.RESET}`
    )

    await writeFile(
      resolve('package.json'),
      JSON.stringify(packageJSON, null, 2)
    )

    console.log(`\n${COLORS.GREEN}Done!${COLORS.RESET}\n`)
    console.log(`${COLORS.CYAN}> Trying to release it...${COLORS.RESET}`)

    exec(
      [
        `git commit -am v${newVersion}`,
        `git tag v${newVersion}`,
        'git push',
        'git push --tags',
      ],
      {
        inherit: true,
      }
    )

    const [repository] = exec(['git remote get-url --push origin'])
    const ownerAndRepo = extractOwnerAndRepoFromGitRemoteURL(repository)

    console.log(
      `${COLORS.CYAN}> Opening the repository releases page...${COLORS.RESET}`
    )

    await open(`https://github.com/${ownerAndRepo}/releases`)

    console.log(
      `${COLORS.CYAN}> Opening the repository actions page...${COLORS.RESET}`
    )

    await open(`https://github.com/${ownerAndRepo}/actions`)

    console.log(`\n${COLORS.GREEN}Done!${COLORS.RESET}\n`)
  } catch ({ message }: any) {
    console.log(`
    🛑 Something went wrong!\n
      👀 Error: ${message}
    `)
  }
}

makeRelease()
