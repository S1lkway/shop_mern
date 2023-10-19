import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
//-MUI icons
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// - Redux
import { logout, reset } from '../../features/auth/authSlice'

function Profile() {
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())

  }

  return (
    <div className='flex_column userModalProfile'>
      <ul className='userModalProfileList'>
        <li>
          <Link to='/profile'>
            <span><ChairOutlinedIcon /> My designs & rooms</span>
          </Link>
        </li>
        <li>
          <Link to='/profile'>
            <span><InventoryOutlinedIcon /> Purchase history</span>
          </Link>
        </li>
        <li>
          <Link to='/profile'>
            <span><FormatListBulletedOutlinedIcon /> Shopping list</span>
          </Link>
        </li>
        <li>
          <Link to='/profile'>
            <span><LocalShippingOutlinedIcon /> Track your order</span>
          </Link>
        </li>
        <li>
          <Link>
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
    </div>
  )
}

export default Profile