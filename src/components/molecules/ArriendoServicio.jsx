import { useState, useEffect } from 'react';
import Text from '../atoms/Text';
import Tarjeta from '../atoms/Tarjeta';

const PRECIOS_SERVICIOS = {
    estacionamiento: 5000, 
    pistola_agua: 1500     
};

function ArriendoServicio({ itemId, img, title, cost_text, amount_type, children}) {
    const [cantidad, setCantidad] = useState("");
    const [costoTotal, setCostoTotal] = useState(0);

    useEffect(() => {
        const unitPrice = PRECIOS_SERVICIOS[itemId] || 0;
        const timeValue = Number(cantidad) || 0;
        setCostoTotal(unitPrice * timeValue);
    }, [cantidad, itemId]);

    const handleAddToCart = () => {
        if (cantidad === "" || Number(cantidad) <= 0) {
            alert("Por favor, introduzca una cantidad de tiempo válida mayor a 0.");
            return;
        }

        const currentCart = JSON.parse(localStorage.getItem('carrito')) || [];

        const alreadyExists = currentCart.some(item => item.title === title);
        if (alreadyExists) {
            alert(`Error: El arriendo "${title}" ya se encuentra en su carrito.`);
            return;
        }

        const newItem = {
            title: title,
            details: "N/A",
            amount: amount_type,
            quantity: cantidad.toString(),
            total: costoTotal
        };

        localStorage.setItem('carrito', JSON.stringify([...currentCart, newItem]));
        alert(`"${title}" ha sido añadido al carrito con éxito.`);
    };

    return (
        <div className="arriendos">
            <h3>{title}</h3>
            <Tarjeta img={img} alt={title} classImg='servicio_imagen'>{children}</Tarjeta>
            <p>{cost_text}</p>
            <input 
                type="number" 
                min="1" 
                placeholder="0"
                value={cantidad} 
                onChange={(e) => setCantidad(e.target.value)}
            />

            <div className="datos_arriendo">
                <p>Costo: </p>
                <p>${costoTotal.toLocaleString('es-CL')}</p>
            </div>

            <button className="agregar_arriendo" onClick={handleAddToCart}>Agregar</button>
        </div>
    );
}

export default ArriendoServicio;