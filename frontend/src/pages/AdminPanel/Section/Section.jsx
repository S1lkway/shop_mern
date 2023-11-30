import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
// import ReactModal from 'react-modal';
import { toast } from 'react-toastify'
import ReactModal from 'react-modal';
//-Components
import GroupList from './Groups/GroupList'
import ConfirmModal from '../../../components/ConfirmModal';
//-MUI icons
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
//-Redux
import { editMenuSection, resetMenuSections, deleteMenuSection } from '../../../features/sections/sectionSlice';


function Section() {
  //* CONSTS *******************************************
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { sectionId } = useParams();
  const { sections, sectionsIsError, sectionsIsSuccess, sectionsMessage } = useSelector((state) => state.menuSections)
  const section = sections.find(section => section._id === sectionId);
  const [mainParChanged, setMainParChanged] = useState(false)
  const [formData, setFormData] = useState({
    name: section?.name,
    description: section?.description || '',
    activeInMenu: section?.activeInMenu,
  })

  const { name, description, activeInMenu } = formData

  //* MODAL
  const [modalIsOpen, setModalIsOpen] = useState(false);
  ///MODAL
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  //* ACTIONS *******************************************

  /// Form actions
  useEffect(() => {
    if (sectionsIsError && mainParChanged) {
      toast.error(sectionsMessage)
      setMainParChanged(false)
    }
    if (sectionsIsSuccess && mainParChanged) {
      toast.success('Main parameters were changed')
      setMainParChanged(false)
    }
    dispatch(resetMenuSections())
    // eslint-disable-next-line
  }, [sections, sectionsIsError, sectionsIsSuccess, sectionsMessage, dispatch])

  const deleteListSection = (sectionId) => {
    closeModal()
    dispatch(deleteMenuSection(sectionId))
    navigate('/admin_panel')
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (name.length < 2) {
      toast.error("Section name can't be less than 2 symbols")
    } else {
      const menuSectionData = {
        sectionId,
        name,
        description,
        activeInMenu
      }
      // console.log(menuSectionData)
      setMainParChanged(true)
      dispatch(editMenuSection(menuSectionData))
    }
  }

  return (
    <div className='sectionEditContainer'>

      <div className='sectionEditHeader'>
        <div className='sectionEditTitle'>
          <span
            onClick={() => navigate('/admin_panel')}
            className='comeBackButton'
            title='Return to sections page'>
            <KeyboardReturnOutlinedIcon />
          </span>
          <h2><i>Section "{section?.name}"</i></h2>
        </div>
        <button
          onClick={openModal}
          title='Delete section'
          className='defaultFormButton'>
          <DeleteOutlinedIcon />
        </button>
      </div>

      <div className='sectionEditZone'>
        <div className='sectionEditMainParametrs'>
          <div className='editMainParametersHeader'>
            <h3>Main parameters <span title="Main parameters of menu section"><InfoOutlinedIcon /></span></h3>
            <div className="defaultFormToggle">
              <label className="toggle">
                <span className="toggle-label">Active</span>
                <input
                  className="toggle-checkbox"
                  type="checkbox"
                  name="activeInMenu"
                  value={activeInMenu}
                  checked={activeInMenu}
                  onChange={() => setFormData((prevState) => ({
                    ...prevState,
                    activeInMenu: !activeInMenu,
                  }))}
                />
                <div className="toggle-switch"></div>
              </label>
            </div>
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
            <div className="defaultFormGroup">
              <button
                className='defaultFormButton'
                type='submit' >
                Save
              </button>
            </div>
          </form>
        </div>

        {/* GROUP LIST ******************************************/}
        <GroupList section={section} />
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='confirmModal'
        overlayClassName="userOverlay" >
        <ConfirmModal closeModal={closeModal} handleFunction={() => deleteListSection(sectionId)} />
      </ReactModal>
    </div>
  )
}

export default Section