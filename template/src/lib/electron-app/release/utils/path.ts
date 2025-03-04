import { normalize, dirname } from 'node:path'

export function getDevFolder(path: string) {
  const [nodeModules, devFolder] = normalize(dirname(path)).split(/\/|\\/g)

  return [nodeModules, devFolder].join('/')
}
