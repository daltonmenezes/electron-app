import { ipcRenderer } from 'electron'

import { IPC } from 'shared/constants'

export function createAboutWindow() {
  const channel = IPC.WINDOWS.ABOUT.CREATE

  ipcRenderer.invoke(channel)
}
