import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
//-MUI icons
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
//- Redux
import { createSectionGroup } from '../../../../features/sections/sectionSlice'

function AddGroup(props) {
  const { sectionId } = useParams();
  const dispatch = useDispatch()
  const { sections, sectionsIsError, sectionsIsSuccess, sectionsMessage } = useSelector((state) => state.menuSections)
  const [addGroupChanged, setAddGroupChanged] = useState(false)
  const [groupFormData, setGroupFormData] = useState({
    groupName: ''
  })
  const { groupName } = groupFormData

  /// Form actions
  useEffect(() => {
    if (sectionsIsError && addGroupChanged) {
      toast.error(sectionsMessage)
      setAddGroupChanged(false)
    }
    if (sectionsIsSuccess && addGroupChanged) {
      setGroupFormData({ groupName: '' })
      toast.success('New group added')
      setAddGroupChanged(false)
    }
    // eslint-disable-next-line
  }, [sections, sectionsIsError, sectionsIsSuccess, sectionsMessage, dispatch])

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
        name: groupName,
      }
      setAddGroupChanged(true)
      dispatch(createSectionGroup(sectionData))
      // console.log(sectionData)
    }
  }


  return (
    <form
      className="defaultForm addGroupForm"
      onSubmit={onSubmit}>
      <div className="defaultFormGroup">
        <label htmlFor="groupName" className="defaultFormLabel">
          Add group
        </label>
        <input
          className='defaultFormInput'
          type="text"
          name='groupName'
          id='groupName'
          value={groupName}
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