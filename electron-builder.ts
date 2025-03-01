import type { Configuration } from 'electron-builder'

import {
  main,
  name,
  version,
  resources,
  description,
  displayName,
  author as _author,
} from './package.json'

import { getDevFolder } from './src/shared/lib/electron-app/release/utils/path'

const author = _author?.name ?? _author
const currentYear = new Date().getFullYear()
const authorInKebabCase = author.replace(/\s+/g, '-')
const appId = `com.${authorInKebabCase}.${name}`.toLowerCase()

export default {
  appId,
  productName: displayName,
  copyright: `Copyright © ${currentYear} — ${author}`,

  directories: {
    app: getDevFolder(main),
    output: `dist/v${version}`,
  },

  mac: {
    icon: `${resources}/build/icons/icon.icns`,
    category: 'public.app-category.utilities',
  },

  dmg: {
    icon: null,
  },

  linux: {
    category: 'Utilities',
    synopsis: description,
    target: ['AppImage', 'deb', 'pacman', 'freebsd', 'rpm'],
  },

  win: {
    icon: `${resources}/build/icons/icon.ico`,
    target: ['nsis', 'portable', 'zip'],
  },
} satisfies Configuration
