import { app } from 'electron'

import { makeAppWithSingleInstanceLock } from './factories/app/instance'
import { makeAppSetup } from './factories/app/setup'
import { MainWindow } from './windows/main'

makeAppWithSingleInstanceLock(async () => {
  await app.whenReady()
  await makeAppSetup(MainWindow)
})
