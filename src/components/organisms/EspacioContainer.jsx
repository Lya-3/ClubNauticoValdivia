import Espacio from "../molecules/Espacio"
import '/src/styles/organisms/Espacios.css'; 

function EspacioContainer({ espacios }) {
    return (
        <div className="espacio-container">
            {espacios.map((item, index) => (
                <Espacio 
                    key={index}
                    espacio_id={item.espacio_id}
                    cliente={item.cliente}
                    embarcacion={item.embarcacion}
                />
            ))}
        </div>
    )
}

export default EspacioContainer;