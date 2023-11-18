import { useState } from 'react';
import { toast } from 'react-toastify'
//-MUI icons
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CloseIcon from '@mui/icons-material/Close';

function IngredientItem(props) {
  const basePath = '/uploads/menuUploads/'
  // const section = props.section
  // const group = props.group
  const ingredient = props.ingredient
  // console.log(ingredient)
  const [showProperties, setShowProperties] = useState(false)
  const formPropertiesClass = showProperties === true ? 'ingredientForm' : 'ingredientForm displayNone'

  const [selectedImage, setSelectedImage] = useState(null);
  const [newImageUrl, setNewImageUrl] = useState(null)
  const [formData, setFormData] = useState({
    name: ingredient.name,
    price: ingredient.price,
    description: ingredient.description || '',
    category: ingredient.category,
    image: ingredient.image
  })
  const { name, price, description, category, image } = formData
  // console.log(image)

  ///ACTIONS
  const onChange = (e) => {
    if (e.target.name === 'file') {
      const selectedFile = Array.from(e.target.files).filter(
        (file) => file.type.startsWith('image/')
      )
      setSelectedImage(selectedFile);
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setNewImageUrl(imageUrl);
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  }

  const editIngredient = (e) => {
    e.preventDefault()

    if (price <= 0) {
      toast.error("Price must be more than 0")
    } else {
      const ingredientData = new FormData();
      ingredientData.append('name', name);
      ingredientData.append('price', parseFloat(price));
      ingredientData.append('category', category);
      ingredientData.append('description', description);
      ingredientData.append('images', selectedImage);
      console.log([...ingredientData.entries()])
    }

    // console.log(fileData)
    // console.log(formData)
  }

  return (
    <div className='ingredientItem'>
      <div className='ingredientHeader'>
        <div className="ingredientHeaderLeft">
          <button
            onClick={() => setShowProperties(!showProperties)}
            className='defaultFormButton ingredientButton'
            title="Open Ingredient's properties">
            {ingredient.name}
          </button>
        </div>
        <div className="ingredientHeaderRight">
          <button
            // onClick={() => { deleteGroup(group._id) }}
            title='Delete ingredient'
            className='defaultFormButton deleteGroupButton'>
            <DeleteOutlinedIcon />
          </button>
        </div>
      </div>
      <div className={formPropertiesClass}>
        <form
          onSubmit={editIngredient}
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

          <div className="fileFormGroup ingredientFormFile">
            <div className='addFile'>
              <label htmlFor="file" className="defaultFormLabel">
                New Image
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
            <div className='filePicture'>
              {newImageUrl && (
                <>
                  <div
                    className="removeNewImage"
                    title="Remove new image"
                  // onClick={closeModal}
                  >
                    <h4>
                      <CloseIcon />
                    </h4>
                  </div>
                  <img
                    src={newImageUrl}
                    alt={`File "${newImageUrl}" wasn't found`}
                  />
                </>
              )}
              <img
                key={image._id}
                src={basePath + image.filename}
                alt={`File "${image.originalname}" wasn't found`}
                className={newImageUrl ? ('editImage oldImage') : ('editImage')}

              />
            </div>
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
    </div>
  )
}

export default IngredientItem