const fetch = require('node-fetch-npm')
const querystring = require('querystring')
const https = require('https')

class ISPManager {
  constructor (params) {
    const {
      url,
      login,
      password
    } = params

    this.url = url
    this.credentials = [login, password].join(':')
  }

  async fetch (func, params = {}) {
    const qs = querystring.stringify({
      ...params,
      func,
      authinfo: this.credentials,
      sok: 'ok',
      out: 'json'
    })

    const url = `${this.url}?${qs}`

    try {
      const response = await fetch(url, {
        method: 'GET',
        agent: new https.Agent({
          rejectUnauthorized: false
        })
      })

      return await response.json()
    } catch (error) {
      throw error
    }
  }
}

module.exports = ISPManager
