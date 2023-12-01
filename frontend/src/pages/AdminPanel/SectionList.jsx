import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import ReactModal from 'react-modal';
//-Components
import ConfirmModal from '../../components/ConfirmModal';

//-MUI icons
import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
//-Redux
import { createMenuSection, resetMenuSections, deleteMenuSection } from '../../features/sections/sectionSlice'

function SectionList() {
  //*CONSTS
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { sections, sectionsIsLoading, sectionsIsSuccess, sectionsIsError, sectionsMessage } = useSelector((state) => state.menuSections)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  })
  const { name, description } = formData

  //* MODAL
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteSectionId, setDeleteSectionId] = useState('');
  ///MODAL
  const openModal = (sectionId) => {
    setDeleteSectionId(sectionId)
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  //*ACTIONS
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
    dispatch(deleteMenuSection(sectionId))
    closeModal()
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
        <div className='createSectionFormTitle'>
          <h3>
            <i><AddToQueueOutlinedIcon /> Create Section</i>
          </h3>
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
            <input
              className='defaultFormInput'
              autoComplete="on"
              type="text"
              id='description'
              value={description}
              name='description'
              placeholder='Description of Menu Section'
              onChange={onChange}
            />
          </div>
          <div className="defaultFormGroup createSectionButton">
            <button
              className='defaultFormButton'
              type='submit' >
              Create
            </button>
          </div>
        </form>
      </div>

      <div className='menuSectionsList'>
        <h2><i><DvrOutlinedIcon /> Section list</i></h2>
        {sections?.map((section) => (
          <div
            className='sectionListItem'
            key={section._id}>
            <div
              title='Click to edit section'
              className='defaultFormButton sectionsListButton'
              onClick={() => goToEditSection(section._id)}>
              <div title='It shows activity of section in menu. If green, users can see it in'>
                <TurnedInIcon style={{ color: section.activeInMenu ? 'green' : 'red' }} />
              </div>
              <div>{section.name}</div>


            </div>
            <div
              className='defaultFormButton deleteListButton'
              title='Delete section'>
              <DeleteOutlinedIcon
                className='listDeleteIcon'
                onClick={() => openModal(section._id)} />
            </div>
          </div>
        ))}
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='confirmModal'
        overlayClassName="userOverlay" >
        <ConfirmModal closeModal={closeModal} handleFunction={() => deleteListSection(deleteSectionId)} />
      </ReactModal>
    </div>
  )
}

export default SectionList