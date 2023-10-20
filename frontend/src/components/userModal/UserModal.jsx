import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
//-MUI icons
import CloseIcon from '@mui/icons-material/Close';
//-Components
import Login from './Login'
import Register from './Register'
import Profile from './Profile/Profile'

function ModalRight(props) {
  const closeModal = props.closeModal
  const [bodyComponent, setBodyComponents] = useState('Login')
  const [userConnected, setUserConnected] = useState(false)
  const { user } = useSelector((state) => state.auth)

  const changeModalBody = (bodyComponent) => {
    setBodyComponents(bodyComponent)
  }

  //Message after user auth
  useEffect(() => {
    if (user && userConnected) {
      toast.success(`Welcome, ${user.name}`)
      setUserConnected(false)
    }
  }, [user, userConnected])


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
          <Profile />
        ) : (
          bodyComponent === 'Login' ? (<Login setUserConnected={setUserConnected} />) : (<Register setUserConnected={setUserConnected} />)
        )}
      </div>

    </div>
  )
}

export default ModalRight