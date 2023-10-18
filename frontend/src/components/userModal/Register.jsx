import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { register, reset } from '../../features/auth/authSlice'

function Register(props) {
  const dispatch = useDispatch()
  const setBodyComponents = props.setBodyComponents

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

    if (isSuccess || user) {
      setBodyComponents('Profile')
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
      if (name.length < 5 || email.length < 5 || password.length < 5) {
        toast.error('Fields must contain at least 5 characters')
      } else {
        const userData = {
          name,
          email,
          password,
        }
        // We send data from form to authSlice to register function and there to server by authService
        dispatch(register(userData))
      }
    }
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
          value={name}
          placeholder='Enter your name'
          onChange={onChange}
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
          value={password2}
          placeholder='Confirm password'
          onChange={onChange}
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