import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
//-Components
import SectionList from "./SectionList"
import Dishes from './Dishes'
//-Redux
import { getMenuSections } from '../../features/sections/sectionSlice'


function AdminPanel() {
  const dispatch = useDispatch()
  const [pickedLink, setPickedLink] = useState('Dishes')

  //*ACTIONS
  useEffect(() => {
    dispatch(getMenuSections())
    // eslint-disable-next-line
  }, [])

  const adminPanelPages = {
    SectionList: <SectionList />,
    Dishes: <Dishes />,
  };

  return (
    <div className="adminPanelContainer">
      <div className="adminPanelHeader">
        <div
          onClick={() => setPickedLink('Dishes')}
          className={pickedLink === 'Dishes' ? ('adminPanelHeaderLink pickedLink') : ('adminPanelHeaderLink')}
          title='Dishes'>
          <h4>Dishes</h4>
        </div>
        <div
          onClick={() => setPickedLink('SectionList')}
          className={pickedLink === 'SectionList' ? ('adminPanelHeaderLink pickedLink') : ('adminPanelHeaderLink')}
          title='Sections'>
          <h4>Sections</h4>
        </div>
      </div>
      {adminPanelPages[pickedLink]}
    </div>
  )
}

export default AdminPanel