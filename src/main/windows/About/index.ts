import { createWindow } from 'main/factories'
import { APP_CONFIG } from '~/app.config'

export * from './ipcs'

export function AboutWindow() {
  const window = createWindow({
    id: 'about',
    title: `${APP_CONFIG.TITLE} - About`,
    width: 450,
    height: 350,
    resizable: false,
    alwaysOnTop: true,
  })

  return window
}
