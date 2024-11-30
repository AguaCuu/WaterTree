/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken'
import ERROR from '~/error'

const authenticationToken = ({ headers }) => {
  const authHeader = headers.get('authorization')
  const token = authHeader && authHeader.replace(/authorization /,'')
  if (token) {
    const { validate } = jwt.verify(token, process.env.JWT_SECRET)
    return validate
  } else {
    ERROR.FORBIDDEN()
  }
}

export default authenticationToken