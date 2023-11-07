function IngredientItem(props) {
  // const section = props.section
  // const group = props.group
  const ingredient = props.ingredient
  // console.log(group)
  // const ingredients = group.ingredients

  return (
    <div className='ingredientItem'>
      {ingredient.name}
    </div>
  )
}

export default IngredientItem