import { Container } from "react-bootstrap";
import Servicio from "../molecules/Servicio";
import "../../styles/organisms/Servicios.css";

function ServiciosContainer({ lista_servicios = [] }) {
    return (
        <Container className="my-5 servicios-page-container">
            <div className="text-center mb-5">
                <h1 className="servicios-header-title display-5">Nuestros Servicios</h1>
                <p className="servicios-header-subtitle">
                    Comodidades y equipamiento adicional pensado para el cuidado de tu embarcación.
                </p>
            </div>

            <div className="servicios_container">
                {lista_servicios.map((item, index) => (
                    <Servicio
                        key={index}
                        img={item.img}
                        title={item.title}
                        description={item.description}
                        cost_text={item.cost_text}
                        cost={item.cost}
                    />
                ))}
            </div>
        </Container>
    );
}

export default ServiciosContainer;