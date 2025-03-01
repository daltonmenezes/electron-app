import { Route } from 'react-router-dom'

import { Router } from 'shared/lib/electron-router-dom'

import { MainScreen } from './screens/main'

export function AppRoutes() {
  return <Router main={<Route path="/" element={<MainScreen />} />} />
}
