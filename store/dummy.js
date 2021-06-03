const db = {
  user: []
}

const list = async (table) => {
  try {
    const response = await db[table]
    if (!response) {
      throw new EvalError('db empty')
    } else {
      return response
    }
  } catch (error) {
    return error
  }
}

const get = async (table, id) => {
  // return await db.user.find(reg => reg.id === id)
  const reg = await list(table)
  const response = reg.find(reg => reg.id === id)
  return response
}

const upsert = async (table, user) => {
  if (!db[table]) db[table] = []
  await db[table].push(user)
  console.log(db)
  // return user
}

const remove = (table, id) => {
  return true
}

module.exports = {
  list,
  get,
  upsert,
  remove
}
