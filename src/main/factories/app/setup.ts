import { app, BrowserWindow } from 'electron'

import {
  installExtension,
  REACT_DEVELOPER_TOOLS,
} from 'electron-extension-installer'

import { PLATFORM, ENVIRONMENT } from 'shared/constants'
import { makeAppId } from 'shared/utils'

export async function makeAppSetup(createWindow: () => Promise<BrowserWindow>) {
  if (ENVIRONMENT.IS_DEV) {
    await installExtension(REACT_DEVELOPER_TOOLS, {
      loadExtensionOptions: {
        allowFileAccess: true,
      },
    })
  }

  let window = await createWindow()

  app.on('activate', async () =>
    !BrowserWindow.getAllWindows().length
      ? (window = await createWindow())
      : BrowserWindow.getAllWindows()
          ?.reverse()
          .forEach((window) => window.restore())
  )

  app.on('web-contents-created', (_, contents) =>
    contents.on(
      'will-navigate',
      (event, _) => !ENVIRONMENT.IS_DEV && event.preventDefault()
    )
  )

  app.on('window-all-closed', () => !PLATFORM.IS_MAC && app.quit())

  return window
}

PLATFORM.IS_LINUX && app.disableHardwareAcceleration()

PLATFORM.IS_WINDOWS &&
  app.setAppUserModelId(ENVIRONMENT.IS_DEV ? process.execPath : makeAppId())

app.commandLine.appendSwitch('force-color-profile', 'srgb')
