

function Login() {

  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form className="userModalForm" onSubmit={onSubmit}>
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

      <h5 title="Forgot password?"><span>Forgot password?</span></h5>

      <div className="userModalFormGroup">
        <button
          className='userModalFormButton'
          type='submit' >
          Sign in
        </button>
      </div>

    </form>
  )
}

export default Login