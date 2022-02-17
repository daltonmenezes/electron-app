import { app } from 'electron'

import { MainWindow, registerAboutWindowCreationByIPC } from './windows'
import { makeAppSetup } from './factories'

app.whenReady().then(async () => {
  await makeAppSetup(MainWindow)
  registerAboutWindowCreationByIPC()
})
