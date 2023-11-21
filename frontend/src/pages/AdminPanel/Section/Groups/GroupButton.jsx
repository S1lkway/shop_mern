import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactModal from 'react-modal';
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
//-Components
import ConfirmModal from '../../../../components/ConfirmModal';
//-MUI icons
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
//-Redux
import { editSectionGroup, deleteSectionGroup } from '../../../../features/sections/sectionSlice'

function GroupButton(props) {
  const groupIndex = props.index
  const pickedGroup = props.pickedGroup
  const setPickedGroup = props.setPickedGroup
  const dispatch = useDispatch()
  const { sectionId } = useParams();
  const group = props.group
  const { sections, sectionsIsError, sectionsIsSuccess, sectionsMessage } = useSelector((state) => state.menuSections)
  const [showEditForm, setShowEditForm] = useState(false)
  const [editGroupChanged, setEditGroupChanged] = useState(false)
  const [groupFormData, setGroupFormData] = useState({
    groupName: group.name
  })
  const { groupName } = groupFormData

  ///MODAL
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //* MODAL
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  //* ACTIONS *******************************************
  useEffect(() => {
    if (sectionsIsError && editGroupChanged) {
      toast.error(sectionsMessage)
      setEditGroupChanged(false)
    }
    if (sectionsIsSuccess && editGroupChanged) {
      // setGroupFormData({ groupName: '' })
      toast.success('Group name changed')
      setEditGroupChanged(false)
    }
    // eslint-disable-next-line
  }, [sections, sectionsIsError, sectionsIsSuccess, sectionsMessage, dispatch])

  const deleteGroup = (groupId) => {
    const groupData = {
      'sectionId': sectionId,
      'groupId': groupId,
    }
    dispatch(deleteSectionGroup(groupData))
    setPickedGroup(false)
    setModalIsOpen(false)

  }

  const onChange = (e) => {
    setGroupFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (groupName.length < 1) {
      toast.error("Group name can't be empty")
    } else {
      const groupData = {
        sectionId: sectionId,
        groupId: group._id,
        name: groupName,
      }

      setEditGroupChanged(true)
      dispatch(editSectionGroup(groupData))
    }
  }


  return (
    <div className='groupListItem'>
      <div className='groupListLeft'>
        {showEditForm ?
          (
            <div className='leftForm'>
              <form
                className="defaultForm"
                onSubmit={onSubmit}>
                <div className="defaultFormGroup leftFormInput">
                  <input
                    className='defaultFormInput'
                    autoComplete="on"
                    type="text"
                    name='groupName'
                    id='groupName'
                    value={groupName}
                    placeholder='Enter name for section'
                    onChange={onChange} />
                </div>
                <div className="defaultFormGroup">
                  <button
                    title="Save new name"
                    className='defaultFormButton'
                    type='submit' >
                    <SaveOutlinedIcon />
                  </button>
                </div>
              </form>
            </div>
          ) :
          (
            <div className='leftNameButton'>
              <button
                onClick={() => setPickedGroup(groupIndex)}
                title="Show list of group ingredients"
                className={pickedGroup === groupIndex ? ('defaultFormButton groupNameButton pickedButton') : ('defaultFormButton groupNameButton')}>
                {group.name}
              </button>
            </div>
          )}
      </div>
      <div className="groupListRight">
        <button
          onClick={() => setShowEditForm(!showEditForm)}
          title='Edit group name'
          className='defaultFormButton'>
          <EditCalendarOutlinedIcon />
        </button>
        <button
          onClick={openModal}
          title='Delete group'
          className='defaultFormButton deleteGroupButton'>
          <DeleteOutlinedIcon />
        </button>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='confirmModal'
        overlayClassName="userOverlay" >
        <ConfirmModal closeModal={closeModal} handleFunction={() => deleteGroup(group._id)} />
      </ReactModal>
    </div>
  )
}

export default GroupButton