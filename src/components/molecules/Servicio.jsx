import Text from '../atoms/Text';

function Servicio({ img, title, description, cost_text, cost}) {
    return (
        <div className="servicio">
            <h2>{title}</h2>
            <img className="servicio_img" src={img}/>
            <Text>{description}</Text>
            <div className="servicio_costo">
                <Text>{cost_text}</Text>
                <Text>{cost}</Text>
            </div>
        </div>
    )
}

export default Servicio;