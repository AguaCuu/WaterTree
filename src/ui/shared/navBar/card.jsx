import React from 'react'
import * as style from '../../../app/page.module.css'

const Card = props => {
  return (
    <div className={style.card}>
      <p>{props.name}</p>
    </div>
  )
}

export default Card
