import { Carousel } from 'react-bootstrap';
import RegistroOrganism from '../components/organisms/RegistroOrganism';
import '../styles/Registro.css';

function Registro() {
  const imagenesFondo = [
    '/imagenes/conoce-historia.jpg',
    '/imagenes/mar.jpg',
    '/imagenes/principal-2.jpg'
  ];

  return (
    <main className="fondo-registro">
      <Carousel
        fade
        controls={false}
        indicators={false}
        interval={3500}
        pause={false}
        className="carrusel-fondo"
      >
historia-club        {imagenesFondo.map((src, index) => (
          <Carousel.Item key={index} className="carrusel-fondo-item">
            <img
              src={src}
              alt={`Vista Club Náutico ${index + 1}`}
              className="carrusel-fondo-img"
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="fondo-registro-overlay" />

      <div className="registro-contenido">
        <RegistroOrganism />
      </div>
    </main>
  );
}

export default Registro;