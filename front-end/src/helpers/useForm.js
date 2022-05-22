import { useState, useEffect } from 'react'
import axios from 'axios'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
    console.log(values)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(values))

    callback(values)
  }

  return { handleChange, handleSubmit, values, errors }
}

export default useForm
