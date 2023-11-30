import { useState } from "react"
//-Components
import SectionList from "./SectionList"
import Dishes from './Dishes'


function AdminPanel() {
  const [pickedLink, setPickedLink] = useState('Dishes')

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