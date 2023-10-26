import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

//-MUI icons
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
//-Redux
import { getMenuSections, createMenuSection, resetMenuSections } from '../../features/sections/sectionSlice'


function AdminPanel() {
  const dispatch = useDispatch()
  const { sections, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.menuSections
  )

  const [formData, setFormData] = useState({
    name: '',
    description: '',
  })

  const { name, description } = formData



  useEffect(() => {
    dispatch(getMenuSections())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (isError) {
      toast.error(message)
      dispatch(resetMenuSections())
    }
    if (isSuccess) {
      if (name.length > 0) {
        toast.success('Menu section was created')
      }
      setFormData({ name: '', description: '' })
      dispatch(resetMenuSections())
    }
    // eslint-disable-next-line
  }, [sections, isLoading, isSuccess, isError, message, dispatch])


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (name.length < 1) {
      toast.error("Field 'name' can't be empty")
    } else {
      const menuSectionData = {
        name,
        description,
      }
      dispatch(createMenuSection(menuSectionData))
    }

  }
  return (
    <div className='menuSectionsContainer'>
      <div className='createForm'>
        <div className='createFormTitle'>
          <LibraryAddOutlinedIcon />
          <span> Create new</span>
        </div>
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
              Create
            </button>
          </div>
        </form>
      </div>

      <div className='menuSectionsList'>
        <h2><i><DvrOutlinedIcon /> Sections list</i></h2>
        {sections?.map((section) => (
          <Link to={'/section/' + section._id} key={section._id} className='defaultFormButton sectionsListButton' title='Edit Section'>
            <span><TurnedInIcon style={{ color: section.activeInMenu ? 'green' : 'red' }} /> {section.name}</span>

            <div title='Delete section'>
              <DeleteOutlinedIcon className='listDeleteIcon' />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AdminPanel