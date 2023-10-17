import CloseIcon from '@mui/icons-material/Close';

function ModalRight(props) {
  const closeModal = props.closeModal

  return (
    <div className="userModalBody">
      <div className="userModalHeader">
        <h3 className="userModalTitle">Login</h3>
        <span>/</span>
        <h3 className="userModalTitle">Register</h3>
      </div>

      <div className='userModalClose'>
        <h4 className="userModalTitle" onClick={closeModal}>
          <CloseIcon />
        </h4>
      </div>
    </div>
  )
}

export default ModalRight