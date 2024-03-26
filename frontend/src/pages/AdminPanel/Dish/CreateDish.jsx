import { useState } from 'react'
import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
//-MUI components
import CloseIcon from '@mui/icons-material/Close';

function CreateDish() {
  //* CONSTS *******************************************
  // const navigate = useNavigate()
  // const dispatch = useDispatch()
  const { sections } = useSelector((state) => state.menuSections)

  const [fileData, setFileData] = useState(null);
  const [newImageUrl, setNewImageUrl] = useState(null)
  const [formData, setFormData] = useState({
    section: '',
    name: '',
    description: '',
  })
  const { section, name, description } = formData
  const file = fileData

  //* ACTIONS
  const removeNewImage = () => {
    setFileData(null)
    setNewImageUrl(null)
    document.getElementById('file').value = '';
  }

  const onChange = (e) => {
    if (e.target.name === 'file' && e.target.files.length > 0) {
      const selectedFile = Array.from(e.target.files).filter(
        (file) => file.type.startsWith('image/')
      )
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      //Url to show new image
      setNewImageUrl(imageUrl);
      setFileData(selectedFile);
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  }

  const createNewDish = (e) => {
    e.preventDefault()

    if (section === '' || name === '' || fileData === null) {
      toast.error("Fill all fields except optional")
    } else {
      const dishData = new FormData();
      dishData.append('section', section);
      dishData.append('name', name);
      dishData.append('description', description);
      dishData.append('images', file[0]);
      console.log([...dishData.entries()])
    }
  }



  return (











    <div className='createDishContainer'>



      <div className='createDishTitle'>
        <h2>Main parameters</h2>
      </div>
      <form
        onSubmit={createNewDish}
        className="defaultForm">
        <div className="defaultFormGroup">
          <label htmlFor="section" className="defaultFormLabel">
            Section
          </label>
          <select
            name="section"
            id="section"
            value={section || ''}
            onChange={onChange}
            className='defaultFormSelect'
            required>
            <option value="">Select section</option>
            {sections?.map((section) => (
              <option key={section._id} value={section.name}>{section.name}</option>
            ))}
          </select>
        </div>
        <div className="defaultFormGroup">
          <label htmlFor="name" className="defaultFormLabel">
            Name
          </label>
          <input
            className='defaultFormInput'
            type="text"
            name='name'
            id='name'
            value={name || ''}
            onChange={onChange}
            autoComplete='on'
            placeholder='Enter name for dish'
            required />
        </div>

        <div className="defaultFormGroup newImageFormGroup">
          <div className='addFile'>
            <label htmlFor="file" className="defaultFormLabel">
              Image
            </label>
            <input
              type="file"
              className="defaultFormFileUpload"
              id="file"
              name="file"
              multiple={false}
              onChange={onChange}
              accept='image/*'
              required />
          </div>
          {newImageUrl && (
            <div className='newImageDiv'>
              <img
                className='newImage'
                src={newImageUrl}
                alt={`File "${newImageUrl}" wasn't found`}
              />
              <div
                onClick={() => removeNewImage()}
                className="removeNewImageFromForm"
                title="Remove image">
                <h4>
                  <CloseIcon />
                </h4>
              </div>
            </div>
          )}
        </div>
        <div className="defaultFormGroup">
          <label htmlFor="description" className="defaultFormLabel">
            Description <i>(optional)</i>
          </label>
          <input
            className='defaultFormInput'
            type="text"
            id='description'
            name='description'
            value={description || ''}
            onChange={onChange}
            placeholder='Description for dish' />
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
  )
}

export default CreateDish