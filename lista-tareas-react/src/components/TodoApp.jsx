import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    return tareasGuardadas;
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (e) => {
    e.preventDefault();
    if (inputValue.length > 3) {
      //agregar la tarea al array
      setTareas([...tareas, inputValue]);
      setInputValue("");
    }
  };
  const eliminarTarea = (index) => {
    const confirmacionEliminacion = confirm("¿Finalizaste esta tarea?")
    if (confirmacionEliminacion) {
        const nuevasTareas = tareas.filter((_,i) => i !== index);
        setTareas(nuevasTareas);
    }
  };
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col text-center">
          <h1>Lista de tareas</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 d-flex justify-content-center ">
          <form onSubmit={agregarTarea}>
            <input
              type="text"
              className="form-control"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <ul>
            {tareas.map((item, index) => (
              <li key={index} className="text-center my-2">
                {item}
                <button
                  onClick={() => eliminarTarea(index)}
                  className="btn btn-danger btn-sm mx-2"
                >
                  x
                </button>
              </li>
              
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;