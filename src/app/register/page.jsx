import React from 'react'
//import Signup from './components/signup'
import * as styles from '../page.module.css'
import Signup from './components/signup'

export default function page() {
  return (
    <div className={styles.logInContainer}>
      <Signup/>
    </div>
  )
}

