import React from 'react'

const Datos = ({ nombre, setNombre, clave, setClave }) => {
    return (
        <div>
            <i class="fa-solid fa-user"></i>
            <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Ingresa tu usuario"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)} >
                </input>
                
        
                <i class="fa-solid fa-lock"></i>
            <label>Clave</label>
            <input
                type="text"
                name="clave"
                className="form-control"
                placeholder="********"
                value={clave}
                onChange={(e) => setClave(e.target.value)} >
            </input>
        </div>
    )
}

export default Datos

