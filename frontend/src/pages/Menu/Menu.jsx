import { useState } from 'react';


//-Menu Pages
import NavbarMenu from "./NavbarMenu"
import Desserts from './MenuPages/Desserts'
import Dips from './MenuPages/Dips'
import Drinks from './MenuPages/Drinks'
import Pasta from './MenuPages/Pasta'
import Pizza from './MenuPages/Pizza'
import Sides from './MenuPages/Sides'

function Menu() {
  const [menuPage, setMenuPage] = useState('Pizza')

  const menuPages = {
    Desserts: <Desserts />,
    Dips: <Dips />,
    Drinks: <Drinks />,
    Pasta: <Pasta />,
    Pizza: <Pizza />,
    Sides: <Sides />,
  };

  return (
    <>
      <NavbarMenu setMenuPage={setMenuPage} />
      {menuPages[menuPage]}
    </>
  )
}

export default Menu