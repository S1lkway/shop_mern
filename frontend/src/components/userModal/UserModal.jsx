import CloseIcon from '@mui/icons-material/Close';

function ModalRight(props) {
  const closeModal = props.closeModal

  return (
    <div className="userModalBody">
      <div className="userModalHeader">
        <h4 className="userModalTitle">Login</h4>
        <span>/</span>
        <h4 className="userModalTitle">Register</h4>
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