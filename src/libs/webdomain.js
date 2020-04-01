const querystring = require('querystring')
const ISPManager = require('./ispmanager')

class WebdomainMgr extends ISPManager {
  constructor (params) {
    super(params)

    this.func = 'webdomain'
  }

  edit (params) {
    return this.fetch(`${this.func}.edit`, params)
      .then(({ doc }) => {
        const { error = null } = doc

        if (error) throw new Error(error['$type'])

        return doc
      })
  }
}

module.exports = WebdomainMgr
