import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
//-MUI icons
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ReplyIcon from '@mui/icons-material/Reply';
// - Redux
import { logout, reset } from '../../../features/auth/authSlice'

function Profile() {
  const dispatch = useDispatch()
  const { user, isError, isSuccess, message } = useSelector((state) => state.auth)
  const [editProfileForm, setEditProfileForm] = useState(false)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess && user) {
      toast.success(`Welcome, ${user.name}`)
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, dispatch])

  const profileForm = () => {
    setEditProfileForm(!editProfileForm)
  }

  const onLogout = () => {
    toast.info(`Thank you for your visit, ${user.name}`)
    dispatch(logout())
    dispatch(reset())
  }

  const onSubmit = (e) => {
    e.preventDefault()
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
                  // value={name}
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
                  // value={password2}
                  placeholder='Confirm password'
                // onChange={onChange}
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
          <>
            <ul className='userModalProfileList'>
              <li>
                <Link to='/design'>
                  <span><ChairOutlinedIcon /> My designs & rooms</span>
                </Link>
              </li>
              <li>
                <Link to='/history'>
                  <span><InventoryOutlinedIcon /> Purchase history</span>
                </Link>
              </li>
              <li>
                <Link to='/shopping_list'>
                  <span><FormatListBulletedOutlinedIcon /> Shopping list</span>
                </Link>
              </li>
              <li>
                <Link to='/tracking'>
                  <span><LocalShippingOutlinedIcon /> Track your order</span>
                </Link>
              </li>
              <li>
                <Link onClick={profileForm}>
                  <span><AccountCircleOutlinedIcon /> Manage account</span>
                </Link>
              </li>
            </ul >
            <button
              className='userModalFormButton'
              onClick={onLogout}
              type='submit' >
              Sign out
            </button>
          </>
        )}


    </div>
  )
}

export default Profile