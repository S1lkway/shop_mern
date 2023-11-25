import { useState } from 'react';
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import ReactModal from 'react-modal';
//-Components
import ConfirmModal from '../../../../components/ConfirmModal';
//-MUI icons
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CloseIcon from '@mui/icons-material/Close';
//- Redux
import { deleteIngredient, editIngredient } from '../../../../features/sections/sectionSlice';

function IngredientItem(props) {
  //*CONSTS
  const dispatch = useDispatch()
  const basePath = '/uploads/menuUploads/'
  const ingredient = props.ingredient
  const [showProperties, setShowProperties] = useState(false)
  const formPropertiesClass = showProperties === true ? 'ingredientForm' : 'ingredientForm displayNone'
  const [formData, setFormData] = useState({
    name: ingredient.name,
    price: ingredient.price,
    description: ingredient.description || '',
    category: ingredient.category,
  })
  const { name, price, description, category } = formData
  /// New file consts
  const [fileData, setFileData] = useState(null);
  const [newImageUrl, setNewImageUrl] = useState(null)
  const file = fileData


  //* MODAL
  const [modalIsOpen, setModalIsOpen] = useState(false);
  /// Modal actions
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  //* ACTIONS
  const removeNewImage = () => {
    setFileData(null)
    setNewImageUrl(null)
    document.getElementById('file').value = '';
  }

  const removeIngredient = (ingredientId) => {
    const ingredientData = {
      'sectionId': props.section._id,
      'groupId': props.group._id,
      'ingredientId': ingredientId,
    }
    dispatch(deleteIngredient(ingredientData))
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

  const changeIngredient = (e) => {
    e.preventDefault()

    if (price <= 0) {
      toast.error("Price must be more than 0")
    } else {
      const ingredientData = new FormData();
      ingredientData.append('sectionId', props.section._id);
      ingredientData.append('groupId', props.group._id);
      ingredientData.append('ingredientId', ingredient._id);
      ingredientData.append('name', name);
      ingredientData.append('price', parseFloat(price));
      ingredientData.append('category', category);
      ingredientData.append('description', description);
      if (file) {
        ingredientData.append('images', file[0]);
      }
      console.log(ingredientData.get('images'));
      console.log([...ingredientData.entries()])
      dispatch(editIngredient(ingredientData))
    }
  }

  return (
    <div className='ingredientItem'>
      <div className='ingredientHeader'>
        <div className="ingredientHeaderLeft">
          <button
            onClick={() => setShowProperties(!showProperties)}
            className='defaultFormButton ingredientButton'
            title="Open Ingredient's properties">
            <span>{ingredient.name}</span>
            <img
              key={ingredient._id}
              src={basePath + ingredient.image.filename}
              alt={`File "${ingredient.image.originalname}" wasn't found`}
              className='ingredientListImage'
            />
          </button>
        </div>
        <div className="ingredientHeaderRight">
          <button
            onClick={openModal}
            title='Delete ingredient'
            className='defaultFormButton deleteGroupButton'>
            <DeleteOutlinedIcon />
          </button>
        </div>
      </div>
      <div className={formPropertiesClass}>
        <form
          onSubmit={changeIngredient}
          className="defaultForm">
          <div className="defaultFormGroup">
            <label htmlFor="name" className="defaultFormLabel">
              Name
            </label>
            <input
              className='defaultFormInput'
              type="text"
              name='name'
              id='name'
              value={name}
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

          <div className="defaultFormGroup">
            <label htmlFor="name" className="defaultFormLabel">
              Category
            </label>
            <select
              name="category"
              value={category || 'Standart'}
              onChange={onChange}
              className='defaultFormSelect'
              required>
              <option value="Standart">Standart</option>
              <option value="Spicy">Spicy</option>
              <option value="Veggies">Veggies</option>
            </select>
          </div>

          <div className="defaultFormGroup newImageFormGroup">
            <div className='addFile'>
              <label htmlFor="name" className="defaultFormLabel">
                New Image <i>(save to change)</i>
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
            <textarea
              className='defaultFormTextArea'
              type="textarea"
              id='description'
              name='description'
              value={description}
              onChange={onChange}
              placeholder='Description for ingredient'
              rows="3" />
          </div>

          <div className="defaultFormGroup">
            <button
              className='defaultFormButton'
              type='submit' >
              Save changes
            </button>
          </div>
        </form>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='confirmModal'
        overlayClassName="userOverlay" >
        <ConfirmModal closeModal={closeModal} handleFunction={() => removeIngredient(ingredient._id)} />
      </ReactModal>
    </div>
  )
}

export default IngredientItem