import { NextResponse } from 'next/server'
import ERROR from '~/error'
import queryDB from '~/app/api/libs/queryDB'
import cleanerData from '~/app/api/libs/cleanerData'

export const PATCH = async (request, { params }) => {
  try {
    const { token } = await params
    const currentDate = new Date()
    const timeInMexicoCity = new Date(
      currentDate.toLocaleString('en-US', { timeZone: 'America/Mexico_City' })
    ).toISOString()
    const payload = await queryDB({
      entity: 'events',
      queryType: 'update',
      filter: { token },
      data: {
        lastRain: timeInMexicoCity,
      },
    })
    if (payload) {
      const response = cleanerData({ payload })
      return NextResponse.json(response, { status: 200 })
    }
    return ERROR.NOT_FOUND()
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: error.status || 500 })
  }
}
