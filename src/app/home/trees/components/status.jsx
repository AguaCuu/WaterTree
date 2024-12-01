import React from 'react'

const Status = ({ isActive }) => {
  return (
    <div>
      {isActive ? <img/> : <img/>}
    </div>
  )
}

export default Status
