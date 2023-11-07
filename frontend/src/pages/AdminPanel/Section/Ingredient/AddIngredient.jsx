import { useState } from 'react'

function AddIngredient(props) {
  // const section = props.section
  // const group = props.group

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
      <h4>New ingredient</h4>
      <form
        className="defaultForm"
        onSubmit={addIngredient}>
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
            // value={name}
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
            // value={description}
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
      </form>
    </div>
  )
}

export default AddIngredient