import React, {useState} from 'react'


const MensajeApp = ({mensaje}) => {
  const [msj, setMsj] = useState("")
  const handleClick = ()=>{
    setMsj('(from changed state)');
  }
  return (
    <div>
        <h1>Hello {mensaje} {msj}!</h1>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default MensajeApp