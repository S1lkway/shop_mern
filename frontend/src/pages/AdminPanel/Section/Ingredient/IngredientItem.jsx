import React from 'react'

function IngredientItem(props) {
  // const section = props.section
  // const group = props.group
  const ingredient = props.ingredient
  // console.log(group)
  // const ingredients = group.ingredients

  return (
    <div className='ingredientItem'>
      {ingredient.name}
      {/* <form
        className="defaultForm"
        onSubmit={onSubmit}>
        <div className="defaultFormGroup">
          <label htmlFor="name" className="defaultFormLabel">
            Name
          </label>
          <input
            className='defaultFormInput'
            autoComplete="on"
            type="text"
            name='name'
            id='name'
            value={name}
            placeholder='Enter name for section'
            onChange={onChange}
          />
        </div>
        <div className="defaultFormGroup">
          <label htmlFor="description" className="defaultFormLabel">
            Description <i>(optional)</i>
          </label>
          <textarea
            className='defaultFormTextArea'
            autoComplete="on"
            type="textarea"
            id='description'
            value={description}
            name='description'
            placeholder='Description of Menu Section'
            rows="3"
            onChange={onChange}
          />
        </div>
        <div className="defaultFormGroup">
          <button
            className='defaultFormButton'
            type='submit' >
            Save
          </button>
        </div>
      </form> */}
    </div>
  )
}

export default IngredientItem