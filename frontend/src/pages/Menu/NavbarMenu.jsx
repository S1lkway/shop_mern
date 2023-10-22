import { Link } from 'react-router-dom'
//-MUI Icons
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import RiceBowlOutlinedIcon from '@mui/icons-material/RiceBowlOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

function NavbarMenu() {
  return (
    <div className="navbarMenu between">
      <Link
        title='Pizza'>
        <div className='navbarMenuLink'>
          <LocalPizzaOutlinedIcon />
          <h3>Pizza</h3>
        </div>
      </Link>

      <Link
        title='Sides'>
        <div className='navbarMenuLink'>
          <RiceBowlOutlinedIcon />
          <h3>Sides</h3>
        </div>
      </Link>

      <Link
        title='Pasta'>
        <div className='navbarMenuLink'>
          <RamenDiningOutlinedIcon />
          <h3>Pasta</h3>
        </div>
      </Link>

      <Link
        title='Desserts'>
        <div className='navbarMenuLink'>
          <CookieOutlinedIcon />
          <h3>Desserts</h3>
        </div>
      </Link>

      <Link
        title='Drinks'>
        <div className='navbarMenuLink'>
          <EmojiFoodBeverageOutlinedIcon />
          <h3>Drinks</h3>
        </div>
      </Link>

      <Link
        title='Dips'>
        <div className='navbarMenuLink'>
          <WidgetsOutlinedIcon />
          <h3>Dips</h3>
        </div>
      </Link>
    </div>
  )
}

export default NavbarMenu