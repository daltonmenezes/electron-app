import ReactDom from 'react-dom'
import React from 'react'

import { WindowStoreProvider } from './store'
import { AppRoutes } from './routes'

import './styles/globals.sass'

ReactDom.render(
  <React.StrictMode>
    <WindowStoreProvider>
      <AppRoutes />
    </WindowStoreProvider>
  </React.StrictMode>,
  document.querySelector('app')
)
