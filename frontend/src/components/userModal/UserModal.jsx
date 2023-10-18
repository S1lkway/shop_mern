import { useState } from 'react';
import { useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close';
import Login from './Login'
import Register from './Register'
import Profile from './Profile'

function ModalRight(props) {
  const closeModal = props.closeModal
  const [bodyComponent, setBodyComponents] = useState('Login')
  const { user } = useSelector((state) => state.auth)

  const changeModalBody = (bodyComponent) => {
    setBodyComponents(bodyComponent)
  }


  return (
    <div className="userModalContainer">

      <div className="userModalHeader">
        {user ? (
          <div className="modalTitles">
            <h2
              className='userModalTitle'
            >
              {user.name}
            </h2>
          </div>
        ) : (
          <div className="modalTitles">
            <h2
              className={bodyComponent === 'Login' ? 'userModalTitle userModalTitleButton pickedBody' : 'userModalTitle userModalTitleButton'}
              onClick={() => changeModalBody('Login')}>
              Login
            </h2>
            <h3 className='userModalTitle'>/</h3>
            <h2
              className={bodyComponent === 'Register' ? 'userModalTitle userModalTitleButton pickedBody' : 'userModalTitle userModalTitleButton'}
              onClick={() => changeModalBody('Register')}>
              Register
            </h2>
          </div>
        )}

        <div className='userModalClose'>
          <h4
            className="userModalTitle userModalTitleButton"
            title="Close"
            onClick={closeModal}>
            <CloseIcon />
          </h4>
        </div>
      </div>

      <div className="userModalBody">
        {bodyComponent === 'Login' && <Login setBodyComponents={setBodyComponents} />}
        {bodyComponent === 'Register' && <Register setBodyComponents={setBodyComponents} />}
        {bodyComponent === 'Profile' && <Profile />}
      </div>

    </div>
  )
}

export default ModalRight