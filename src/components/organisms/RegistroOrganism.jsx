import { Container, Row, Col } from 'react-bootstrap';
import Formulario from '../molecules/Formulario';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

function RegistroOrganism() {
  return (
    <Container className="cuadroRegistro">

      <Text variant="h1">REGISTRO DE USUARIO</Text>

      <Row>
        <Col>
          <Formulario label="Nombre Completo:" type="text" />
        </Col>
      </Row>

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
          <Formulario label="Repetir Contraseña:" type="password" />
        </Col>
      </Row>

      <Row>
        <Col>
          <Formulario label="Teléfono" type="tel" />
        </Col>
      </Row>

      <Row>
        <Col>
          <Formulario label="Dirección (Calle y Número):" type="text" />
        </Col>
      </Row>

      <Row>
        <Col>
          <Formulario label="Modelo de Velero:" type="text" />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button href="/">Guardar</Button>
          <Button href="/inicio">Cancelar</Button>
        </Col>
      </Row>

    </Container>
  );
}

export default RegistroOrganism;