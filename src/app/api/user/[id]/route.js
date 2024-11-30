import { NextResponse } from 'next/server'
import { User } from '~/app/api/entities'
import bcrypt from 'bcrypt'
import ERROR from '~/error'
import queryDB from '~/app/api/libs/queryDB'
import cleanerData from '~/app/api/libs/cleanerData'
import authenticationToken from '~/app/api/libs/authenticationToken'
import validatorFields from '~/app/api/libs/validatorFields'

export const GET = async (request, { params }) => {
  try{
    const { id } = params
    const hasPermission = authenticationToken(request)
    if(!hasPermission) return ERROR.FORBIDDEN()
    const payload = await queryDB({
      entity: 'user',
      queryType: 'findUnique',
      filter: { id: Number(id) }
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

export const PUT = async (request, { params }) => {
  try {
    const { id } = params
    const hasPermission = authenticationToken(request)
    const { password, ...data } = await request.json()
    if(hasPermission && validatorFields({ data, shape: User.shape })){
      const payload = await queryDB({
        entity: 'user',
        queryType: 'update',
        filter: { id: Number(id) },
        includes: ['permissions'],
        data: {
          ...data,
          ...(password ? { password: await bcrypt.hash(password, 12) } : {})
        }
      })
      const response = cleanerData({ payload })
      return NextResponse.json(response, { status: 200 })
    }
    return ERROR.FORBIDDEN()
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: error.status || 500 })
  }
}

export const PATCH = async (request, { params }) => {
  try {
    const { id } = params
    const hasPermission = authenticationToken(request)
    if(hasPermission){
      const { password, ...data } = await request.json()
      const payload = await queryDB({
        entity: 'user',
        queryType: 'update',
        filter: { id: Number(id) },
        includes: ['permissions'],
        data: {
          ...data,
          ...(password ? { password: await bcrypt.hash(password, 12) } : {})
        }
      })
      const response = cleanerData({ payload })
      return NextResponse.json(response, { status: 200 })
    }
    return ERROR.FORBIDDEN()
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: error.status || 500 })
  }
}

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params
    const hasPermission = authenticationToken(request) 
    if(hasPermission){
      const payload = await queryDB({
        entity: 'user',
        queryType: 'delete',
        filter: { id: Number(id) },
      })
      const response = cleanerData({ payload })
      return NextResponse.json(response, { status: 200 })
    }
    return ERROR.FORBIDDEN()
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: error.status || 500 })
  }
}