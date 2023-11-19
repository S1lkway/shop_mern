import { useState } from 'react';
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import ReactModal from 'react-modal';
import ModalCloseContext from '../../../../utils/ModalCloseContext';
//-Components
import ConfirmModal from '../../../../components/ConfirmModal';
//-MUI icons
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
//- Redux
import { deleteIngredient } from '../../../../features/sections/sectionSlice';

function IngredientItem(props) {
  const dispatch = useDispatch()
  // const basePath = '/uploads/menuUploads/'
  const ingredient = props.ingredient
  // console.log(ingredient)
  const [showProperties, setShowProperties] = useState(false)
  const formPropertiesClass = showProperties === true ? 'ingredientForm' : 'ingredientForm displayNone'

  const [formData, setFormData] = useState({
    name: ingredient.name,
    price: ingredient.price,
    description: ingredient.description || '',
    category: ingredient.category,
  })
  const { name, price, description, category } = formData
  ///MODAL
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //* MODAL
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setTimeout(() => {
      setModalIsOpen(false);
    }, 250);
  };

  ///ACTIONS
  const removeIngredient = (ingredientId) => {
    const ingredientData = {
      'sectionId': props.section._id,
      'groupId': props.group._id,
      'ingredientId': ingredientId,
    }
    dispatch(deleteIngredient(ingredientData))
  }


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
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
      console.log([...ingredientData.entries()])
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
            {ingredient.name}
          </button>
        </div>
        <div className="ingredientHeaderRight">
          <button
            // onClick={() => { removeIngredient(ingredient._id) }}
            onClick={openModal}
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
        overlayClassName="userOverlay"
      >
        <ModalCloseContext.Provider value={closeModal}>
          <ConfirmModal />
        </ModalCloseContext.Provider>
      </ReactModal>
    </div>
  )
}

export default IngredientItem