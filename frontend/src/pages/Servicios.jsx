import ServiciosContainer from "../components/organisms/ServiciosContainer";

function Servicios() {
    const servicios_valdivia = [
        { 
            img: '/imagenes/estacionamiento.jpg', 
            title: 'Estacionamiento', 
            description: 'Estacionamiento privado dentro del recinto', 
            cost_text: "Costo por día:", 
            cost: "$5.500"
        },
        { 
            img: '/imagenes/pistola_de_agua_a_presion.webp', 
            title: 'Pistola de Agua a Presión', 
            description: 'Herramienta versátil para la limpieza de la embarcación', 
            cost_text: "Costo por hora:", 
            cost: "$2.500"
        },
    ];

    return (
        <ServiciosContainer
            lista_servicios={servicios_valdivia}
        />
    );
}

export default Servicios;