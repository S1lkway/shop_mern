import { useState } from "react"
//-Components
import SectionList from "./SectionList"


function AdminPanel() {
  const [pickedLink, setPickedLink] = useState('Section')

  return (
    <div className="adminPanelContainer">
      <div className="adminPanelHeader">
        <div
          onClick={() => setPickedLink('Section')}
          className={pickedLink === 'Section' ? ('adminPanelHeaderLink pickedLink') : ('adminPanelHeaderLink')}
          title='Sections'>
          <h2>Sections</h2>
        </div>
        <div
          onClick={() => setPickedLink('Dishes')}
          className={pickedLink === 'Dishes' ? ('adminPanelHeaderLink pickedLink') : ('adminPanelHeaderLink')}
          title='Dishes'>
          <h2>Dishes</h2>
        </div>
      </div>
      <SectionList />
    </div>
  )
}

export default AdminPanel