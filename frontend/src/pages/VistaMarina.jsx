import { useState } from "react";
import EspacioContainer from "../components/organisms/EspacioContainer.jsx";
import "/src/styles/VistaMarina.css"; 

function VistaMarina() {
    const [muelles, setMuelles] = useState([
        {
            espacio_id: 'A1',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'A2',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'A3',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'A4',
            cliente: 'Ernesto Sabata Riquelme',
            embarcacion: 'Santa Maria',
        },
        {
            espacio_id: 'A5',
            cliente: 'William McRover Smith',
            embarcacion: 'Viento Blanco',
        },
        {
            espacio_id: 'A6',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'A7',
            cliente: 'Emma Brown Miller',
            embarcacion: 'Navegante',
        },
        {
            espacio_id: 'A8',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'B1',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'B2',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'B3',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'B4',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'B5',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'C1',
            cliente: 'Juan Alcayaga Sasso',
            embarcacion: 'Leona',
        },
        {
            espacio_id: 'C2',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'C3',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'C4',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'C5',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'C6',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'C7',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'C8',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'C9',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'E1',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'E2',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'E3',
            cliente: 'N/A',
            embarcacion: '-',
        }
    ]);

    const [almacenes, setAlmacenes] = useState([
        {
            espacio_id: 'S0',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S1',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S2',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S3',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S4',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S5',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S6',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S7',
            cliente: 'Catalina Uribe Lagos',
            embarcacion: 'Inmo',
        },
        {
            espacio_id: 'S8',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S9',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S10',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S11',
            cliente: 'Armando Rivera Sanchez',
            embarcacion: 'Poseidon',
        },
        {
            espacio_id: 'S12',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S13',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S14',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S15',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S16',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S17',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S18',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S19',
            cliente: 'N/A',
            embarcacion: '-',
        },
        {
            espacio_id: 'S20',
            cliente: 'N/A',
            embarcacion: '-',
        }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [actionType, setActionType] = useState('add'); 
    const [spaceType, setSpaceType] = useState('muelle'); 
    const [espacioId, setEspacioId] = useState('');
    const [size, setSize] = useState('');
    const [costDay, setCostDay] = useState('');
    const [costWeek, setCostWeek] = useState('');
    const [costMonth, setCostMonth] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (actionType === 'add') {
            const newSpace = {
                espacio_id: espacioId,
                cliente: 'N/A',
                embarcacion: '-',
            };

            if (spaceType === 'muelle') {
                setMuelles([...muelles, newSpace]);
            } else {
                setAlmacenes([...almacenes, newSpace]);
            }
        } else if (actionType === 'remove') {
            if (spaceType === 'muelle') {
                setMuelles(muelles.filter(m => m.espacio_id !== espacioId));
            } else {
                setAlmacenes(almacenes.filter(a => a.espacio_id !== espacioId));
            }
        }

        setIsModalOpen(false);
        setEspacioId('');
        setSize('');
        setCostDay('');
        setCostWeek('');
        setCostMonth('');
    };

    return (
        <div className="vista-marina-wrapper">
            <h2 className="espacio_titulo">Muelles</h2>
            <EspacioContainer espacios={muelles}/>
            
            <h2 className="espacio_titulo">Almacenes</h2>
            <EspacioContainer espacios={almacenes}/>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>{actionType === 'add' ? 'Registrar' : 'Eliminar'} Espacio</h3>
                        
                        <form onSubmit={handleSubmit} className="modal-form">
                            <select value={actionType} onChange={(e) => setActionType(e.target.value)}>
                                <option value="add">Registrar Nuevo</option>
                                <option value="remove">Eliminar Existente</option>
                            </select>

                            <select value={spaceType} onChange={(e) => setSpaceType(e.target.value)}>
                                <option value="muelle">Muelle</option>
                                <option value="almacen">Almacen</option>
                            </select>

                            <input 
                                type="text" 
                                placeholder="ID del Espacio (ej. A10)" 
                                value={espacioId} 
                                onChange={(e) => setEspacioId(e.target.value)} 
                                required 
                            />

                            {actionType === 'add' && (
                                <>
                                    <input 
                                        type="text" 
                                        placeholder="Tamaño (ej. 8 M | 26 FT)" 
                                        value={size} 
                                        onChange={(e) => setSize(e.target.value)} 
                                        required 
                                    />
                                    
                                    {spaceType === 'muelle' && (
                                        <>
                                            <input type="number" placeholder="Costo por Día" value={costDay} onChange={(e) => setCostDay(e.target.value)} />
                                            <input type="number" placeholder="Costo por Semana" value={costWeek} onChange={(e) => setCostWeek(e.target.value)} />
                                        </>
                                    )}
                                    <input type="number" placeholder="Costo por Mes" value={costMonth} onChange={(e) => setCostMonth(e.target.value)} required={actionType === 'add'} />
                                </>
                            )}

                            <div className="modal-actions">
                                <button type="submit">Confirmar</button>
                                <button type="button" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <div className="espacio_boton">
                <button onClick={() => setIsModalOpen(true)}>
                    Gestionar Espacios (Añadir/Eliminar)
                </button>
            </div>
        </div>
    )
}

export default VistaMarina;