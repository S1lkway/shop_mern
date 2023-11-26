import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux'
import ModalCloseContext from '../../../../utils/ModalCloseContext';
import { toast } from 'react-toastify'
//-MUI icons
import CloseIcon from '@mui/icons-material/Close';
//-Redux
import { createIngredient } from '../../../../features/sections/sectionSlice';

function AddIngredient(props) {
  const dispatch = useDispatch()
  ///CONSTS
  const sectionId = props.section._id
  const groupId = props.group._id
  const closeModal = useContext(ModalCloseContext);
  const [fileData, setFileData] = useState(null);
  const [newImageUrl, setNewImageUrl] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    category: 'Standart',
    description: '',
  })
  const { name, price, description, category } = formData
  const file = fileData

  ///ACTIONS
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

  const addIngredient = (e) => {
    e.preventDefault()

    if (name === '' || fileData === null || category === '') {
      toast.error("Fill all fields except optional")
    } else {
      const ingredientData = new FormData();
      ingredientData.append('sectionId', sectionId);
      ingredientData.append('groupId', groupId);
      ingredientData.append('name', name);
      ingredientData.append('price', parseFloat(price));
      ingredientData.append('category', category);
      ingredientData.append('description', description);
      ingredientData.append('images', file[0]);
      // console.log([...ingredientData.entries()])
      dispatch(createIngredient(ingredientData))
      closeModal()
    }
  }


  return (
    <div className='addIngredient'>
      <div className="addIngredientHeader">
        <div className='addIngredientTitle'>
          <h2>New ingredient</h2>
        </div>
        <div
          className="addIngredientCloseModal"
          title="Close"
          onClick={closeModal}>
          <h4>
            <CloseIcon />
          </h4>
        </div>
      </div>

      <div className='ingredientForm'>
        <form
          className="defaultForm"
          onSubmit={addIngredient}>
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
              placeholder='Enter name for ingredient'
              onChange={onChange}
              required />
          </div>

          <div className="defaultFormGroup">
            <label htmlFor="name" className="defaultFormLabel">
              Price
            </label>
            <input
              className='defaultFormInput'
              type="number"
              name='price'
              id='price'
              value={price}
              min={0}
              step="any"
              placeholder='Enter price for ingredient'
              onChange={onChange}
              required />
          </div>

          <div className="defaultFormGroup newImageFormGroup">
            <div className='addFile'>
              <label htmlFor="name" className="defaultFormLabel">
                Image
              </label>
              <input
                type="file"
                className="defaultFormFileUpload"
                id="file"
                name="file"
                multiple={false}
                onChange={onChange}
                accept='image/*' />
            </div>
            {newImageUrl && (
              <div className='newImageDiv'>
                <img
                  className='newImage'
                  src={newImageUrl}
                  alt={`File "${newImageUrl}" wasn't found`}
                />
              </div>
            )}
          </div>

          <div className="defaultFormGroup">
            <label htmlFor="name" className="defaultFormLabel">
              Category
            </label>
            <select
              name="category"
              value={category}
              onChange={onChange}
              className='defaultFormSelect'
              required>
              <option value="Standart">Standart</option>
              <option value="Meats">Meats</option>
              <option value="Veggies">Veggies</option>
            </select>
          </div>

          <div className="defaultFormGroup">
            <label htmlFor="description" className="defaultFormLabel">
              Description <i>(optional)</i>
            </label>
            <textarea
              className='defaultFormTextArea'
              type="textarea"
              id='description'
              name='description'
              value={description || ''}
              onChange={onChange}
              placeholder='Description for ingredient'
              rows="3" />
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
    </div>
  )
}

export default AddIngredient