import { Link } from 'react-router-dom'
//-MUI
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function Navbar() {
  return (
    <div className='navbar between'>
      <div className="navigationLinks between">
        <Link
          to='/menu'>
          <h4>Menu</h4>
        </Link>
        <Link
          to='/deals'>
          <h4>Deals</h4>
        </Link>
      </div>
      <div className="navigationLinks between">
        <div>
          <Link
            to='/pick_store'>
            <StoreOutlinedIcon />
            <span> Pick store</span>
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