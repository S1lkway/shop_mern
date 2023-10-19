import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice'

function Login() {
  const navigate = useNavigate()
  const location = useLocation();
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const { user, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      toast.success(`Welcome, ${user.name}`)
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch, location])

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

    dispatch(login(userData))
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
          value={email}
          placeholder='Enter your email'
          onChange={onChange}
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
          value={password}
          placeholder='Enter password'
          onChange={onChange}
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