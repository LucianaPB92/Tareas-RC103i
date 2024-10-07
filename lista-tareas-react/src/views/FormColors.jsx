import React, {useState, useEffect} from 'react'
import ColorCardApp from '../components/ColorCardApp'
import "../css/FormColors.css"
const FormColors = () => {

  const [inputColorValue,setInputColorValue] = useState("")
  const [colors, setColors] =useState(()=>{
    const colorLocalStorage =JSON.parse(localStorage.getItem("favoriteColour")) || []
    return colorLocalStorage})

  useEffect(() => {
    localStorage.setItem("favoriteColour",JSON.stringify(colors))
  }, [colors])
  
  const handleInputChange = (e)=>{
    setInputColorValue(e.target.value)
  }
  const handleSaveColor = (e)=>{
    e.preventDefault()
    if (inputColorValue.length >=3) {
        setColors([...colors, inputColorValue])
        setInputColorValue("");
    }
  }
  const handleDeleteColor = (colorToDelete)=>{
    const confirmDelete = confirm(`¿Está seguro de querer eliminar el color ${colorToDelete} ?`)
    if (confirmDelete) {
        setColors(colors.filter(color => color !== colorToDelete));  
    }
  }
  return (
    <div className='container mt-5'>
        <div className="row border border-2 rounded-3">
            <h6 className='mt-1'>Administrar colores</h6>
            <form className="mt-4" onSubmit={handleSaveColor}>
            <div className="form d-flex justify-content-between align-items-center ">
            <div 
                className="color-box w-25 rounded-3"
                style={{ backgroundColor: inputColorValue || '#fff' }} 
            ></div>
            <div className="form-group mr-2 w-75">
                <input 
                type="text" 
                className="form-control focus-ring" 
                placeholder="Ingrese un color ej Blue" 
                value={inputColorValue} 
                onChange={handleInputChange}
                />
            </div>
            </div>
            <div className='my-2 d-flex justify-content-end'>
            <button className="btn btn-primary">
                Guardar Color
            </button>
            </div>
            </form>
        </div>
        <div className="row mt-3">
            {colors.length > 0 ? (
                colors.map((color,index)=>(
                    <ColorCardApp key={index} color={color} onDelete={handleDeleteColor} />
                ))
            ) : (
                <p className='text-center fs-3'>No hay colores guardados.</p>
            )
            }
        </div>
    </div>
  )
}

export default FormColors