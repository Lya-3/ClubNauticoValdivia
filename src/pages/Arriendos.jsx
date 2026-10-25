import ArriendosContainer from "../components/organisms/ArriendosContainer";
import "../styles/organisms/Arriendos.css";

function Arriendos() {
    const arriendos_espacios_valdivia = [
        {
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
            tamano_id: 'tamano_muelle',
            tiempo_id: 'muelle_tipo_tiempo',
            costo_id: 'costo_muelle',
        },
        {
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
            tamano_id: 'tamano_almacen',
            tiempo_id: 'almacen_tiempo',
            costo_id: 'costo_almacen',
        }
    ];

    const arriendos_servicios_valdivia = [
        {
            tipo: 'servicio',
            img: '/imagenes/estacionamientos.jpg',
            title: 'Pistola de Agua',
            cost_text: "Introduzca el numero de dias: ",
            tiempo_id: 'estacionamiento_tiempo',
            costo_id: 'costo_estacionamiento'
        },
        {
            tipo: 'servicio',
            img: '/imagenes/pistola_de_agua.webp',
            title: 'Pistola de Agua',
            cost_text: "Introduzca el numero de horas: ",
            tiempo_id: 'pistola_de_agua_tiempo',
            costo_id: 'costo_pistola_de_agua'
        },
    ];

    return (
        <>
            <div className="arriendo_body">            
                <ArriendosContainer
                    title="Espacios"
                    lista_arriendos={arriendos_espacios_valdivia}
                />
                <ArriendosContainer
                    title="Servicios"
                    lista_arriendos={arriendos_servicios_valdivia}
                />
            </div>
        </>
    );
}

export default Arriendos;