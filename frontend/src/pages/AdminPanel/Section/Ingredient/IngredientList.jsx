
//-Components
import IngredientItem from './IngredientItem'
// import AddIngredient from '../ModalComponents/AddIngredient'

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