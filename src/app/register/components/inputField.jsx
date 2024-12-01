import React from 'react'
import { Input } from '@mui/material'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import * as styles from '../../page.module.css'

const InputField = () => {

  const validationSchema = object({
    Name: string().required(),
    Email: string().required(),
    Password: string().required()
  })

  const formik = useFormik({
    initialValues: {
      Name: '',
      Email: '',
      Password: '' 
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.error(values)
    }
  })

  return (
    <div style={{ height:'80%', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <form action='' onSubmit={formik.handleSubmit} className={styles.logInForm}>
        <h2>Register</h2>
        <Input
          type='text' 
          placeholder='Name' 
          id='name'
          name='Name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}>
        </Input>
        {formik.touched.Name && formik.errors.Name ? <p style={{ color:'red', margin:'0' }}>{formik.errors.Name}</p> : null}
        <Input
          type='email' 
          placeholder='example@gmail.com' 
          id='email'
          name='Email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}>
        </Input>
        {formik.touched.Email && formik.errors.Email ? <p style={{ color:'red', margin:'0' }}>{formik.errors.Email}</p> : null}
        <Input 
          type='password' 
          placeholder='12345678' 
          id='password'
          name='Password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}>
        </Input>
        {formik.touched.Password && formik.errors.Password ? <p style={{ color:'red',margin:'0' }}>{formik.errors.Password}</p> : null}
        <button className={styles.logInButton} type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default InputField