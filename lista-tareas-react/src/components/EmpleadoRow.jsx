import React from 'react'
import EmpleadoAvatar from './EmpleadoAvatar'

const EmpleadoRow = ({empleado}) => {
  return (
    <div className="row">
        <div className="row empleado-row border p-3 my-2">
            <div className="col-md-2">
                <EmpleadoAvatar pic={empleado.pic} fullName={empleado.fullName} />
            </div>
            <div className="col-md-8">
                <h5>{empleado.fullName}</h5>
                <p><strong>{empleado.title}</strong></p>
                <span className="badge bg-secondary">{empleado.department}</span>
            </div>
        </div>
    </div>
  )
}

export default EmpleadoRow