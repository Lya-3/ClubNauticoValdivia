import { useState } from 'react';
import { createPortal } from 'react-dom';
import "../../styles/atoms/Tarjeta.css";

function Tarjeta({ img, alt, classImg, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <img 
                src={img} 
                alt={alt} 
                className={classImg} 
                onClick={() => setIsOpen(true)}
            />

            {isOpen && createPortal(
                <div className="tarjeta-overlay" onClick={() => setIsOpen(false)}>
                    <div className="tarjeta" onClick={(e) => e.stopPropagation()}>
                        {children}
                        <button 
                            className="tarjeta-cerrar" 
                            onClick={() => setIsOpen(false)}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}

export default Tarjeta;