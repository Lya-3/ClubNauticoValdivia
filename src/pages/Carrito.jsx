import ListaCompras from "../components/organisms/ListaCompras";

function Carrito() {
    const lista_compras = [
        {
            title: "Pistola de Agua a Presion",
            details: "N/A",
            amount: "Por hora",
            quantity: "3",
            total: "$1.500"
        }
    ]

    return (
        <>
        <div className="compras">
            <ListaCompras lista_compras = {lista_compras}/>
        </div>
        </>
    )
}

export default Carrito;