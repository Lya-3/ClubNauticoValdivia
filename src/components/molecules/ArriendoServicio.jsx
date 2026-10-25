import Text from '../atoms/Text';
import Tarjeta from '../atoms/Tarjeta';
function ArriendoServicio({ img, title, cost_text, tiempo_id, costo_id, children}) {
    return (
			<div className="arriendos">
				<h3>{title}</h3>
				<Tarjeta img={img} alt={title} classImg='servicio_imagen'>{children}</Tarjeta>
				<p>{cost_text}</p>
				<input id={tiempo_id}></input>

				<div class="datos_arriendo">
					<p>Costo: </p>
					<p id={costo_id}>$0</p>
				</div>

				<button className="agregar_arriendo" onclick="anadirArriendo('pistola_de_agua')">Agregar</button>
			</div>
    );
}

export default ArriendoServicio;