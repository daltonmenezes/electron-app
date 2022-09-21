import { ipcRenderer } from 'electron'

import { IPC } from 'shared/constants'

export function whenAboutWindowClose(fn: (...args: any[]) => void) {
  const channel = IPC.WINDOWS.ABOUT.WHEN_WINDOW_CLOSE

  ipcRenderer.on(channel, (_, ...args) => {
    fn(...args)
  })
}
