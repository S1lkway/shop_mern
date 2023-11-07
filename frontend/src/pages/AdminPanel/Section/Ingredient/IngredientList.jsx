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
          <IngredientItem section={section} group={group} />
        ) :
        (
          <h3>Group "{group.name}" doesn't have additional ingredients</h3>
        )}

    </div>
  )
}

export default IngredientList