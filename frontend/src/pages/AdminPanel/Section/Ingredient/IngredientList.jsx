
//-Components
import IngredientItem from './IngredientItem'
// import AddIngredient from '../ModalComponents/AddIngredient'
//-MUI icons
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';

function IngredientList(props) {
  const section = props.section
  const pickedGroup = props.pickedGroup
  const group = section.extraIngredientTypes[pickedGroup]

  // console.log(section)



  return (
    <div className='groupIngridientsList'>
      {(group?.ingredients.length > 0) ?
        (
          <>
            <div className='ingredientsListHeader'>
              <h3>Additional ingredients for "{group.name}":</h3>
            </div>
            {/* <AddIngredient section={section} group={group} /> */}
            <div className="newIngredient">
              <button
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
          <h3>Group "{group.name}" doesn't have additional ingredients</h3>
        )}

    </div>
  )
}

export default IngredientList