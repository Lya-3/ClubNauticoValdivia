import Text from '../atoms/Text';

function ArriendoServicio({ img, title, cost_text, tiempo_id, costo_id}) {
    return (
			<div className="arriendos">
				<h3>{title}</h3>
				<img className="servicio_imagen" src={img}/>
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