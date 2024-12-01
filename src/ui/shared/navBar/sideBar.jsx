import React from 'react'
import * as style from '../../../app/page.module.css'
//import Card from './card'
import Link from 'next/link'

const SideBar = () => {
  return (
    <div className={style.navbar}>
      <div style={{
        marginBottom:'40px'
      }}>
        <div className={style.navProfile}>
        </div>
      </div>
      <Link href='/home' className={style.card}>Home</Link>
      <Link href='/home/trees' className={style.card}>Trees Menu</Link>
      {/* <Card name='Home'/>
      <Card name='Arboles'/> */}
    </div>
  )
}

export default SideBar
