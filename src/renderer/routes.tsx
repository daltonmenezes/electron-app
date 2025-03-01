import { Route } from 'react-router-dom'

import { Router } from 'shared/lib/electron-router-dom'

import { MainScreen } from './screens/Main'

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<MainScreen />} />
        </>
      }
    />
  )
}
