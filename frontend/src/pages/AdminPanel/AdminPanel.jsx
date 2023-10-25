import { useState } from 'react'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { toast } from 'react-toastify'
//-MUI icons
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import FastfoodIcon from '@mui/icons-material/Fastfood';
//-Components
import MenuSections from './MenuSections/MenuSections'
import Dishes from './Dishes/Dishes'

function AdminPanel() {
  // const navigate = useNavigate()
  // const { user } = useSelector((state) => state.auth)
  const [panelPage, setPanelPage] = useState('MenuSections')
  const panelPages = {
    MenuSections: <MenuSections />,
    Dishes: <Dishes />,
  };

  return (
    <>
      <div className="adminPanelLinks">
        <Link
          onClick={() => setPanelPage('MenuSections')}
          title='Add menu section'>
          <h3
            className={panelPage === 'MenuSections' && 'pickedLink'}>
            <MenuBookOutlinedIcon /> Menu Sections
          </h3>
        </Link>
        <Link
          onClick={() => setPanelPage('Dishes')}
          title='Add a dish for menu'>
          <h3
            className={panelPage === 'Dishes' && 'pickedLink'}>
            <FastfoodIcon /> Dishes for menu
          </h3>
        </Link>
      </div>
      {panelPages[panelPage]}
    </>
  )
}

export default AdminPanel