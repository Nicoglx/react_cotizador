import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Form';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Loading from './components/Loading';


const Contenedor = styled.div`
  max-width: 600px;
  margin: 1rem auto;
`
const ContenedorFormulario = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`



function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [cargando, MostrarCargando] = useState(false)

  const { cotizacion, datos } = resumen

  return (
    <Contenedor>
      <Header
        titulo='Cotizador de seguros'
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          MostrarCargando={MostrarCargando}
        />
        {cargando ? <Loading /> : null
        }
        <Resumen
          datos={datos}
        />
        { !cargando ?
          <Resultado
            cotizacion={cotizacion}
          /> :
          null 
        }


      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
