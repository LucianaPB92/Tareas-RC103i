import React from 'react'

const EmpleadoAvatar = ({pic, fullName}) => {
  return (
    <div>
        <img src={pic} alt={fullName} className='img-fluid img-thumbnail rounded-circle' />
    </div>
  )
}

export default EmpleadoAvatar