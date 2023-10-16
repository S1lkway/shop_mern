import { useState } from 'react';
import { Link } from 'react-router-dom'
import ReactModal from 'react-modal';
//-Components
import UserModal from './UserModal'
//-MUI icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

function Header() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  //* MODAL
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };


  return (
    <header className='header'>
      <div className='left_part between'>
        <div className="logo">
          <Link to='/' title='Shop MERN'>
            <img className="header_logo" src="\images\furniture_logo.jpg" alt="Logo"></img>
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
            // onChange={onChange}
            />
          </form>
        </div>
      </div>

      <div className="header_links between">
        <div>
          <Link onClick={openModal}>
            <AccountCircleOutlinedIcon />
          </Link>
        </div>
        <div>
          <Link to='/tracking'>
            <LocalShippingOutlinedIcon />
          </Link>
        </div>
        <div>
          <Link to='/favorites'>
            <FavoriteBorderIcon />
          </Link>
        </div>
        <div>
          <Link to='/basket'>
            <ShoppingBasketOutlinedIcon />
          </Link>
        </div>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="userModal"
        overlayClassName="userOverlay"
      >
        <UserModal />
      </ReactModal>

    </header >
  )
}

export default Header