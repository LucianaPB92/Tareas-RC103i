import React from 'react'
import EmpleadoRow from '../components/EmpleadoRow';
import { empleados } from '../data/empleados';
const EmpleadoList = () => { 
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-md-6">
                {empleados.map(empleado=>(
                <EmpleadoRow key={empleado.id} empleado={empleado}/> 
                ))}

            </div>
        </div>
    </div>
  )
}

export default EmpleadoList