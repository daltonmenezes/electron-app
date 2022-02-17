import { app, BrowserWindow } from 'electron'

import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer'

import { PLATFORM, ENVIRONMENT } from 'shared/constants'

export async function makeAppSetup(createWindow: () => BrowserWindow) {
  if (ENVIRONMENT.IS_DEV) {
    await installExtension(REACT_DEVELOPER_TOOLS, {
      forceDownload: false,
    })
  }

  createWindow()

  app.on('activate', () =>
    !BrowserWindow.getAllWindows().length
      ? createWindow()
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
}

PLATFORM.IS_LINUX && app.disableHardwareAcceleration()

app.commandLine.appendSwitch('force-color-profile', 'srgb')

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'
delete process.env.ELECTRON_ENABLE_SECURITY_WARNINGS
