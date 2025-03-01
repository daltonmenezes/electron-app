import ReactDom from 'react-dom/client'
import React from 'react'

import { AppRoutes } from './routes'

import 'resources/styles/globals.sass'
import 'resources/styles/globals.css'

ReactDom.createRoot(document.querySelector('app') as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
