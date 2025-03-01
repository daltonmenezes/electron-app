import Readline from 'node:readline'

export function question(question: string): Promise<string> {
  const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise(resolve => {
    readline.question(question, answer => {
      readline.close()
      resolve(answer)
    })
  })
}
