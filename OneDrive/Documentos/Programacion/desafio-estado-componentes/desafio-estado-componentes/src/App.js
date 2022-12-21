import React from 'react';
import { useState } from 'react';
import Datos from './Componentes/Datos.jsx';
import Boton from './Componentes/Boton.jsx';


function App() {
 
    const [nombre, setNombre] = useState('')
    const [clave, setClave] = useState('')

    const BotonFormulario = () => {
      if (clave === '252525') {
        return (<Boton></Boton>)
      } else {
        return (<></>)
      }

    };
  
    return (
      <div className="App">
        <h1>Desafio de estados y componentes</h1>
        <Datos
          nombre={nombre}
          setNombre={setNombre}
          clave={clave}
          setClave={setClave}
        >
        </Datos>
        
        <br></br>
        <BotonFormulario></BotonFormulario>
        
      </div>
    );
  }
  export default App;