import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Login from './Login'
import Register from './Register'
import Profile from './Profile'

function ModalRight(props) {
  const closeModal = props.closeModal
  const [bodyComponent, setBodyComponents] = useState('Login')

  const changeModalBody = (bodyComponent) => {
    setBodyComponents(bodyComponent)
  }


  return (
    <div className="userModalContainer">

      <div className="userModalHeader">
        <div className="modalTitles">
          <h2
            className="userModalTitle"
            onClick={() => changeModalBody('Login')}>
            Login
          </h2>
          <h3 className='userModalTitle'>/</h3>
          <h2
            className="userModalTitle"
            onClick={() => changeModalBody('Register')}>
            Register
          </h2>
        </div>
        <div className='userModalClose'>
          <h4
            className="userModalTitle"
            title="Close"
            onClick={closeModal}>
            <CloseIcon />
          </h4>
        </div>
      </div>

      <div className="userModalBody">
        {bodyComponent === 'Login' && <Login />}
        {bodyComponent === 'Register' && <Register />}
        {bodyComponent === 'Profile' && <Profile />}
      </div>

    </div>
  )
}

export default ModalRight