import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

//-MUI icons
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

function GroupButton(props) {
  const { sectionId } = useParams();
  const group = props.group
  const [showEditForm, setShowEditForm] = useState(false)
  const [groupFormData, setGroupFormData] = useState({
    groupName: group.name
  })
  const { groupName } = groupFormData

  //* ACTIONS *******************************************
  const deleteGroup = (groupId) => {
    console.log('Delete group ' + groupId)
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
      const sectionData = {
        sectionId: sectionId,
        groupId: group._id,
        name: groupName,
      }
      // setAddGroupChanged(true)
      // dispatch(createSectionGroup(sectionData))
      console.log(sectionData)
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
                title="Show list of group ingredients"
                className='defaultFormButton groupNameButton'>
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
          onClick={() => { deleteGroup(group._id) }}
          title='Delete group'
          className='defaultFormButton deleteGroupButton'>
          <DeleteOutlinedIcon />
        </button>
      </div>
    </div>
  )
}

export default GroupButton