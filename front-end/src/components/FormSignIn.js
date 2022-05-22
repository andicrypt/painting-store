import React from 'react'

function FormSignIn() {
    // const { handleChange, handleSubmit, values, errors } = useForm(
    //   submitForm,
    //   validate
    // );
  
    return (
      <div className='form-content-left'>
        <form  className='form' noValidate>
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
            //   value={values.username}
            //   onChange={handleChange}
            />
            {/* {errors.username && <p>{errors.username}</p>} */}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Email</label>
            <input
              className='form-input'
              type='email'
              name='email'
              placeholder='Enter your email'
            //   value={values.email}
            //   onChange={handleChange}
            />
            {/* {errors.email && <p>{errors.email}</p>} */}
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
  

export default FormSignIn
