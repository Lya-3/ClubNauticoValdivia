import ArriendosContainer from "../components/organisms/ArriendosContainer";
import "../styles/organisms/Arriendos.css";

function Arriendos() {
    const arriendos_espacios_valdivia = [
        {
            id: 'muelle',
            tipo: 'espacio',
            img: '/imagenes/marina.webp',
            title: 'Muelles',
            tamanos: [
                {id: 'muelle_8', text: "8 M | 26 FT"},
                {id: 'muelle_10_5', text: "10.5 M | 34.5 FT"},
                {id: 'muelle_15_5', text: "15.5 M | 49 FT"},
                {id: 'muelle_18', text: "18 M | 59 FT"},
                {id: 'muelle_23', text: "23 M | 75 FT"},
            ],
            tiempos: [
                {id: 'm_dias', text: 'Dias'},
                {id: 'm_semanas', text: 'Semanas'},
                {id: 'm_meses', text: 'Meses'},
            ],
            description: 'Estaciona tu embarcacion y accede a las maravillas que ofrece Valdivia'
        },
        {
            id: 'almacen',
            tipo: 'espacio',
            img: '/imagenes/houl.webp',
            title: 'Almacenes',
            tamanos: [
                {id: 'almacen_8', text: "8 M | 26 FT"},
                {id: 'almacen_12', text: "12 M | 39 FT"},
                {id: 'almacen_16', text: "16 M | 52 FT"},
                {id: 'almacen_20', text: "20 M | 65 FT"},
                {id: 'almacen_25', text: "25 M | 82 FT"},
            ],
            tiempos: [
                {id: 'm_meses', text: 'Meses'},
            ],
            description: "Repara tu embarcacion con tranquilidad en nuestro deposito de embarcaciones."
        }
    ];

    const arriendos_servicios_valdivia = [
        {
            id: 'estacionamiento',
            tipo: 'servicio',
            img: '/imagenes/estacionamientos.jpg',
            title: 'Estacionamiento',
            cost_text: "Introduzca el numero de dias: ",
            amount_type: "Por dia",
            description: "Estaciona de manera segura tu vehiculo mientras exploras los mares"
        },
        {
            id: 'pistola_agua',
            tipo: 'servicio',
            img: '/imagenes/pistola_de_agua.webp',
            title: 'Pistola de Agua',
            cost_text: "Introduzca el numero de horas: ",
            amount_type: "Por hora",
            description: "Herramienta versatil para limpiar la cubierta o la quilla de tu embarcacion"
        },
    ];

    return (
        <div className="arriendo_body">            
            <button 
                className="boton_carrito"
                onClick={() => window.location.href = '/carrito'}>
                Ir al Carrito
            </button>

            <ArriendosContainer
                title="Espacios"
                lista_arriendos={arriendos_espacios_valdivia}
            />
            <ArriendosContainer
                title="Servicios"
                lista_arriendos={arriendos_servicios_valdivia}
            />
        </div>
    );
}

export default Arriendos;