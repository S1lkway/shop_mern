import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate, Link } from 'react-router-dom'
import ModalCloseContext from '../../../utils/ModalCloseContext';
//-MUI icons
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
// - Redux
import { logout, reset } from '../../../features/auth/authSlice'

function ProfileList(props) {
  const closeModal = useContext(ModalCloseContext);
  const profileForm = props.profileForm

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    toast.info(`Thank you for your visit, ${user.name}`)
    navigate('/')
    dispatch(logout())
    dispatch(reset())
  }
  return (
    <>
      <ul className='userModalProfileList'>
        <li className='membershipTitle'>
          <Link
            className='membershipLink'
            to='/membership'
            onClick={closeModal}>
            <span><CardMembershipOutlinedIcon /> Membership card</span>
          </Link>
        </li>
        <li>
          <Link
            to='/purchase_history'
            onClick={closeModal}>
            <span><InventoryOutlinedIcon /> Purchase history</span>
          </Link>
        </li>
        <li>
          <Link
            to='/shopping_list'
            onClick={closeModal}>
            <span><FormatListBulletedOutlinedIcon /> Shopping list</span>
          </Link>
        </li>
        <li>
          <Link
            to='/tracking'
            onClick={closeModal}>
            <span><LocalShippingOutlinedIcon /> Track your order</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={profileForm}>
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