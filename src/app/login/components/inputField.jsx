import * as styles from '~/app/page.module.css'
import { Input } from '@mui/material'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { useStore } from '~/app/libs/store'
import apiFetch from '~/app/libs/apiFetch'
import { useState } from 'react'

const InputField = (props) => {
  const [errorMessage, setErrorMessage] = useState('') 
  const { doFetchMe, doFetchTrees, doFetchEvents } = useStore(state => state)
  const validationSchema = object({
    email: string().email('Ingrese un email válido').required('El email es obligatorio'),
    password: string().required('La contraseña es obligatoria')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '' 
    },
    validationSchema: validationSchema,
    onSubmit: async values => await handleLogin(values)
  })

  const handleLogin = async values => {
    try {
      const token = await apiFetch({ payload: { ...values }, method: 'POST', url: '/api/user/login' })
      if (token) {
        localStorage.setItem('token', token)
        await doFetchMe()
        await doFetchTrees()
        await doFetchEvents()
        setErrorMessage('') 
      } else {
        setErrorMessage('Credenciales inválidas') 
      }
    } catch (error) {
      setErrorMessage('Error al intentar iniciar sesión') 
    }
  }

  return (
    <div style={{height:'80%', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <form action='' onSubmit={formik.handleSubmit} className={styles.logInForm}>
        <h2>Login</h2>
        <Input
          type='email' 
          placeholder='example@gmail.com' 
          id='email'
          name='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}>
        </Input>
        {formik.touched.email && formik.errors.email ? <p style={{ color:'red', margin:'0' }}>{formik.errors.Email}</p> : null}
        <Input 
          type='password' 
          placeholder='12345678' 
          id='password'
          name='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}>
        </Input>
        {formik.touched.Password && formik.errors.Password ? <p style={{ color:'red', margin:'0' }}>{formik.errors.Password}</p> : null}
        <button className={styles.logInButton} type='submit'>Submit</button>
        {errorMessage && <p style={{ color: 'red', margin: '10px 0' }}>{errorMessage}</p>} {/* Muestra el mensaje de error */}
      </form>
    </div>
  )
}

export default InputField
