import Text from "../atoms/Text";

function TarjetaMenu({img, title, description}) {
    return (
        <>
        <Text variant="h4">{title}</Text>
        <img src={img}/>
        <Text variant="p">{description}</Text>
        </>
    )
}

export default TarjetaMenu;