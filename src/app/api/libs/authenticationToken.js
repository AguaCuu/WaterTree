/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken'
import ERROR from '~/error'

const authenticationToken = ({ headers }) => {
  const authHeader = headers.get('authorization')
  const token = authHeader && authHeader.replace(/Bearer /,'')
  console.log(token)
  if (token) {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET)
    return userId
  } else {
    ERROR.FORBIDDEN()
  }
}

export default authenticationToken