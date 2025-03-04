import { createElectronRouter } from 'electron-router-dom'

export const { Router, registerRoute, settings } = createElectronRouter({
  port: 4927,

  types: {
    ids: ['main', 'about'],
  },
})
