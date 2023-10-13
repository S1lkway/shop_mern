import { Link } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { logout, reset } from '../features/auth/authSlice'
//-MUI icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

function Header() {
  // const navigate = useNavigate()
  // const dispatch = useDispatch()
  // const { user } = useSelector((state) => state.auth)

  // const onLogout = () => {
  //   dispatch(logout())
  //   dispatch(reset())
  //   navigate('/')
  // }
  return (
    <header className='header'>
      <div className='logo between'>
        <Link to='/'>
          <h4><i> Shop picture </i></h4>
        </Link>
        <div>
          <form>
            <div>
              <input
                type="text"
                id="search"
                name='search'
                // value={email}
                placeholder='What are you looking for?'
              // onChange={onChange}
              />
            </div>
          </form>
        </div>
      </div>

      <ul>
        <li>
          <Link to='/login'>
            <AccountCircleOutlinedIcon />
          </Link>
        </li>
        <li>
          <Link to='/login'>
            <LocalShippingOutlinedIcon />
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <FavoriteBorderIcon />
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <ShoppingBasketOutlinedIcon />
          </Link>
        </li>
      </ul >
    </header >
  )
}

export default Header