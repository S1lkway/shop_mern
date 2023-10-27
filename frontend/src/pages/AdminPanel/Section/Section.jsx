// import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
//-MUI icons
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';

function Section() {
  const navigate = useNavigate()
  const { sectionId } = useParams();
  const { sections } = useSelector(
    (state) => state.menuSections
  )
  const section = sections.find(section => section._id === sectionId);

  return (
    <div className='sectionEditContainer'>
      <div className='sectionEditTitle'>
        <span
          onClick={() => navigate('/admin_panel')}
          className='comeBackButton'
          title='Return to sections page'>
          <KeyboardReturnOutlinedIcon />
        </span>
        <h2><i>Section "{section?.name}"</i></h2>
      </div>
      <div className='sectionEditMainParametrs'>

      </div>
    </div>
  )
}

export default Section