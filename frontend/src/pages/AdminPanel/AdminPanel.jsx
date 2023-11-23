import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import ReactModal from 'react-modal';
//-Components
import ConfirmModal from '../../components/ConfirmModal';

//-MUI icons
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
//-Redux
import { getMenuSections, createMenuSection, resetMenuSections, deleteMenuSection } from '../../features/sections/sectionSlice'


function AdminPanel() {
  //*CONSTS
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { sections, sectionsIsLoading, sectionsIsSuccess, sectionsIsError, sectionsMessage } = useSelector(
    (state) => state.menuSections
  )
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  })
  const { name, description } = formData

  //* MODAL
  const [modalIsOpen, setModalIsOpen] = useState(false);
  ///MODAL
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  //*ACTIONS
  useEffect(() => {
    dispatch(getMenuSections())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (sectionsIsError) {
      toast.error(sectionsMessage)
      dispatch(resetMenuSections())
    }
    if (sectionsIsSuccess) {
      if (name.length > 0) {
        toast.success('Menu section was created')
      }
      setFormData({ name: '', description: '' })
      dispatch(resetMenuSections())
    }
    // eslint-disable-next-line
  }, [sections, sectionsIsLoading, sectionsIsSuccess, sectionsIsError, sectionsMessage, dispatch])

  const goToEditSection = (sectionId) => {
    const navigateLink = '/section/' + sectionId
    navigate(navigateLink)
  }

  const deleteListSection = (sectionId) => {
    console.log('Delete section ' + sectionId)
    closeModal()
    dispatch(deleteMenuSection(sectionId))
  }


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
          <div key={section._id} className='defaultFormButton sectionsListButton'>
            <div
              title='Click to edit section'
              className='sectionMainButton'
              onClick={() => goToEditSection(section._id)}>
              <div title='It shows activity of section in menu. If green, users can see it in'>
                <TurnedInIcon style={{ color: section.activeInMenu ? 'green' : 'red' }} />
              </div>
              <div>{section.name}</div>
            </div>
            <div title='Delete section' >
              <DeleteOutlinedIcon
                className='listDeleteIcon'
                onClick={openModal} />
            </div>
            <ReactModal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              className='confirmModal'
              overlayClassName="userOverlay" >
              <ConfirmModal closeModal={closeModal} handleFunction={() => deleteListSection(section._id)} />
            </ReactModal>
          </div>
        ))}
      </div>

    </div>
  )
}

export default AdminPanel