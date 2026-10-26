import ServiciosContainer from "../components/organisms/ServiciosContainer"

function Servicios() {
    const servicios_valdivia = [
        { img: '/imagenes/pistola_de_agua_a_presion.webp', title: 'Estacionamiento', description: 'Estacionamiento privado dentro del recinto', cost_text: "Costo por dia:", cost: "$5.500"},
        { img: '/imagenes/estacionamiento.jpg', title: 'Pistola de Agua a Presion', description: 'Herramienta versatil para la limpieza de la embarcacion', cost_text: "Costo por hora:", cost: "$2.500"},
    ];


    return (
        <ServiciosContainer
            lista_servicios = {servicios_valdivia}
        />
    )
}

export default Servicios;