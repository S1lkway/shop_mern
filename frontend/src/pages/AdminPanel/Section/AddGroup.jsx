import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
//-MUI icons
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
//- Redux
import { createSectionGroup } from '../../../features/sections/sectionSlice'

function AddGroup(props) {
  const { sectionId } = useParams();
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    groupName: '',
  })

  const { groupName } = formData

  /// Form actions
  const onChange = (e) => {
    setFormData((prevState) => ({
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
        name: groupName,
      }
      dispatch(createSectionGroup(sectionData))
      // console.log(sectionData)
    }


  }
  return (
    <form
      className="defaultForm"
      onSubmit={onSubmit}>
      <div className="defaultFormGroup">
        <label htmlFor="groupName" className="defaultFormLabel">
          Name
        </label>
        <input
          className='defaultFormInput'
          type="text"
          name='groupName'
          id='groupName'
          placeholder='Enter name for group'
          onChange={onChange}
        />
      </div>
      <div className="defaultFormGroup">
        <button
          title='Add new group'
          className='defaultFormButton'>
          <PlaylistAddOutlinedIcon />
        </button>
      </div>

    </form>
  )
}

export default AddGroup