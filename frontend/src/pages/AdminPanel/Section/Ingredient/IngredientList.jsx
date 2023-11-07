import IngredientItem from './IngredientItem'

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
              <h4>Additional ingredients for "{group.name}":</h4>
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