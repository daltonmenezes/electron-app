import { Route } from 'react-router-dom'

import { Router } from 'lib/electron-router-dom'

import { MainScreen } from './screens/main'

export function AppRoutes() {
  return <Router main={<Route element={<MainScreen />} path="/" />} />
}
