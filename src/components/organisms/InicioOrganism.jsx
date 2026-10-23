import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Formulario from '../molecules/Formulario';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

function InicioOrganism({ titulo, boton, enlace, volver }) {

  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const navigate = useNavigate();

  const iniciarSesion = () => {

    // Validacion para los cuadros vacios
    if (correo.trim() === "" || contraseña.trim() === "") {
      alert("Debes ingresar todos los datos para iniciar sesión");
      return;
    }

    // Validacion del correo con regex
    let expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionCorreo.test(correo)) {
      alert("El correo electrónico no es válido");
      return;
    }

    // Validacion de contraseña
    if (contraseña.length < 10) {
      alert("La contraseña que estás utilizando debe contener 10 caracteres mínimo");
      return;
    }

    // Redirigir cuando pasa las validaciones
    navigate("/arriendos");
  };

  return (
    <Container className="cuadroInicio">

      <Text variant="h1">{titulo}</Text>

      <Row>
        <Col>
          <Formulario
            label="Correo Electrónico:"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Formulario
            label="Contraseña:"
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button onClick={iniciarSesion}>
            Iniciar
          </Button>

          <Button href="/registro">
            Registrarse
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button href={enlace}>
            {boton}
          </Button>
        </Col>
      </Row>

    </Container>
  );
}

export default InicioOrganism;