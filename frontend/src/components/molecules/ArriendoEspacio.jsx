import { useState, useEffect } from 'react';
import Tarjeta from '../atoms/Tarjeta';
import Text from '../atoms/Text';

const PRECIOS_ESPACIOS = {
    muelle: {
        base_size: { muelle_8: 15000, muelle_10_5: 20000, muelle_15_5: 30000, muelle_18: 40000, muelle_23: 55000 },
        time_multiplier: { m_dias: 1, m_semanas: 6, m_meses: 24 } 
    },
    almacen: {
        base_size: { almacen_8: 30000, almacen_12: 45000, almacen_16: 60000, almacen_20: 75000, almacen_25: 90000 },
        time_multiplier: { m_meses: 1 }
    }
};

function ArriendoEspacio({ itemId, img, title, tamanos = [], tiempos = [], children}) {
    const [tamano, setTamano] = useState(tamanos[0]?.id || '');
    const [tiempoUnidad, setTiempoUnidad] = useState(tiempos[0]?.id || '');
    const [cantidadTiempo, setCantidadTiempo] = useState(""); 
    const [costoTotal, setCostoTotal] = useState(0);

    useEffect(() => {
        if (!tamano || !tiempoUnidad || !itemId) return;
        
        const basePrice = PRECIOS_ESPACIOS[itemId].base_size[tamano] || 0;
        const multiplier = PRECIOS_ESPACIOS[itemId].time_multiplier[tiempoUnidad] || 1;
        const timeValue = Number(cantidadTiempo) || 0; 
        
        setCostoTotal(basePrice * multiplier * timeValue);
    }, [tamano, tiempoUnidad, cantidadTiempo, itemId]);

    const handleAddToCart = () => {
        if (cantidadTiempo === "" || Number(cantidadTiempo) <= 0) {
            alert("El tiempo no puede ser menor a 0.");
            return;
        }

        const currentCart = JSON.parse(localStorage.getItem('carrito')) || [];

        const alreadyExists = currentCart.some(item => item.title === title);
        if (alreadyExists) {
            alert(`El arriendo "${title}" ya se encuentra en el carrito.`);
            return;
        }

        const sizeText = tamanos.find(t => t.id === tamano)?.text || '';
        const timeText = tiempos.find(t => t.id === tiempoUnidad)?.text || '';

        const newItem = {
            title: title,
            details: `Tamaño: ${sizeText}`,
            amount: timeText,
            quantity: cantidadTiempo.toString(),
            total: costoTotal
        };

        localStorage.setItem('carrito', JSON.stringify([...currentCart, newItem]));
        alert(`"${title}" ha sido añadido al carrito.`);
    };

    return (
        <div className="arriendos">
            <Text variant="h3">{title}</Text>
            <Tarjeta img={img} alt={title} classImg='servicio_imagen'>{children}</Tarjeta>
            
            <div className="datos_arriendo">
                <Text>Tamaño: </Text>
                <select value={tamano} onChange={(e) => setTamano(e.target.value)}>
                    {tamanos.map((item, index) => (
                        <option key={index} value={item.id}>{item.text}</option>
                    ))}
                </select>
            </div>
            
            <Text>Introduzca el rango de tiempo: </Text>
            
            <div className="datos_arriendo">
                <select value={tiempoUnidad} onChange={(e) => setTiempoUnidad(e.target.value)}>
                    {tiempos.map((item, index) => (
                        <option key={index} value={item.id}>{item.text}</option>
                    ))}
                </select>
                <input 
                    type="number" 
                    min="1" 
                    placeholder="0"
                    value={cantidadTiempo} 
                    onChange={(e) => setCantidadTiempo(e.target.value)} 
                />
            </div>

            <div className="datos_arriendo">
                <p>Costo: </p>
                <p>${costoTotal.toLocaleString('es-CL')}</p>
            </div>

            <button className="agregar_arriendo" onClick={handleAddToCart}>Agregar</button>
        </div>
    );
}

export default ArriendoEspacio;