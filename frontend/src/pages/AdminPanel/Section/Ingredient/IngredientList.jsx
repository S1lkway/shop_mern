import { useState } from 'react';
import ReactModal from 'react-modal';
import ModalCloseContext from '../../../../utils/ModalCloseContext';
//-Components
import IngredientItem from './IngredientItem'
import AddIngredient from '../ModalComponents/AddIngredient'
//-MUI icons
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';

function IngredientList(props) {
  const section = props.section
  const pickedGroup = props.pickedGroup
  const group = section.extraIngredientTypes[pickedGroup]

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modelClass, setModelClass] = useState('modalOpened')

  //* MODAL
  const openModal = () => {
    setModelClass('modalOpened')
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModelClass('modalClosed')
    setTimeout(() => {
      setModalIsOpen(false);
    }, 250);
  };


  return (
    <div className='groupIngridientsList'>
      {(group?.ingredients.length > 0) ?
        (
          <>
            <div className='ingredientsListHeader'>
              <h3>"{group.name}" additional ingredients:</h3>
            </div>
            <div className="newIngredient">
              <button
                onClick={openModal}
                title="Add new ingredient"
                className='defaultFormButton' >
                <PlaylistAddOutlinedIcon />
                <span>New ingredient</span>
              </button>
            </div>
            {group.ingredients.map((ingredient) => (
              <IngredientItem key={ingredient._id} section={section} group={group} ingredient={ingredient} />
            ))}
          </>
        ) :
        (
          <>
            {pickedGroup === false ? (
              <h3><i>Pick group to see additional ingredients</i></h3>
            ) : (
              <>
                <div className='noIngredientsGroup'>
                  <h3>Group "{group?.name}" doesn't have additional ingredients</h3>
                </div>
                <div className="newIngredient">
                  <button
                    onClick={openModal}
                    title="Add new ingredient"
                    className='defaultFormButton' >
                    <PlaylistAddOutlinedIcon />
                    <span>New ingredient</span>
                  </button>
                </div>
              </>
            )}
          </>
        )}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={"userModal " + modelClass}
        overlayClassName="userOverlay"
      >
        <ModalCloseContext.Provider value={closeModal}>
          <AddIngredient group={group} section={section} />
        </ModalCloseContext.Provider>
      </ReactModal>
    </div>
  )
}

export default IngredientList