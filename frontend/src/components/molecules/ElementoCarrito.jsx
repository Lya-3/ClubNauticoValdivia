import Text from "../atoms/Text";

function ElementoCarrito({ title, details, amount, quantity, total}) {
    return (
        <tr > 
            <td>{title}</td>
            <td>{details}</td>
            <td>{amount}</td>
            <td>{quantity}</td>
            <td>{total}</td>
        </tr>
    )
}

export default ElementoCarrito;