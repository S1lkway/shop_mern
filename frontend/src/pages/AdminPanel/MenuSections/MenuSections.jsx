// import { useState } from 'react'

function MenuSections() {

  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // })


  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }))
  // }


  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='menuSectionsContainer'>
      <div className='sectionsList'></div>
      <form className="defaultForm" onSubmit={onSubmit}>
        <div className="defaultFormGroup">
          <label htmlFor="email" className="defaultFormLabel">
            Name
          </label>
          <input
            className='defaultFormInput'
            autoComplete="on"
            type="name"
            name='name'
            // value={email}
            placeholder='Enter your email'
          // onChange={onChange}
          />
        </div>
        <div className="defaultFormGroup">
          <button
            className='defaultFormButton'
            type='submit' >
            Add
          </button>
        </div>
      </form>
    </div>

  )
}

export default MenuSections