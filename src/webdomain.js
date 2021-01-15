const ISPManager = require('./ispmanager')

class WebdomainMgr extends ISPManager {
  constructor (params) {
    super(params)

    this.func = 'webdomain'
  }

  list () {
    return this.fetch(this.func)
      .then(({ doc }) => {
        const { error, elem } = doc;

        if (error) throw new Error(error['$type']);

        return elem
      })
  }

  edit (params) {
    return this.fetch(`${this.func}.edit`, params)
      .then(({ doc }) => {
        const { error = null } = doc

        if (error) throw new Error(error['$type'])

        return doc
      })
  }

  async delete (params) {
    const { doc } = await this.fetch(`${this.func}.delete`, params);
    const { error } = doc;

    if (error) {
      throw new Error(error['$type']);
    }

    return doc;
  }
}

module.exports = WebdomainMgr;
