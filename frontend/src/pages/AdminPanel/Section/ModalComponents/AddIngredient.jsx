import { useState, useContext } from 'react';
import ModalCloseContext from '../../../../utils/ModalCloseContext';
//-MUI icons
import CloseIcon from '@mui/icons-material/Close';

function AddIngredient(props) {
  // const section = props.section
  // const group = props.group
  const closeModal = useContext(ModalCloseContext);

  const [formData, setFormData] = useState({
    name: 'aa',
    description: 'bb',
    activeInMenu: 'cc',
  })
  // const { name, description, activeInMenu } = formData

  ///ACTIONS
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const addIngredient = (e) => {
    e.preventDefault()

    console.log(formData)
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
              placeholder='Enter name for ingredient'
              onChange={onChange} />
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
              placeholder='Enter price for ingredient'
              onChange={onChange} />
          </div>

          <div className="defaultFormGroup">
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

          <div className="defaultFormGroup">
            <label htmlFor="name" className="defaultFormLabel">
              Category
            </label>
            <select
              name="category"
              className='defaultFormSelect'>
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
              placeholder='Description for ingredient'
              rows="3"
              onChange={onChange} />
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