
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
            <div className='ingredientsListHeader'>{group.name}</div>
            <div className="listOfIngredients">listOfIngredients</div>
          </>
        ) :
        (
          <>
            <div>
              <h3>Group doesn't have ingredients</h3>
            </div>
          </>
        )}

    </div>
  )
}

export default IngredientList