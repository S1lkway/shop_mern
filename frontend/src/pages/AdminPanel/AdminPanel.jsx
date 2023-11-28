import { useState } from "react"
//-Components
import SectionList from "./SectionList"
import DishList from './DishList'


function AdminPanel() {
  const [pickedLink, setPickedLink] = useState('SectionList')

  const adminPanelPages = {
    SectionList: <SectionList />,
    DishList: <DishList />,
  };

  return (
    <div className="adminPanelContainer">
      <div className="adminPanelHeader">
        <div
          onClick={() => setPickedLink('SectionList')}
          className={pickedLink === 'SectionList' ? ('adminPanelHeaderLink pickedLink') : ('adminPanelHeaderLink')}
          title='Sections'>
          <h2>Sections</h2>
        </div>
        <div
          onClick={() => setPickedLink('DishList')}
          className={pickedLink === 'DishList' ? ('adminPanelHeaderLink pickedLink') : ('adminPanelHeaderLink')}
          title='Dishes'>
          <h2>Dishes</h2>
        </div>
      </div>
      {adminPanelPages[pickedLink]}
    </div>
  )
}

export default AdminPanel