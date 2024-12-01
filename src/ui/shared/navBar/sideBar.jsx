import React from 'react'
import * as style from '../../../app/page.module.css'
import Link from 'next/link'
import Image from 'next/image'
//import { logo, homeImg, treesImg } from '../../../../favicon_io'
import treesImg from '../../../../public/forest.png'
import homeImg from '../../../../public/home.png'
import logo from '../../../../favicon_io/logo.png'

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
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius:'5px',
              objectPosition: 'center'}}
            />
          </div>

          {/* <div style={{flex:1, height:'100%', overflow:'hidden'}}>
            <p>Water Tree</p>
          </div> */}
        </div>
      </div>
      
      <Link href='/home' className={style.card}>
        Home
        <div className={style.cardImgContainer}>
          <Image src={homeImg} alt='home'
          style={{
          width: '15px',
          height: '15px',
          objectFit: 'cover',
          objectPosition: 'center'
          }}/>
        </div>
      </Link>
      <Link href='/home/trees' className={style.card}>
        Trees Menu
        <div className={style.cardImgContainer}>
          <Image src={treesImg} alt='home'
          style={{
            width: '15px',
            height: '15px',
            objectFit: 'cover',
            objectPosition: 'center',
           }}/>
        </div>
      </Link>
    </div>
  )
}

export default SideBar
