
function ModalRight(props) {
  const closeModal = props.closeModal

  return (
    <>
      <h3>Are you sure?</h3>
      <div className='modalButtons'>
        <button className='btn'>Yes</button>
        <button onClick={closeModal}>No</button>
      </div>
    </>
  )
}

export default ModalRight