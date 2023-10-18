

function Register() {

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className="userModalForm" onSubmit={onSubmit}>
      <div className="userModalFormGroup">
        <label htmlFor="name" className="userModalFormLabel">
          Name
        </label>
        <input
          className='userModalFormInput'
          autoComplete="on"
          type="text"
          id="name"
          name='name'
          // value={email}
          placeholder='Enter your name'
        // onChange={onChange}
        />
      </div>
      <div className="userModalFormGroup">
        <label htmlFor="email" className="userModalFormLabel">
          Email
        </label>
        <input
          className='userModalFormInput'
          autoComplete="on"
          type="email"
          id="email"
          name='email'
          // value={email}
          placeholder='Enter your email'
        // onChange={onChange}
        />
      </div>
      <div className="userModalFormGroup">
        <label htmlFor="password" className="userModalFormLabel">
          Password
        </label>
        <input
          className='userModalFormInput'
          autoComplete="on"
          type="password"
          id="password"
          name='password'
          // value={password}
          placeholder='Enter password'
        // onChange={onChange}
        />
      </div>

      <div className="userModalFormGroup">
        <label htmlFor="password2" className="userModalFormLabel">
          Confirm Password
        </label>
        <input
          className='userModalFormInput'
          autoComplete="on"
          type="password"
          id="password2"
          name='password2'
          // value={password}
          placeholder='Confirm password'
        // onChange={onChange}
        />
      </div>

      <div className="userModalFormGroup">
        <button
          className='userModalFormButton'
          type='submit' >
          Sign up
        </button>
      </div>

    </form>
  )
}

export default Register