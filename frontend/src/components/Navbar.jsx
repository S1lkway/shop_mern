import { Link } from 'react-router-dom'
//-MUI
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function Navbar() {
  return (
    <div className='navbar between'>
      <div className="navigationLinks between">
        <Link
          to='/products'>
          <h4>Products</h4>
        </Link>
        <Link
          to='/design'>
          <h4>Design</h4>
        </Link>
        <Link
          to='/deals'>
          <h4>Deals</h4>
        </Link>
      </div>
      <div className="navigationLinks between">
        <div>
          <Link
            to='/main_store'>
            <StoreOutlinedIcon />
            <span> Main store</span>
          </Link>
        </div>
        <div>
          <Link
            to='/location'>
            <LocationOnOutlinedIcon />
            <span>Location</span>
          </Link>
        </div>
      </div>
    </div >
  )
}

export default Navbar