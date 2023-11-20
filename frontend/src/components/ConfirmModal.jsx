

function ConfirmModal(props) {
  const handleFunction = props.handleFunction
  const closeModal = props.closeModal

  return (
    <div className='confirmDiv'>
      <div className='confirmModalHeader'>
        <h1>Are you sure?</h1>
      </div>
      <div className='confirmModalButtons'>
        <div className="defaultFormGroup">
          <button
            onClick={handleFunction}
            className='defaultFormButton'
            type='submit' >
            Yes
          </button>
        </div>
        <div className="defaultFormGroup">
          <button
            onClick={closeModal}
            className='defaultFormButton'
            type='submit' >
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal