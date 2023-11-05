import { useState } from 'react'

//-MUI icons
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';

function GroupButton(props) {
  const group = props.group
  // console.log(group)
  const [showEditForm, setShowEditForm] = useState(false)

  //* ACTIONS *******************************************
  const deleteGroup = (groupId) => {
    console.log('Delete group ' + groupId)
  }


  return (
    <div className='groupListItem'>
      <div className='groupListLeft'>
        {showEditForm ?
          (
            <div className='leftForm'>Form</div>
          ) :
          (
            <div className='leftNameButton'>
              <button
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