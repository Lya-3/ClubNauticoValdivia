import Text from '../atoms/Text';

function ArriendoServicio({ img, title, cost_text}) {
    return (
			<div className="arriendos">
				<h3>{title}</h3>
				<img className="servicio_imagen" src={img}/>
				<p>{cost_text}</p>
				<input id="pistola_de_agua_tiempo"></input>

				<div class="datos_arriendo">
					<p>Costo: </p>
					<p id="costo_pistola_de_agua">$0</p>
				</div>

				<button className="agregar_arriendo" onclick="anadirArriendo('pistola_de_agua')">Agregar</button>
			</div>
    );
}

export default ArriendoServicio;