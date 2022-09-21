import { createWindow } from 'main/factories'
import { displayName } from '~/package.json'

export * from './ipcs'

export function AboutWindow() {
  const window = createWindow({
    id: 'about',
    title: `${displayName} - About`,
    width: 450,
    height: 350,
    show: false,
    resizable: false,
    alwaysOnTop: true,
    autoHideMenuBar: true,
  })

  window.webContents.on('did-finish-load', () => window.show())

  return window
}
