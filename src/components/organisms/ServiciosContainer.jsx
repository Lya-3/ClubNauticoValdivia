import Servicio from "../molecules/Servicio"

import "/src/styles/organisms/Servicios.css"

function ServiciosContainer({lista_servicios = []}) {
    return (
        <>
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
        </>
    )
}

export default ServiciosContainer;