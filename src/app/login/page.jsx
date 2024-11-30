'use client'
import React from 'react'
import * as style from '../page.module.css'
import Form from './components/formulario'

const Login = () => {

  return (
    <div className={style.logInContainer}>
      <Form/>
    </div>
  )
}

export default Login