import React from 'react'
//import Signup from './components/signup'
import * as styles from '../page.module.css'
import Signup from './components/signup'
import Link from 'next/link'

export default function page() {
  return (
    <div className={styles.logInContainer}>
      <Link href='/'>Back</Link>
      <Signup/>
    </div>
  )
}

