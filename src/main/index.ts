import { app } from 'electron'

import { makeAppSetup, makeAppWithSingleInstanceLock } from './factories'
import { MainWindow, registerAboutWindowCreationByIPC } from './windows'

makeAppWithSingleInstanceLock(async () => {
  await app.whenReady()
  await makeAppSetup(MainWindow)

  registerAboutWindowCreationByIPC()
})
