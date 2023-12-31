import { useState } from 'react';
import { Link } from 'react-router-dom'
import ReactModal from 'react-modal';
import ModalCloseContext from '../utils/ModalCloseContext';
//-Components
import UserModal from './userModal/UserModal'
//-MUI icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

function Header() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modelClass, setModelClass] = useState('modalOpened')

  //* MODAL
  const openModal = () => {
    setModelClass('modalOpened')
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModelClass('modalClosed')
    setTimeout(() => {
      setModalIsOpen(false);
    }, 250);
  };


  return (
    <header className='header'>
      <div className='left_part between'>
        <div className="logo">
          <Link to='/' title='Shop MERN'>
            <img
              className="header_logo"
              src="/images/pizza_logo3.jpg"
              alt="Logo"></img>
          </Link>
        </div>
        <div className='search_bar'>
          <form>
            <input
              type="text"
              id="search"
              name='search'
              // value={email}
              placeholder='What are you looking for?'
              title='What are you looking for?'
            // onChange={onChange}
            />
          </form>
        </div>
      </div>

      <div className="headerLinks between">
        <div>
          <Link
            onClick={openModal}
            title='Account'>
            <AccountCircleOutlinedIcon />
          </Link>
        </div>
        <div>
          <Link
            to='/tracking'
            title='Track orders'>
            <LocalShippingOutlinedIcon />
          </Link>
        </div>
        <div>
          <Link
            to='/favorites'
            title='Favorites'>
            <FavoriteBorderIcon />
          </Link>
        </div>
        <div>
          <Link
            to='/basket'
            title='Basket'>
            <ShoppingBasketOutlinedIcon />
          </Link>
        </div>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={"userModal " + modelClass}
        overlayClassName="userOverlay"
      >
        <ModalCloseContext.Provider value={closeModal}>
          <UserModal closeModal={closeModal} />
        </ModalCloseContext.Provider>
      </ReactModal>

    </header >
  )
}

export default Header