import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { validarInicio } from '../../scripts/Inicio';
import Formulario from '../molecules/Formulario';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

function InicioOrganism({
  titulo = "INICIAR SESIÓN",
  boton = "Iniciar Sesión",
  enlace = "/inicio-admin"
}) {

  // Datos que se van a ingresar
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const navigate = useNavigate();

  const iniciarSesion = () => {
    const error = validarInicio(correo, contraseña);

    if (error) return alert(error);

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
            {boton}
          </Button>

          <Button onClick={() => navigate(enlace)}>
            {enlace === "/inicio"
              ? "Cambiar a Cliente"
              : "Cambiar a Admin"}
          </Button>

          <Button onClick={() => navigate("/registro")}>
            Registrarse
          </Button>
        </Col>
      </Row>

    </Container>
  );
}

export default InicioOrganism;