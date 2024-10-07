import React from 'react'
import "../css/formColors.css"
const ColorCardApp = ({color, onDelete}) => {
  return (
    <div className="col-md-3 col-sm-6 mb-3">
      <div className="card">
        <div className="card-header">
            <span className='fw-bold'>{color}</span>
        </div>
        <div className="card-body d-flex align-items-center flex-wrap">
          <div
            className="color-box w-75 mx-auto rounded-3"
            style={{ backgroundColor: color}}
          ></div>
          <div className="d-flex ms-auto">
            
            <button 
              className="btn btn-danger mt-2 "
              onClick={() => onDelete(color)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorCardApp