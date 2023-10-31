import { useState } from 'react'
// import { useSelector } from 'react-redux'
//-MUI icons
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';

function AddGroup(props) {
  // const section = props.section

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

    const sectionData = {
      groupName
    }
    console.log(sectionData)
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