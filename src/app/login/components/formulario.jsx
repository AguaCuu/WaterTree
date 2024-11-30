'use client'
import React from 'react'
import { useFormik, Form as FormikForm, Field, TextField} from 'formik'
import { Box } from '@mui/material'
import InputField from './inputField'

const Form = () => {

  return (
    <Box sx={{
      height: '45svh',
      width: {
        xs: 200,//0
        sm: 200,//600
        md: 350,//900
        lg: 350,//1200
        xl: 600//1536
      },
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      padding: '30px',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.15)',
      border: 'none',
      borderRadius: '5px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'none'
    }}>
      <InputField/>
    </Box>
  )
}

export default Form