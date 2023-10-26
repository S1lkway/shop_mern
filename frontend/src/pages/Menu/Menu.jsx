import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//-Menu Pages
import NavbarMenu from "./NavbarMenu"
import Desserts from './MenuPages/Desserts'
import Dips from './MenuPages/Dips'
import Drinks from './MenuPages/Drinks'
import Pasta from './MenuPages/Pasta'
import Pizza from './MenuPages/Pizza'
import Sides from './MenuPages/Sides'
//-Redux
import { getMenuSections, resetMenuSections } from '../../features/sections/sectionSlice'


function Menu() {
  const dispatch = useDispatch()
  const { isSuccess } = useSelector(
    (state) => state.menuSections
  )
  const [menuPage, setMenuPage] = useState('Pizza')


  useEffect(() => {
    dispatch(getMenuSections())
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    if (isSuccess) {
      dispatch(resetMenuSections())
    }
    // eslint-disable-next-line
  }, [isSuccess])

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