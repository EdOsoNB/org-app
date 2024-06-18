import './Colaborador.css'
import { IoIosCloseCircle, IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const Colaborador = (props) => {

    const { nombre, puesto, foto, id, fav} = props.datos
    const { colorPrimario, eliminarColaborador, like} = props

    return <div className='colaborador'>
        <IoIosCloseCircle onClick={() => eliminarColaborador(id) } className='eliminar'/>
        <div className='encabezado' style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <IoIosHeart color="red" onClick={() => like(id)}/> : <IoIosHeartEmpty onClick={() => like(id)} />}
        </div>
    </div>;
}

export default Colaborador