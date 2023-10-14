import { Link } from 'react-router-dom'
//-MUI
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function Navbar() {
  return (
    <div className='navbar between'>
      <div className="navigation_links between">
        <Link to='/profile'>
          <h4>Products</h4>
        </Link>
        <Link to='/profile'>
          <h4>Design</h4>
        </Link>
        <Link to='/profile'>
          <h4>Deals</h4>
        </Link>
      </div>
      <div className="location_links between">

        <Link to='/profile'>
          <StoreOutlinedIcon /> Main store
        </Link>
        <Link to='/profile'>
          <LocationOnOutlinedIcon /> Location
        </Link>
      </div>
    </div>
  )
}

export default Navbar