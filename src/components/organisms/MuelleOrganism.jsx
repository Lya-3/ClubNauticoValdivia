import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import '../../styles/organisms/MuelleOrganism.css';

export default function MuelleOrganism() {
    const [muelleseleccionado, setMuelleSeleccionado] = useState(null);

    const datosMuelle = [
        {
            id: 'A1-A-3',
            nombre: 'Muelle sector A (A1 - A3)',
            medidas: 'Largo: 10.5 metros, Ancho: 4 metros',
            diario: '$15.000',
            semanal: '$89.250',
            mensual: '$382.500',
            electricidad: false,
            imagen: '/imagenes/muelle-1.jpg',
            descripcion: 'Muelle estándar ideal para lanchas pequeñas y embarcaciones ligeras de recreo.',
        },
        {
            id: 'A4-A-5',
            nombre: 'Muelle sector A (A4 - A5)',
            medidas: 'Largo: 10.5 metros, Ancho: 4.5 metros',
            diario: '$20.000',
            semanal: '$119.000',
            mensual: '$510.000',
            electricidad: true,
            imagen: '/imagenes/muelle 2.webp',
            descripcion: 'Incluye torre de conexión eléctrica de 220V integrada y acceso a toma de agua.',
        },
        {
            id: 'A6-A8',
            nombre: 'Muelle Premium A (A6 - A8)',
            medidas: '15 m x 6 m',
            diario: '$29.000',
            semanal: '$172.000',
            mensual: '$739.500',
            electricidad: true,
            imagen: '/imagenes/muelle 3.jpg',
            descripcion: 'Espacio de fácil maniobrabilidad con dimensiones ampliadas para yates y veleros de eslora media.'
        },
        {
            id: 'B1-B5',
            nombre: 'Muelle Exclusivo B (B1 - B5)',
            medidas: '18 m x 8 m',
            diario: '$40.000',
            semanal: '$172.000',
            mensual: '$1.020.000',
            electricidad: true,
            imagen: '/imagenes/muelle 4.webp',
            descripcion: 'Ubicación privilegiada con máxima capacidad de manga y sistemas de amarra reforzados.'
        },
        {
            id: 'E1-E3',
            nombre: 'Muelle Gran Calado E (E1 - E3)',
            medidas: '23 m x 9.5 m',
            diario: '$45.000',
            semanal: '$260.000',
            mensual: '$1.147.500',
            electricidad: true,
            imagen: '/imagenes/muelle 5.jpg',
            descripcion: 'Diseñado especialmente para catamaranes y grandes embarcaciones turísticas.'
        }
    ];

    return (
        <Container className="my-5 muelle-container">
            {/* Encabezado */}
            <div className="text-center mb-5">
                <h1 className="muelle-header-title display-5">Nuestros Muelles</h1>
                <p className="muelle-header-subtitle">
                    Espacios seguros y cómodos para tu embarcación en el Club Náutico Valdivia.
                </p>
            </div>

            {/* Grid de Tarjetas de Muelles */}
            <Row className="g-4">
                {datosMuelle.map((item) => (
                    <Col key={item.id} xs={12} md={6} lg={4}>
                        <div className="tarjeta-muelle">
                            <div style={{ overflow: 'hidden' }}>
                                <Image src={item.imagen} alt={item.nombre} className="tarjeta-muelle-img" />
                            </div>
                            <div className="tarjeta-muelle-body">
                                <Text variant="h3">{item.nombre}</Text>
                                <p className="tarjeta-muelle-medidas"> 📐 {item.medidas}</p>
                                <div className="tarjeta-muelle-precio">Desde {item.diario} / día</div>
                                <Button onClick={() => setMuelleSeleccionado(item)}>
                                    Ver Detalle
                                </Button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            {/* Modal con Detalle Explícito y Ampliado del Muelle */}
            {muelleseleccionado && (
                <Modal
                    show={!!muelleseleccionado}
                    onHide={() => setMuelleSeleccionado(null)}
                    size="lg"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{muelleseleccionado.nombre}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md={6}>
                                <Image
                                    src={muelleseleccionado.imagen}
                                    alt={muelleseleccionado.nombre}
                                    className="img-fluid rounded mb-3"
                                />
                            </Col>
                            <Col md={6}>
                                <h5>Descripción y Características</h5>
                                <p>{muelleseleccionado.descripcion}</p>

                                <ul className="list-unstyled">
                                    <li><strong>Dimensiones:</strong> {muelleseleccionado.medidas}</li>
                                    <li>
                                        <strong>Electricidad:</strong>{' '}
                                        {muelleseleccionado.electricidad ? 'Sí (Conexión 220V)' : 'No Disponible'}
                                    </li>
                                </ul>

                                <h5 className="mt-4">Desglose de Tarifas</h5>
                                <div className="p-3 bg-light rounded">
                                    <p className="mb-1"><strong>Tarifa Diaria:</strong> {muelleseleccionado.diario}</p>
                                    <p className="mb-1"><strong>Tarifa Semanal:</strong> {muelleseleccionado.semanal}</p>
                                    <p className="mb-0 text-success"><strong>Tarifa Mensual:</strong> {muelleseleccionado.mensual}</p>
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setMuelleSeleccionado(null)}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </Container>
    );
}