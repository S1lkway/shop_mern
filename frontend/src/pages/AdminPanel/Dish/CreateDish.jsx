import React from 'react'

function CreateDish() {
  return (
    <div className='newDishContainer'>
      <div className='ingredientForm'>
        <form
          // onSubmit={addIngredient}
          className="defaultForm">
          <div className="defaultFormGroup">
            <label htmlFor="name" className="defaultFormLabel">
              Section
            </label>
            <select
              name="category"
              // value={category}
              // onChange={onChange}
              className='defaultFormSelect'
              required>
              <option value="Standart">Pizza</option>
              <option value="Meats">Sides</option>
              <option value="Veggies">Veggies</option>
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
              // value={name || ''}
              // onChange={onChange}
              placeholder='Enter name for ingredient'
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
                // onChange={onChange}
                accept='image/*' />
            </div>
            {/* {newImageUrl && (
              <div className='newImageDiv'>
                <img
                  className='newImage'
                  src={newImageUrl}
                  alt={`File "${newImageUrl}" wasn't found`}
                />
              </div>
            )} */}
          </div>

          <div className="defaultFormGroup">
            <label htmlFor="name" className="defaultFormLabel">
              Type
            </label>
            <select
              name="category"
              // value={category}
              // onChange={onChange}
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
              // value={description || ''}
              // onChange={onChange}
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

export default CreateDish