import { app } from 'electron'

import { makeAppWithSingleInstanceLock } from '../shared/lib/electron-app/factories/app/instance'
import { makeAppSetup } from '../shared/lib/electron-app/factories/app/setup'
import { MainWindow } from './windows/main'

makeAppWithSingleInstanceLock(async () => {
  await app.whenReady()
  await makeAppSetup(MainWindow)
})
