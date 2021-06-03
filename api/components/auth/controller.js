const TABLE = 'auth'

module.exports = (injectedStore) => {
  const store = injectedStore || require('../../../store/dummy')

  const upsert = (body) => {
    const authData = {
      id: body.id
    }

    if (body.username) {
      authData.username = body.username
    }

    if (body.password) {
      authData.password = body.password
    }
    return store.upsert(TABLE, authData)
  }

  return {
    upsert
  }
}
