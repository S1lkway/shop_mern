import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
// import ReactModal from 'react-modal';
import { toast } from 'react-toastify'
//-Components
import AddGroup from './Group/AddGroup';
import GroupButton from './Group/GroupButton';
//-MUI icons
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
//-Redux
import { editMenuSection, resetMenuSections } from '../../../features/sections/sectionSlice';


function Section() {
  //* CONSTS *******************************************
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { sectionId } = useParams();
  const { sections, sectionsIsError, sectionsIsSuccess, sectionsMessage } = useSelector((state) => state.menuSections)
  const section = sections.find(section => section._id === sectionId);
  const [mainParChanged, setMainParChanged] = useState(false)
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [modelClass, setModelClass] = useState('modalOpened')
  // const [modalComponent, setModalComponent] = useState('');
  // console.log(section)
  // const modalComponents = {
  //   AddIngridient: <AddIngridient />
  // };

  const [formData, setFormData] = useState({
    name: section.name,
    description: section.description || '',
    activeInMenu: section.activeInMenu,
  })
  // console.log(formData)

  const { name, description, activeInMenu } = formData

  //* ACTIONS *******************************************
  const deleteSection = (sectionId) => {
    console.log('Delete section ' + sectionId)
  }
  /// Modal actions
  // const openModal = (component) => {
  //   setModelClass('modalOpened')
  //   setModalComponent(component)
  //   setModalIsOpen(true);
  // };
  // const closeModal = () => {
  //   setModelClass('modalClosed')
  //   setTimeout(() => {
  //     setModalIsOpen(false);
  //   }, 250);
  // };

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
          onClick={() => { deleteSection(section._id) }}
          title='Add new group'
          className='defaultFormButton'>
          <DeleteOutlinedIcon />
        </button>
      </div>

      <div className='sectionEditZone'>
        <div className='sectionEditMainParametrs'>
          <div className='editMainParametersHeader'>
            <h3>Main parameters <span title="Main parametrs of menu section"><InfoOutlinedIcon /></span></h3>
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

        <div className='editSectionIngridientGroupsList'>
          <div className='ingridientGroupsListHeader'>
            <h3>Groups of additional ingredients <span title="A list of group for extra ingridients. Click on one in the list to see a list of ingridients in this group below"><InfoOutlinedIcon /></span>
            </h3>
            <AddGroup section={section} />
          </div>
          <div className='ingridientGroupsList'>
            {section?.extraIngredientTypes?.length > 0 ?
              (
                section.extraIngredientTypes.map((group) => (
                  <GroupButton key={group._id} group={group} />
                ))
              ) :
              (
                <span>Section doesn't have added ingredient groups</span>
              )}
          </div>
        </div>
      </div>

      {/* <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={"userModal " + modelClass}
        overlayClassName="userOverlay">
        {modalComponents[modalComponent]}
      </ReactModal> */}

    </div>
  )
}

export default Section