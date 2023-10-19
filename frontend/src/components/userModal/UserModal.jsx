import { useState } from 'react';
import { useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close';
import Login from './Login'
import Register from './Register'
import Profile from './Profile/Profile'

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
            <h1
              className='userModalTitle'
            >
              {user.name}
            </h1>
          </div>
        ) : (
          <div className="modalTitles">
            <h1
              className={bodyComponent === 'Login' ? 'userModalTitle userModalTitleButton pickedBody' : 'userModalTitle userModalTitleButton'}
              onClick={() => changeModalBody('Login')}>
              Login
            </h1>
            <h3 className='userModalTitle'>/</h3>
            <h1
              className={bodyComponent === 'Register' ? 'userModalTitle userModalTitleButton pickedBody' : 'userModalTitle userModalTitleButton'}
              onClick={() => changeModalBody('Register')}>
              Register
            </h1>
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
        {user ? (
          <Profile setBodyComponents={setBodyComponents} />
        ) : (
          bodyComponent === 'Login' ? (<Login setBodyComponents={setBodyComponents} />) : (<Register setBodyComponents={setBodyComponents} />)
        )}
      </div>

    </div>
  )
}

export default ModalRight