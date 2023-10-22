import { Link } from 'react-router-dom'
//-MUI
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function Navbar() {
  return (
    <div className='navbar between'>
      <div className="navigationLinks between">
        <Link
          to='/menu'
          title='Menu'>
          <h4>Menu</h4>
        </Link>
        <Link
          to='/deals'
          title='Deals & Coupons'>
          <h4>Deals</h4>
        </Link>
      </div>
      <div className="navigationLinks between">
        <div>
          <Link
            to='/restaraunt'
            title='Choose favorite restaraunt'>
            <StoreOutlinedIcon />
            <span className='hideMedia600'> Restaraunt</span>
          </Link>
        </div>
        <div>
          <Link
            to='/addresses'
            title='Choose address for delivery'>
            <LocationOnOutlinedIcon />
            <span className='hideMedia600'>Address</span>
          </Link>
        </div>
      </div>
    </div >
  )
}

export default Navbar