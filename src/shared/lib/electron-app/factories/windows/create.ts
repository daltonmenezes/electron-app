import { registerRoute } from 'shared/lib/electron-router-dom'
import { BrowserWindow } from 'electron'
import { join } from 'path'

import { WindowProps } from 'shared/types'

export function createWindow({ id, ...settings }: WindowProps) {
  const window = new BrowserWindow(settings)

  registerRoute({
    id,
    browserWindow: window,
    htmlFile: join(__dirname, '../renderer/index.html'),
  })

  window.on('closed', window.destroy)

  return window
}
