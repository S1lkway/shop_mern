import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate, Link } from 'react-router-dom'
import ModalCloseContext from '../../../utils/ModalCloseContext';
//-MUI icons
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
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
      <ul className='defaultList'>
        <li className='membershipTitle'>
          <Link
            className='membershipLink'
            to='/membership'
            onClick={closeModal}>
            <span><LocalPizzaIcon /> Membership card</span>
          </Link>
        </li>
        <li>
          <Link
            to='/order_history'
            onClick={closeModal}>
            <span><InventoryOutlinedIcon /> Order history</span>
          </Link>
        </li>
        <li>
          <Link
            to='/rewards'
            onClick={closeModal}>
            <span><WorkspacePremiumIcon /> Rewards</span>
          </Link>
        </li>
        <li>
          <Link
            to='/tracking'
            onClick={closeModal}>
            <span><LocalShippingOutlinedIcon /> Track your orders</span>
          </Link>
        </li>
        <li>
          <Link
            to='/addresses'
            onClick={closeModal}>
            <span><LocationOnOutlinedIcon /> Addresses</span>
          </Link>
        </li>
        {user.admin && (
          <li>
            <Link
              to='/admin_panel'
              onClick={closeModal}>
              <span><AdminPanelSettingsOutlinedIcon /> Admin panel</span>
            </Link>
          </li>
        )}
        <li>
          <Link
            onClick={profileForm}>
            <span><AccountCircleOutlinedIcon /> Manage account</span>
          </Link>
        </li>
      </ul >
      <button
        className='defaultFormButton userModalFormButton'
        onClick={onLogout}
        type='submit' >
        Sign out
      </button>
    </>
  )
}

export default ProfileList