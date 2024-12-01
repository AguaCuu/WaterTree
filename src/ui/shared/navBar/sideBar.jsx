import React from 'react'
import * as style from '../../../app/page.module.css'
import Card from './card'
//import Link from 'next/link'

const SideBar = () => {
  return (
    <div className={style.navbar}>
      <div style={{
        marginBottom:'40px'
      }}>
        <div className={style.navProfile}>
        </div>
      </div>
      <Card name='Home'/>
      <Card name='Arboles'/>
    </div>
  )
}

export default SideBar
