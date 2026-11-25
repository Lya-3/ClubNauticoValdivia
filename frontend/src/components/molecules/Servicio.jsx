import Text from '../atoms/Text';
import Image from '../atoms/Image';

function Servicio({ img, title, description, cost_text, cost }) {
    return (
        <div className="servicio">
            <div className="servicio_img_wrapper">
                <Image className="servicio_img" src={img} alt={title} />
            </div>
            <div className="servicio_body">
                <h3 className="servicio_titulo">{title}</h3>
                <Text className="servicio_descripcion">{description}</Text>
                <div className="servicio_costo">
                    <span className="servicio_costo_label">{cost_text}</span>
                    <span className="servicio_costo_valor">{cost}</span>
                </div>
            </div>
        </div>
    );
}


export default Servicio;