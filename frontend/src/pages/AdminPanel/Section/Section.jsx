import { useState } from 'react'
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
  // console.log(section)

  const [formData, setFormData] = useState({
    name: section.name,
    description: section.description,
    activeInMenu: section.activeInMenu,
  })

  const { name, description } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

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
        <form
          className="defaultForm"
          onSubmit={onSubmit}>
          <div className="defaultFormGroup">
            <label htmlFor="name" className="defaultFormLabel">
              Name
            </label>
            <input
              className='defaultFormInput'
              autoComplete="on"
              type="text"
              name='name'
              id='name'
              value={name}
              placeholder='Enter name for section'
              onChange={onChange}
            />
          </div>
          <div className="defaultFormGroup">
            <label htmlFor="description" className="defaultFormLabel">
              Description <i>(optional)</i>
            </label>
            <textarea
              className='defaultFormTextArea'
              autoComplete="on"
              type="textarea"
              id='description'
              value={description}
              name='description'
              placeholder='Description of Menu Section'
              rows="3"
              onChange={onChange}
            />
          </div>
          <div className="defaultFormGroup">
            <button
              className='defaultFormButton'
              type='submit' >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Section