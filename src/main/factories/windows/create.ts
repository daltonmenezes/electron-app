import { BrowserWindow } from 'electron'
import { join } from 'path'

import { ENVIRONMENT } from 'shared/constants'
import { WindowProps } from 'shared/types'

export function createWindow({ id, ...settings }: WindowProps) {
  const window = new BrowserWindow(settings)
  const devServerURL = `${process.env['ELECTRON_RENDERER_URL']}/#/${id}`

  ENVIRONMENT.IS_DEV
    ? window.loadURL(devServerURL)
    : window.loadFile(join(__dirname, '../renderer/index.html'), {
        hash: `/${id}`,
      })

  window.on('closed', window.destroy)

  return window
}
