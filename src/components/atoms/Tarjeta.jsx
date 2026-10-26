import { useState } from 'react';
import "../../styles/atoms/Tarjeta.css";

function Tarjeta({ img, alt, classImg, children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <img 
            src={img} 
            alt={alt} 
            className={classImg} 
            onClick = {() => {setIsOpen(!isOpen)}}/>
        {isOpen && (
            <div className='tarjeta'>
                {children}
                <button onClick={() => {setIsOpen(false)}}>Cerrar</button>
            </div>
        )}
        </>
    )
}

export default Tarjeta;