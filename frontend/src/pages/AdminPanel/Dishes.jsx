import { useState } from "react"
//-Components
import CreateDish from './Dish/CreateDish'
import DishList from './Dish/DishList'

function Dishes() {
  const [pickedLink, setPickedLink] = useState('CreateDish')

  const dishesPages = {
    CreateDish: <CreateDish />,
    DishList: <DishList />,
  };
  return (
    <div className='dishesContainer'>
      <div className="dishesHeader">
        <div
          onClick={() => setPickedLink('CreateDish')}
          className={pickedLink === 'CreateDish' ? ('dishesLink pickedLink') : ('dishesLink')}
          title='Dishes'>
          <h3><i>Create Dish</i></h3>
        </div>
        <div
          onClick={() => setPickedLink('DishList')}
          className={pickedLink === 'DishList' ? ('dishesLink pickedLink') : ('dishesLink')}
          title='Sections'>
          <h3><i>Dish List</i></h3>
        </div>
      </div>
      {dishesPages[pickedLink]}
    </div>
  )
}

export default Dishes