import { useState } from 'react';
//-MUI icons
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function IngredientItem(props) {
  // const section = props.section
  // const group = props.group
  const ingredient = props.ingredient
  // console.log(ingredient)
  const [showProperties, setShowProperties] = useState(false)
  const formPropertiesClass = showProperties === true ? 'ingredientForm' : 'ingredientForm displayNone'

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
          // onSubmit={addIngredient}
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
              // value={name || ''}
              placeholder='Enter name for ingredient'
              // onChange={onChange}
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
              // value={price || 0}
              min={0}
              placeholder='Enter price for ingredient'
              // onChange={onChange}
              required />
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
              // onChange={onChange}
              accept='image/*'
              required />
          </div>

          <div className="defaultFormGroup">
            <label htmlFor="name" className="defaultFormLabel">
              Category
            </label>
            <select
              name="category"
              // value={category || 'Standart'}
              // onChange={onChange}
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
              // value={description || ''}
              // onChange={onChange}
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
    </div>
  )
}

export default IngredientItem