import { NextResponse } from 'next/server'
import { User } from '~/app/api/entities'
import bcrypt from 'bcrypt'
import ERROR from '~/error'
import queryDB from '~/app/api/libs/queryDB'
import cleanerData from '~/app/api/libs/cleanerData'
import validatorFields from '~/app/api/libs/validatorFields'
import payloadFormatter from '~/app/api/utils/payloadFormatter'
import authenticationToken from '~/app/api/libs/authenticationToken'

export const POST = async request => {
  try{
    const data = await request.json()
    if(validatorFields({ data, shape: User.registerShape })){
      const payload = await queryDB({
        entity: 'user',
        queryType: 'create',
        data: {
          ...data,
          password: await bcrypt.hash(data.password, 12)
        }
      })
      const response = cleanerData({ payload })
      return NextResponse.json(response, { status: 201 })
    } 
    return ERROR.FORBIDDEN()
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: error.status || 500 })
  }
}

export const GET = async request => {
  try{
    const hasPermission = authenticationToken(request)
    if(!hasPermission) return ERROR.FORBIDDEN()
    const payloads = await queryDB({
      entity: 'user',
      queryType: 'findMany',
    })
    if(payloads){
      const response = payloadFormatter(payloads.map(payload => cleanerData({ payload })))
      return NextResponse.json(response, { status: 200 })
    }
    return ERROR.NOT_FOUND()
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: error.status || 500 })
  }
}