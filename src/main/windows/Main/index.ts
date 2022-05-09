import { BrowserWindow } from 'electron'
import { join } from 'path'

import { ENVIRONMENT } from 'shared/constants'
import { createWindow } from 'main/factories'
import { APP_CONFIG } from '~/app.config'

const { MAIN, TITLE } = APP_CONFIG

export async function MainWindow() {
  const window = createWindow({
    id: 'main',
    title: TITLE,
    width: MAIN.WINDOW.WIDTH,
    height: MAIN.WINDOW.HEIGHT,
    center: true,
    movable: true,
    resizable: false,
    alwaysOnTop: true,

    webPreferences: {
      preload: join(__dirname, 'bridge.js'),
      nodeIntegration: false,
      contextIsolation: true,
      spellcheck: false,
    },
  })

  ENVIRONMENT.IS_DEV && window.webContents.openDevTools({ mode: 'detach' })

  window.on('close', () =>
    BrowserWindow.getAllWindows().forEach((window) => window.destroy())
  )

  return window
}
