import Tarjeta from '../atoms/Tarjeta';
import Text from '../atoms/Text';

function ArriendoEspacio({ img, title, tamanos = [], tiempos = [], tamano_id, tiempo_id, costo_id, children}) {
    return (
        <div className="arriendos">
            <Text variant="h3">{title}</Text>
            <Tarjeta img={img} alt={title} classImg='servicio_imagen'>{children}</Tarjeta>
            <div className="datos_arriendo">
                <Text>Tamaño: </Text>
                <select id={tamano_id}>
					{tamanos.map((item, index) => {
						return (
							<option key={index} value={item.id}>{item.text}</option>
						)
					})}
                </select>
            </div>
            
            <Text>Introduzca el rango de tiempo: </Text>
            
            <div className="datos_arriendo">
                <select id={tiempo_id}>
					{tiempos.map((item, index) => {
						return (
							<option key={index} value={item.id}>{item.text}</option>
						)
					})}
                </select>
                <input id="muelle_tiempo" />
            </div>

            <div className="datos_arriendo">
                <p>Costo: </p>
                <p id={costo_id}>$0</p>
            </div>

            <button className="agregar_arriendo">Agregar</button>
        </div>
    );
}

export default ArriendoEspacio;