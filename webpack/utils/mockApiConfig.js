const config = require('../../config/index.js')
const devApis = config.mock.mockData
const isMock = config.mock.isMock
function rules (keys) {
  keys.find(key => {
    const leg = /^\/.*/
    if (!leg.test(key)) {
      throw new Error('this devApis key necessary / as head')
      return true
    }
  })
}
function mockApis (app) {
  let keys = Object.keys(devApis)
  rules(keys)
  keys.forEach(key => {
    const preKey = key.replace(/^\//, '/mock/')
    app.get(preKey, (req, res) => {
      res.json(devApis[key])
    })
  })
}

module.exports = {
  mockApis: isMock ? mockApis : () => {}
}