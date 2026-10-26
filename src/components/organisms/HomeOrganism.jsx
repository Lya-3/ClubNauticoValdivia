import React from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import "../../styles/organisms/HomeOrganism.css"

export default function HomeOrganism() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            {/* Carrusel Principal*/}
            <section className="carrusel-hero-section">
                <Carousel fade interval={4000} controls={true} indicators={true}>
                    <Carousel.Item>
                        <div className="carrusel-img-overlay">
                            <Image src="/imagenes/principal.webp" alt="Club Náutico Valdivia" className="d-block w-100 carrusel-img" />
                        </div>
                        <Carousel.Caption className="carrusel-caption-custom">
                            <h1>Club Náutico Valdivia</h1>
                            <h2>Tu embarcación, en un lugar seguro</h2>
                            <p>Muelles y servicios de excelencia pensados para tu comodidad.</p>
                            <Button className="btn-hero mt-3" onClick={() => navigate('/muelle')}>
                                Explorar Muelles
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="carrusel-img-overlay">
                            <Image src="/imagenes/Muelles.jpg" alt="Muelles del Club Náutico Valdivia" className="d-block w-100 carrusel-img" />
                        </div>
                        <Carousel.Caption className="carrusel-caption-custom">
                            <h1>Instalaciones de Primer Nivel</h1>
                            <h2>Espacios pensados para ti</h2>
                            <p>Resguardos seguros y monitoreo 24/7 en un entorno natural único.</p>
                            <Button className="btn-hero mt-3" onClick={() => navigate("/almacenamiento")}>
                                Ver Almacenes
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="carrusel-img-overlay">
                            <Image src="/imagenes/principal 2.jpg" alt="Marina Club Náutico Valdivia" className="d-block w-100 carrusel-img" />
                        </div>
                        <Carousel.Caption className="carrusel-caption-custom">
                            <h1>Comunidad Náutica</h1>
                            <h2>Aprovecha el entorno privilegiado</h2>
                            <p>Ubicación estratégica en el corazón fluvial de Valdivia.</p>
                            <Button className="btn-hero mt-3" onClick={() => navigate("/servicios")}>
                                Nuestros Servicios
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            {/* Sección Conócenos*/}
            <section className="seccion-conocenos py-5">
                <Container>
                    <Row className="align-items-center g-5">
                        <Col lg={6}>
                            <div className="img-wrapper rounded-4 overflow-hidden shadow-lg">
                                <Image src="/imagenes/conoce-historia.jpg" alt="Conócenos Club Náutico" className="img-fluid" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <span className="badge-subtitulo">SOBRE NOSOTROS</span>
                            <h2 className="seccion-titulo mt-2">Conócenos</h2>
                            <p className="seccion-texto">
                                Club Náutico Valdivia es un espacio dedicado a brindar infraestructura y servicios integrales para quienes buscan un lugar seguro, moderno y cómodo para sus embarcaciones.
                            </p>
                            <p className="seccion-texto">
                                Ofrecemos una experiencia náutica superior, combinando seguridad operativa, atención personalizada y la mejor ubicación de la región.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Sección Nuestra Historia */}
            <section className="seccion-historia py-5">
                <Container>
                    <Row className="align-items-center g-5 flex-lg-row-reverse">
                        <Col lg={6}>
                            <div className="img-wrapper rounded-4 overflow-hidden shadow-lg">
                                <Image src="/imagenes/historiaaaa.webp" alt="Historia Club Náutico" className="img-fluid" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <span className="badge-subtitulo">NUESTRA TRAYECTORIA</span>
                            <h2 className="seccion-titulo mt-2">Nuestra Historia</h2>
                            <p className="seccion-texto">
                                Nacemos con el propósito de crear una comunidad sólida alrededor de la pasión por la navegación, entregando soluciones reales para el resguardo y cuidado de todo tipo de embarcaciones.
                            </p>
                            <p className="seccion-texto">
                                Con el paso de los años, hemos crecido de la mano con nuestros socios, fortaleciendo nuestras instalaciones y manteniendo siempre un trato cercano en el entorno privilegiado de la ciudad de Valdivia.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Sección ¿Por qué Elegirnos?*/}
            <section className="seccion-elegirnos py-5">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="seccion-titulo mt-2">¿Por qué elegirnos?</h2>
                        <p className="seccion-subtitulo mx-auto">
                            Nos esforzamos día a día por ofrecer la mejor calidad de servicio y tranquilidad para tu inversión.
                        </p>
                    </div>

                    <Row className="g-4">
                        <Col md={4}>
                            <Card className="card-razon text-center h-100 p-4 border-0 shadow-sm">
                                <Card.Body className="d-flex flex-column align-items-center">
                                    <div className="icon-box mb-3">🛡️</div>
                                    <Card.Title className="fw-bold fs-4">Seguridad</Card.Title>
                                    <Card.Text className="text-muted mt-2">
                                        Instalaciones monitoreadas 24/7 con accesos controlados y protección ante factores climáticos.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="card-razon text-center h-100 p-4 border-0 shadow-sm">
                                <Card.Body className="d-flex flex-column align-items-center">
                                    <div className="icon-box mb-3">📍</div>
                                    <Card.Title className="fw-bold fs-4">Ubicación</Card.Title>
                                    <Card.Text className="text-muted mt-2">
                                        Un entorno privilegiado e inmejorable acceso directo para disfrutar de la navegación en Valdivia.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="card-razon text-center h-100 p-4 border-0 shadow-sm">
                                <Card.Body className="d-flex flex-column align-items-center">
                                    <div className="icon-box mb-3">⚓</div>
                                    <Card.Title className="fw-bold fs-4">Comodidad</Card.Title>
                                    <Card.Text className="text-muted mt-2">
                                        Infraestructura de alta gama, atención personalizada y servicios pensados para cada necesidad.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}