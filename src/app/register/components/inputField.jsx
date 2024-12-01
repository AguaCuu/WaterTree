import { Input } from '@mui/material'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import apiFetch from '~/app/libs/apiFetch'
import * as styles from '../../page.module.css'

//Loading component
import { CircularProgress } from '@mui/material';

const InputField = () => {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState('') 
  const validationSchema = object({
    name: string()
      .matches(/^[a-zA-Z]+$/, 'El nombre solo debe contener letras')
      .required('El nombre es obligatorio'),
    lastname: string()
      .matches(/^[a-zA-Z]+$/, 'El apellido solo debe contener letras')
      .required('El apellido es obligatorio'),
    email: string()
      .email('Ingrese un email válido')
      .required('El email es obligatorio'),
    // password: string()
    //   .min(8, 'La contraseña debe tener al menos 8 caracteres')
    //   .matches(/[A-Z]/, 'La contraseña debe tener al menos una letra mayúscula')
    //   .matches(/[a-z]/, 'La contraseña debe tener al menos una letra minúscula')
    //   .matches(/[0-9]/, 'La contraseña debe tener al menos un número')
    //   .matches(/[@$!%*?&#]/, 'La contraseña debe tener al menos un carácter especial')
    //   .required('La contraseña es obligatoria'),
    password: string().required('El nombre es obligatorio'),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      handleRegister(values)
    },
  })

  const handleRegister = async values => {
    setIsLoading(true)
    try {
      const newUser = await apiFetch({ payload: { ...values }, method: 'POST', url: '/api/user/' })
      if (newUser) {
        router.push('/login')
      }
    } catch (error) {
      setErrorMessage('Error al intentar regitrarse') 
    }
  }

  return (
    <div
      style={{
        height: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form
        action=""
        onSubmit={formik.handleSubmit}
        className={styles.logInForm}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      >
        <h2>Register</h2>
        {errorMessage && (
          <p style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</p>
        )}
        <div>
          <Input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ width: '100%' }}
          />
          {formik.touched.name && formik.errors.name ? (
            <p style={{ color: 'red', margin: '5px 0 0' }}>{formik.errors.name}</p>
          ) : null}
        </div>

        <div>
          <Input
            type="text"
            placeholder="Last Name"
            id="lastname"
            name="lastname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ width: '100%' }}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <p style={{ color: 'red', margin: '5px 0 0' }}>{formik.errors.lastname}</p>
          ) : null}
        </div>

        <div>
          <Input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ width: '100%' }}
          />
          {formik.touched.email && formik.errors.email ? (
            <p style={{ color: 'red', margin: '5px 0 0' }}>{formik.errors.email}</p>
          ) : null}
        </div>

        <div>
          <Input
            type="password"
            placeholder="Contraseña"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ width: '100%' }}
          />
          {formik.touched.password && formik.errors.password ? (
            <p style={{ color: 'red', margin: '5px 0 0' }}>{formik.errors.password}</p>
          ) : null}
        </div>

        <button
          className={styles.logInButton}
          type="submit"
          style={{ marginTop: '10px', padding: '10px', display:'flex', alignItems:'center', justifyContent:'center' }}
        >
          {isLoading === true ? <CircularProgress color='inherit' size={20} thickness={4} /> : <p style={{margin:0}}>Crear cuenta</p>}
        </button>
      </form>
    </div>
  )
}

export default InputField
