import React from 'react'
import * as style from '../../../app/page.module.css'
//import Card from './card'
import Link from 'next/link'
import Card from './card'
import Link from 'next/link'
import Image from 'next/image'
import logo  from '../../../../favicon_io/logo.png'

const SideBar = () => {
  return (
    <div className={style.navbar}>
      <div style={{ marginBottom:'40px', marginTop:'10px' }}>
        <div className={style.navProfile}>

          <div style={{flex:1, height:'100%', overflow:'hidden', display:'flex', alignItems:'center',justifyContent:'center'}}>
            <Image 
              src={logo} 
              alt="Logo" 
              style={{
              width: '85%',
              height: '80%',
              objectFit: 'cover',
              objectPosition: 'center',
              border:'none',
              borderRadius:'5px' }}
            />
          </div>

          <div style={{flex:1, height:'100%', overflow:'hidden'}}></div>
        </div>
      </div>
      <Link href='/home' className={style.card}>Home</Link>
      <Link href='/home/trees' className={style.card}>Trees Menu</Link>
      {/* <Card name='Home'/>
      <Card name='Arboles'/> */}
      <Link href='/home/trees'>Home</Link>
    </div>
  )
}

export default SideBar
