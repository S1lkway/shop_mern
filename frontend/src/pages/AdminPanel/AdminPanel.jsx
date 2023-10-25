// import { useEffect } from 'react'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { toast } from 'react-toastify'
//-MUI icons
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import FastfoodIcon from '@mui/icons-material/Fastfood';

function AdminPanel() {
  // const navigate = useNavigate()
  // const { user } = useSelector((state) => state.auth)


  return (
    <>
      <div className="adminPanelLinks">
        <Link
          to='/menu'
          title='Add menu section'>
          <h3><MenuBookOutlinedIcon /> Menu Section</h3>
        </Link>
        <Link
          to='/deals'
          title='Add a dish for menu'>
          <h3><FastfoodIcon /> Dish for menu</h3>
        </Link>
      </div>
    </>
  )
}

export default AdminPanel