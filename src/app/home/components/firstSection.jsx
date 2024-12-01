"use client"
import React from 'react'
import * as styles from '../../page.module.css'
//import trees from '~/../../public/trees.jpg'
import DataApiComponent from './DataApiComponent'
import RainFallGraph from '../components/RainFallSection'

const FirstSection = () => {
  return (
    <div className={styles.mainSection}>
      <div className={styles.apiStyle}>
        <h1>Monitoreo</h1>
        <hr />
      </div>
      
      <div>
        <DataApiComponent/>
        <RainFallGraph/>
      </div>
    </div>
  )
}

export default FirstSection
