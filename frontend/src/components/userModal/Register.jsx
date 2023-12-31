import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { register, reset } from '../../features/auth/authSlice'

function Register(props) {
  const dispatch = useDispatch()
  const setUserConnected = props.setUserConnected

  ///Data from redux store
  const { user, isError, isSuccess, message } = useSelector((state) => state.auth)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    dispatch(reset())
    // eslint-disable-next-line
  }, [user, isError, isSuccess, message, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      if (name.length < 4 || email.length < 4 || password.length < 4) {
        toast.error('Fields must contain at least 4 characters')
      } else {
        const userData = {
          name,
          email,
          password,
        }
        // We send data from form to authSlice to register function and there to server by authService
        setUserConnected(true)
        dispatch(register(userData))
      }
    }
  }

  return (
    <form className="defaultForm" onSubmit={onSubmit}>
      <div className="defaultFormGroup">
        <label htmlFor="name" className="defaultFormLabel">
          Name
        </label>
        <input
          className='defaultFormInput userModalFormInput'
          autoComplete="on"
          type="text"
          id="name"
          name='name'
          value={name}
          placeholder='Enter your name'
          onChange={onChange}
        />
      </div>
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

      <div className="defaultFormGroup">
        <label htmlFor="password2" className="defaultFormLabel">
          Confirm Password
        </label>
        <input
          className='defaultFormInput userModalFormInput'
          autoComplete="on"
          type="password"
          id="password2"
          name='password2'
          value={password2}
          placeholder='Confirm password'
          onChange={onChange}
        />
      </div>

      <div className="defaultFormGroup">
        <button
          className='defaultFormButton userModalFormButton'
          type='submit' >
          Sign up
        </button>
      </div>

    </form>
  )
}

export default Register