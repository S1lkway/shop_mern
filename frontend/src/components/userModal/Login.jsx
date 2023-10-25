import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice'

function Login(props) {
  const setUserConnected = props.setUserConnected
  const dispatch = useDispatch()
  const { user, isError, isSuccess, message } = useSelector((state) => state.auth)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }


  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }
    setUserConnected(true)
    dispatch(login(userData))
  }

  return (
    <form className="defaultForm" onSubmit={onSubmit}>
      <div className="defaultFormGroup">
        <label htmlFor="email" className="defaultFormLabel">
          Email
        </label>
        <input
          className='defaultFormInput userModalFormInput'
          autoComplete="on"
          type="email"
          id="email"
          name='email'
          value={email}
          placeholder='Enter your email'
          onChange={onChange}
        />
      </div>
      <div className="defaultFormGroup">
        <label htmlFor="password" className="defaultFormLabel">
          Password
        </label>
        <input
          className='defaultFormInput userModalFormInput'
          autoComplete="on"
          type="password"
          id="password"
          name='password'
          value={password}
          placeholder='Enter password'
          onChange={onChange}
        />
      </div>

      <h5 title="Forgot password?"><span>Forgot password?</span></h5>

      <div className="defaultFormGroup">
        <button
          className='defaultFormButton userModalFormButton'
          type='submit' >
          Sign in
        </button>
      </div>

    </form>
  )
}

export default Login