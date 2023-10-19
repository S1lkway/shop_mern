import { useDispatch } from 'react-redux'
// - Redux
import { logout, reset } from '../../features/auth/authSlice'

function Profile() {
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())

  }

  return (
    <div><button
      className='userModalFormButton'
      onClick={onLogout}
      type='submit' >
      Sign out
    </button></div>
  )
}

export default Profile