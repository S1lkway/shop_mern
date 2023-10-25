import { Link } from 'react-router-dom'

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
      <ul className='defaultList'>
        <li className='membershipTitle'>
          <Link
            className='membershipLink'
            to='/membership'>
            <span> Membership card</span>
          </Link>
        </li>
        <li>
          <Link
            to='/order_history'>
            <span> Order history</span>
          </Link>
        </li>
      </ul>

      <form
        className="defaultForm"
        onSubmit={onSubmit}>
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