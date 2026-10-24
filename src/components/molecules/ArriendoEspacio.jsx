import Text from '../atoms/Text';

function ArriendoEspacio({ img, title, tamanos = [], tiempos = [] }) {
    return (
        <div className="arriendos">
            <Text variant="h3">{title}</Text>
            <img className="servicio_imagen" src={img} alt={title} />

            <div className="datos_arriendo">
                <Text>Tamaño: </Text>
                <select id="tamano_muelle">
					{tamanos.map((item, index) => {
						return (
							<option key={index} value={item.id}>{item.text}</option>
						)
					})}
                </select>
            </div>
            
            <Text>Introduzca el rango de tiempo: </Text>
            
            <div className="datos_arriendo">
                <select id="muelle_tipo_tiempo">
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
                <p id="costo_muelle">$0</p>
            </div>

            <button className="agregar_arriendo">Agregar</button>
        </div>
    );
}

export default ArriendoEspacio;