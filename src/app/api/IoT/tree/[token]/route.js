import { NextResponse } from 'next/server'
import ERROR from '~/error'
import queryDB from '~/app/api/libs/queryDB'
import cleanerData from '~/app/api/libs/cleanerData'

export const GET = async (request, { params }) => {
  try{
    const { token } = await params
    const payload = await queryDB({
      entity: 'waterTree',
      queryType: 'findUnique',
      filter: { token: String(token) }
    })
    if(payload){
      const response = cleanerData({ payload })
      return NextResponse.json(response, { status: 200 })
    }
    return ERROR.NOT_FOUND()
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: error.status || 500 })
  }
}


export const PATCH = async (request, { params }) => {
  try{
    const { token } = params
    const data = await request.json()
    const payload = await queryDB({
      entity: 'waterTree',
      queryType: 'update',
      filter: { token },
      data
    })
    if(payload){
      const response = cleanerData({ payload })
      return NextResponse.json(response, { status: 200 })
    }
    return ERROR.NOT_FOUND()
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: error.status || 500 })
  }
}