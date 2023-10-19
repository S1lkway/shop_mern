import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
//-MUI icons
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// - Redux
import { logout, reset } from '../../../features/auth/authSlice'

function ProfileList(props) {
  const profileForm = props.profileForm

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    toast.info(`Thank you for your visit, ${user.name}`)
    dispatch(logout())
    dispatch(reset())
  }
  return (
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
  )
}

export default ProfileList