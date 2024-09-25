'use client'
import React, { useState } from 'react'
import { object, string } from 'yup'
import { register } from '@/api/auth'
import { useFormik } from 'formik'

const RegisterFormValidationSchema = object({
  name: string().required('Name is required'),
  email: string().email('Enter a valid email').required('Email is required'),
  password: string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

function RegisterForm() {
  const [showSnackbar, setShowSnackbar] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },
    validationSchema: RegisterFormValidationSchema,
    onSubmit: async ({ email, name, password }, { resetForm }) => {
      const res = await register({ email, password, name })
      if (res.ok) {
        resetForm()
        setShowSnackbar(true)
      }
    },
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit} noValidate>
        <input
          required
          id="name"
          name="name"
          autoComplete="name"
          autoFocus
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <input
          required
          id="email"
          name="email"
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <input
          required
          name="password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <button type="submit">Register</button>
      </form>
    </>
  )
}

export default RegisterForm
