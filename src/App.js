import './App.css';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario'
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Footer';

function App() {

  const [mostrarFormulario, actuzalizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://avatars.githubusercontent.com/u/66399233?v=4",
      nombre: "Edgar Osorio",
      puesto: "Dev",
      fav: true
    },
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://avatars.githubusercontent.com/u/66399233?v=4",
      nombre: "Edgar Osorio",
      puesto: "Dev",
      fav: false
    }
  ])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: 'Programación',
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9'
    },
    {
      id: uuidv4(),
      titulo: 'Front End',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF'
    },
    {
      id: uuidv4(),
      titulo: 'Data Science',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2'
    },
    {
      id: uuidv4(),
      titulo: 'Devops',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8'
    },
    {
      id: uuidv4(),
      titulo: 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5'
    },
    {
      id: uuidv4(),
      titulo: 'Móvil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9'
    },
    {
      id: uuidv4(),
      titulo: 'Innovación y Gestión',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF'
    }
  ])

  const cambiarMostrar = () => {
    actuzalizarMostrar(!mostrarFormulario)
  }

  // Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log('Nuevo colaborador', colaborador);
    // Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log('Eliminar colaborador', id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  // Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log('Actualizar:', color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  // Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])
  }

  // Like
  const like = (id) => {
    console.log(id);
    const colaboradoresActualizados = colaboradores.map(colaborador => {
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/* { mostrarFormulario ? <Formulario /> : <></> } */}
      { mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo )} 
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        /> 
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />)
      }
      <Footer />
    </div>
  );
}

export default App;
