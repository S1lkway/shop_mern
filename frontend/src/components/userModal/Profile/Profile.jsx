import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import ProfileList from './ProfileList';
//-MUI icons
import ReplyIcon from '@mui/icons-material/Reply';
// - Redux
import { edit, reset } from '../../../features/auth/authSlice'

function Profile() {
  const dispatch = useDispatch()
  const [editProfileForm, setEditProfileForm] = useState(false)
  const { user, isError, isSuccess, message } = useSelector((state) => state.auth)

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: '',
    password2: ''
  })
  const { name, email, password, password2 } = formData

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, dispatch])

  const profileForm = () => {
    setEditProfileForm(!editProfileForm)
  }

  //*EDIT formData BY CHANGING DATA IN FORM FIELDS
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }


  const onSubmit = (e) => {
    e.preventDefault()
    ///Check passwords fields
    if (password !== password2) {
      toast.error('Password do not match')
    } else {
      if (name.length < 4 || email.length < 4 || password.length < 4) {
        toast.error('Fields must contain at least 4 characters')
      } else {
        const userData = {
          name,
          email,
          password,
        }
        ///We send data from form to authSlice to register function and there to server by authService
        toast.success('Profile changed')
        dispatch(edit(userData))
      }
    }
  }

  return (
    <div className='flex_column userModalProfile'>
      {editProfileForm === true ?
        (
          <>
            <form className="userModalForm" onSubmit={onSubmit}>
              <div className='userModalFormTitle'>
                <h2><i>Edit profile</i></h2>
                <ReplyIcon onClick={profileForm} />
              </div>

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
                  readOnly
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
                  Save
                </button>
              </div>

            </form>
          </>
        ) :
        (
          <ProfileList profileForm={profileForm} />
        )}
    </div>
  )
}

export default Profile