import Text from "../atoms/Text";
import "/src/styles/organisms/Espacios.css"

function Espacio({ espacio_id, embarcacion, cliente }) {
    return (
        <div className="espacio">
            <Text variant='h4'>{espacio_id}</Text>
            <Text>{embarcacion}</Text>
            <Text>{cliente}</Text>
        </div>
    )
}

export default Espacio;