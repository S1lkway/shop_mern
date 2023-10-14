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
      <div className='left_part between'>
        <div className="logo">
          <Link to='/' title='Shop MERN'>
            <img className="header_logo" src="\images\furniture_logo.jpg" alt="Logo"></img>
          </Link>
        </div>
        <div className='search_bar'>
          <form>
            <input
              type="text"
              id="search"
              name='search'
              // value={email}
              placeholder='What are you looking for?'
            // onChange={onChange}
            />
          </form>
        </div>
      </div>

      <div className="header_links">
        <Link to='/login'>
          <AccountCircleOutlinedIcon />
        </Link>
        <Link to='/login'>
          <LocalShippingOutlinedIcon />
        </Link>
        <Link to='/register'>
          <FavoriteBorderIcon />
        </Link>
        <Link to='/register'>
          <ShoppingBasketOutlinedIcon />
        </Link>
      </div>
    </header >
  )
}

export default Header