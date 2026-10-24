import ServiciosContainer from "../components/organisms/ServiciosContainer"

function Servicios() {
    const servicios_valdivia = [
        { img: 'Holanda', title: 'https://via.placeholder.com/150', description: 'titulo-grande', cost_text: "a", cost: "1"},
        { img: 'Holanda', title: 'https://via.placeholder.com/150', description: 'titulo-grande', cost_text: "a", cost: "1"}
    ];


    return (
        <ServiciosContainer
            lista_servicios = {servicios_valdivia}
        />
    )
}

export default Servicios;