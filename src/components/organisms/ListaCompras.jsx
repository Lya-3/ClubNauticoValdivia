import ElementoCarrito from "../molecules/ElementoCarrito";
import "/src/styles/organisms/ListaCompras.css";

function ListaCompras({ lista_compras }) {
    return (
        <table id="lista_compras">
            <th colSpan={5}>
                Lista de Arriendos
            </th>
            {lista_compras.map((item, index) => (
                <ElementoCarrito
                    key={index}
                    title={item.title}
                    details={item.details}
                    amount={item.amount}
                    quantity={item.quantity}
                    total={item.total}
                />
            ))}
        </table>
    );
}

export default ListaCompras;