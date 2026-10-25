import React, { useState } from 'react';
import { Container, Row, Col, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap'
import Text from '../atoms/Text'
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import '../../styles/organisms/AlmacenamientoOrganism.css';

export default function AlmacenamientoOrganism() {
    const [almacenSeleccionado, setAlmacenSeleccionado] = useState(null);

    const datosAlmacen = [
        {
            id: 'S0-S4',
            nombre: 'Almacén Pequeño (S0 - S4)',
            medidas: '8 m x 4 m',
            diario: '$5.000',
            semanal: '$25.000',
            mensual: '$85.000',
            techado: true,
            seguridad: true,
            imagen: '/imagenes/Almacen.1.jpg',
            descripcion: 'Espacio bajo techo perfecto para embarcaciones pequeñas, motos de agua o equipos náuticos de menor tamaño.',
        },
        {
            id: 'S5-S10',
            nombre: 'Almacén Mediana (S5 - S10)',
            medidas: '12 m x 5 m',
            diario: '$7.500',
            semanal: '$35.000',
            mensual: '$115.000',
            techado: true,
            seguridad: true,
            imagen: '/imagenes/Almacen.2.jpg',
            descripcion: 'Bodega de almacenamiento estándar para lanchas motoras y embarcaciones recreativas de tamaño medio.',
        },
        {
            id: 'S11-S14',
            nombre: 'Almacén Grande (S11 - S14)',
            medidas: '16 m x 5 m',
            diario: '$9.000',
            semanal: '$42.000',
            mensual: '$135.000',
            techado: true,
            seguridad: true,
            imagen: '/imagenes/Almacen.3.jpg',
            descripcion: 'Excelente capacidad de maniobra y resguardo seguro contra las condiciones climáticas.',
        },
        {
            id: 'S15-S18',
            nombre: 'Almacén Extra Grande (S15 - S18)',
            medidas: '20 m x 6 m',
            diario: '$10.000',
            semanal: '$48.000',
            mensual: '$147.000',
            techado: true,
            seguridad: true,
            imagen: '/imagenes/Almacen.4.jpg',
            descripcion: 'Diseñado para yates medianos o embarcaciones que requieran espacio adicional de bodega.',
        },
        {
            id: 'S19-S20',
            nombre: 'Almacén Master (S19 - S20)',
            medidas: '25 m x 10 m',
            diario: '$12.500',
            semanal: '$58.000',
            mensual: '$180.000',
            techado: true,
            seguridad: true,
            imagen: '/imagenes/Almacen.5.jpg',
            descripcion: 'Espacio bajo techo perfecto para embarcaciones pequeñas, motos de agua o equipos náuticos de menor tamaño.',
        }

    ];

    return (
        <Container className="my-5 almacen-container">
            {/* Encabezado */}
            <div className="text-center mb-5">
                <h1 className="almacen-header-title display-5">Almacenamiento de Embarcaciones</h1>
                <p className="almacen-header-subtitle">
                    Espacios techados y resguardados con monitoreo 24/7 para tu embarcación en el Club Náutico Valdivia.
                </p>
            </div>

            {/* Grid de Tarjestas de Almacenes*/}
            <Row className="g-4">
                {datosAlmacen.map((item) => (
                    <Col key={item.id} xs={12} md={6} lg={4}>
                        <div className="tarjeta-almacen">
                            <div style={{ overflow: "hidden" }}>
                                <Image src={item.imagen} alt={item.nombre} className={"tarjeta-almacen-img"} />
                            </div>
                            <div className="tarjeta-almacen-body">
                                <Text variant="h3">{item.nombre}</Text>
                                <p className="tarjeta-almacen-medidas"> 📦 Medidas: {item.medidas} </p>
                                <div className="tarjeta-almacen-precio">{item.mensual} / mes</div>
                                <Button onClick={() => setAlmacenSeleccionado(item)}>
                                    Ver Detalle
                                </Button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            {/* Modal Detalle*/}
            {almacenSeleccionado && (
                <Modal
                    show={!!almacenSeleccionado}
                    onHide={() => setAlmacenSeleccionado(null)}
                    size='lg'
                    centered
                >
                    <ModalHeader closeButton>
                        <ModalTitle className="fw-bold">{almacenSeleccionado.nombre}</ModalTitle>
                    </ModalHeader>
                    <ModalBody className="p-4">
                        <Row className="g-4 align-items-stretch">
                            <Col md={6}>
                                <div className="modal-imagen-container">
                                    <Image
                                        src={almacenSeleccionado.imagen}
                                        alt={almacenSeleccionado.nombre}
                                        className={"img-fluid rounded"}
                                    />
                                </div>
                            </Col>
                            <Col md={6} className="d-flex flex-column justify-content-between">
                                <div>
                                    <h5 className="fw-bold mb-2">Descripción y Características</h5>
                                    <p className="text-secondary small mb-3">{almacenSeleccionado.descripcion}</p>

                                    <ul className="list-unstyled mb-3 small">
                                        <li className="mb-1">
                                            <strong>Espacio Techado:</strong> {almacenSeleccionado.techado ? "Sí (Protección UV y Lluvia)" : "No"}
                                        </li>
                                        <li>
                                            <strong>Seguridad:</strong> {almacenSeleccionado.seguridad ? "Cámara 24/7 y Acceso Controlado" : "Estándar"}
                                        </li>
                                    </ul>
                                </div>

                                <h5 className="fw-bold mb-2">Plan de Tarifas</h5>
                                <div className="modal-tarifas-box">
                                    <p className="mb-1 small"><strong>Tarifa Diario:</strong> {almacenSeleccionado.diario}</p>
                                    <p className="mb-1 small"><strong>Tarifa Semanal:</strong> {almacenSeleccionado.semanal}</p>
                                    <p className="mb-0 text-success fw-bold"><strong>Tarifa Mensual:</strong> {almacenSeleccionado.mensual}</p>
                                </div>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => setAlmacenSeleccionado(null)}>
                            Cerrar
                        </Button>
                    </ModalFooter>
                </Modal>
            )}

        </Container>
    )
}
