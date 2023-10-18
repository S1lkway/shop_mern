

function Login() {

  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form className="userModalForm" onSubmit={onSubmit}>
      <div className="userModalFormGroup">
        <input
          className='userModalFormInput'
          type="email"
          id="email"
          name='email'
          // value={email}
          placeholder='Enter your email'
        // onChange={onChange}
        />
      </div>
      <div className="userModalFormGroup">
        <input
          className='userModalFormInput'
          type="password"
          id="password"
          name='password'
          // value={password}
          placeholder='Enter password'
        // onChange={onChange}
        />
      </div>

      <h5 title="Forgot password?">Forgot password?</h5>

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