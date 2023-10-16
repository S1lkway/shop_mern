// import { useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { logout, reset } from '../features/auth/authSlice'

function ModalRight() {
  //* CONSTANTS FOR DATA
  // const navigate = useNavigate()
  // const dispatch = useDispatch()
  // const { user } = useSelector((state) => state.auth)

  //   const onLogout = () => {
  //   dispatch(logout())
  //   dispatch(reset())
  //   navigate('/')
  // }



  return (
    <>
      <h3>Are you sure?</h3>
      <div className='modalButtons'>
        <button className='btn'>Yes</button>
        <button className='btn'>No</button>
      </div></>
  )
}

export default ModalRight