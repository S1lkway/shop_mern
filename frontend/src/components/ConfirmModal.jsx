import React from 'react'

function ConfirmModal() {
  return (
    <div className='confirmDiv'>
      <h3>Are you sure?</h3>
      <div></div>
      <div className="defaultFormGroup">
        <button
          className='defaultFormButton'
          type='submit' >
          Yes
        </button>
      </div>
      <div className="defaultFormGroup">
        <button
          className='defaultFormButton'
          type='submit' >
          No
        </button>
      </div>
    </div>
  )
}

export default ConfirmModal