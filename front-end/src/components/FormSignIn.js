import React from 'react'
import useForm from '../helpers/useForm';
import validateInfo from '../helpers/validateInfo';

function FormSignIn({submitForm}) {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validateInfo
    );
  
    return (
      <div className='form-content-left'>
        <form onSubmit={handleSubmit}  className='form' noValidate>
          <h1>
            Get started with us today! 
          </h1>
          <div className='form-inputs'>
            <label className='form-label'>Username</label>
            <input
              className='form-input'
              type='text'
              name='username'
              placeholder='Enter your username'
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Password</label>
            <input
              className='form-input'
              type='text'
              name='password'
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button className='form-input-btn' type='submit'>
            Sign up
          </button>
          <span className='form-input-login'>
            Already have an account? Login <a href='#'>here</a>
          </span>
        </form>
      </div>
    );
  };
  

export default FormSignIn;
