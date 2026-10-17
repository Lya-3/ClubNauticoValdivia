import { Container, Row, Col } from 'react-bootstrap';
import Formulario from '../molecules/Formulario';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

function LoginOrganism({ titulo, boton, enlace, volver }) {
  return (
    <Container className="cuadroInicio">

      <Text variant="h1">{titulo}</Text>

      <Row>
        <Col>
          <Formulario label="Correo Electrónico:" type="email" />
        </Col>
      </Row>

      <Row>
        <Col>
          <Formulario label="Contraseña:" type="password" />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button href="/">Iniciar</Button>
          <Button href="/registro">Registrarse</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button href={enlace}>{boton}</Button>
        </Col>
      </Row>

    </Container>
  );
}

export default LoginOrganism;