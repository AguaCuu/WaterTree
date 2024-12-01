import db from '~/app/api/libs/db'

export const getOptions = ({ filter, data: d }) => {
  const filters = filter ? { where: { ...filter } } : {}
  const data = d ? { data: { ...d } } : {}
  return Object.assign(filters, data)
}

//@queryType one of [findUnique, findMany, delete, update, create, ]
const queryDB = async ({ entity, filter, queryType, data }) => {
  const opts = queryType !== 'createMany' ? getOptions({ filter, data }) : { data }
  let payload
  let element
  let options
  switch(queryType){
    case 'findUnique':
      return await db[entity].findUnique({ ...opts })
  
    case 'findMany': 
      payload = await db[entity].findMany({ ...opts })
      return payload.length ? payload : null

    case 'create':
      return await db[entity].create({ ...opts })
    
    case 'update':
      options = getOptions({ filter })
      element = await db[entity].findUnique(options)
      payload = element ? await db[entity].update({ ...opts }) : null
      return payload
    
    case 'delete':
      options = getOptions({ filter })
      element = await db[entity].findUnique(options)
      payload = element ? await db[entity].delete({ ...opts }) : null
      return payload 

    default: 
      return null
  }
}

export default queryDB