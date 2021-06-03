const { nanoid } = require('nanoid')
const auth = require('../auth')
const table = 'user'

module.exports = (injectedStore) => {
  let store = injectedStore
  if (!store) {
    store = require('../../../store/dummy')
  }

  const list = (table) => {
    if (!table) {
      const error = 'Not value'
      return error
    }
    const response = store.list(table)
    return response
  }

  const get = (id) => {
    return new Promise((resolve, reject) => {
      const response = store.get(table, id)
      return resolve(response)
    })
  }

  const upsert = async (body) => {
    const user = {
      id: body.id || nanoid(),
      name: body.name,
      username: body.username
    }

    if (body.password || body.username) {
      await auth.upsert({
        id: user.id,
        username: user.username,
        password: body.password
      })
    }

    return store.upsert(table, user)
  }

  const remove = (table, id) => {
    return store.remove(table.id)
  }

  return {
    list,
    get,
    upsert,
    remove
  }
}
