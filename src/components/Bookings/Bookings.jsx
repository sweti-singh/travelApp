import React from 'react'
import './bookings.css'

const Bookings = ({onClose}) => {

    const handleOverlayClick=(e)=>{
        onClose(false)
    }
  return (
    <div className='parent-container' onClick={handleOverlayClick}>
      <div className='modal-container' onClick={(e)=> e.stopPropagation()}>
        <div className="input-container">
         <input placeholder='Where to ?'></input>
         <input placeholder='Dates'></input>
         <input type='number' placeholder='Number of travellers'></input>
        </div>
        <div className="button">
        <button>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Bookings
