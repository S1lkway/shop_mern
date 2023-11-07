import React from 'react'

function IngredientItem(props) {
  // const section = props.section
  const group = props.group
  // console.log(group)
  // const ingredients = group.ingredients

  return (
    <div className='IngredientItem'>
      <div className='ingredientsListHeader'>
        <h4>Additional ingredients for "{group.name}"</h4>
      </div>
      <div className="listOfIngredients">listOfIngredients</div>
    </div>
  )
}

export default IngredientItem