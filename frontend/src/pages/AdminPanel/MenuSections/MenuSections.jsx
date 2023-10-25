import { Link } from 'react-router-dom'

//-MUI icons
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';


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
      <div className='createForm'>
        <div className='createFormTitle'>
          <LibraryAddOutlinedIcon />
          <span>Create new</span>
        </div>
        <form
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
              // value={email}
              placeholder='Enter name for section'
            // onChange={onChange}
            />
          </div>
          <div className="defaultFormGroup">
            <label htmlFor="name" className="defaultFormLabel">
              Description(optional)
            </label>
            <textarea
              className='defaultFormTextArea'
              autoComplete="on"
              type="textarea"
              name='description'
              placeholder='Description of Menu Section'
              rows="4"
            />
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

      <div className='menuSectionsList'>
        <h2><i><DvrOutlinedIcon /> Sections list</i></h2>
        <ul className='defaultList'>
          <li>
            <Link
              to='/order_history'>
              <span> Order history</span>
            </Link>
          </li>
          <li>
            <Link
              to='/order_history'>
              <span> Order history</span>
            </Link>
          </li>
          <li>
            <Link
              to='/order_history'>
              <span> Order history</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default MenuSections