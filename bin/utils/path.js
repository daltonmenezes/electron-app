const { normalize, dirname } = require('node:path')

exports.getDevFolder = path => {
  const [nodeModules, devFolder] = normalize(dirname(path)).split(/\/|\\/g)

  return [nodeModules, devFolder].join('/')
}
