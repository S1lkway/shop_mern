
//-MUI icons
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function IngredientItem(props) {
  // const section = props.section
  // const group = props.group
  const ingredient = props.ingredient
  // console.log(ingredient)
  // const ingredients = group.ingredients

  return (
    <div className='ingredientItem'>
      <div className='ingredientHeader'>
        <div className="ingredientHeaderLeft">
          <button
            className='defaultFormButton ingredientButton'
            // onClick={() => setPickedGroup(groupIndex)}
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
      <div className='ingredientProperties'>

      </div>
    </div>
  )
}

export default IngredientItem