import { useState, useEffect } from "react";
import ListaCompras from "../components/organisms/ListaCompras";

import "/src/styles/Carrito.css"

function Carrito() {
    const [listaCompras, setListaCompras] = useState([]);
    const [totalGeneral, setTotalGeneral] = useState(0);

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('carrito')) || [];
        
        const calcTotal = cartData.reduce((acc, item) => acc + item.total, 0);
        setTotalGeneral(calcTotal);

        const formattedCart = cartData.map(item => ({
            ...item,
            total: `$${item.total.toLocaleString('es-CL')}` 
        }));

        setListaCompras(formattedCart);
    }, []);

    const handleVaciarCarrito = () => {
        localStorage.removeItem('carrito');
        setListaCompras([]);
        setTotalGeneral(0);
    };

    return (
        <div className="compras" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {listaCompras.length > 0 ? (
                <div style={{ width: '100%', maxWidth: '800px' }}>
                    <ListaCompras lista_compras={listaCompras} />
                    <div className="debajo_carrito">
                        <h2 style={{ margin: 0 }}>Total Final: ${totalGeneral.toLocaleString('es-CL')}</h2>
                        <button 
                            className="vaciar_carrito"
                            onClick={handleVaciarCarrito} 
                        >
                            Vaciar Carrito
                        </button>
                    </div>
                </div>
            ) : (
                <div className="debajo_carrito_vacio">
                    <h2>El carrito está vacío.</h2>
                    <p>Agregue algunos arriendos para verlos aquí.</p>
                    <button onClick={() => window.location.href = '/arriendos'}>Volver a Arriendos</button>
                </div>
            )}
        </div>
    );
}

export default Carrito;