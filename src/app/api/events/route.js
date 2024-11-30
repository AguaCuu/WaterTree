import { NextResponse } from 'next/server'
import ERROR from '~/error'
import queryDB from '~/app/api/libs/queryDB'
import cleanerData from '~/app/api/libs/cleanerData'
import payloadFormatter from '~/app/api/utils/payloadFormatter'
import authenticationToken from '~/app/api/libs/authenticationToken'

export const POST = async request => {
  try{
    const data = await request.json()
    const hasPermission = authenticationToken(request)
    if(hasPermission){
      const payload = await queryDB({
        entity: 'events',
        queryType: 'create',
        data
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
      entity: 'events',
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