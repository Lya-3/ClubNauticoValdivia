import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { validarRegistro } from '../../scripts/Registro';
import Formulario from '../molecules/Formulario';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

function RegistroOrganism() {

  // Datos que se vaningresar
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [contraseñaRepetida, setContraseñaRepetida] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [velero, setVelero] = useState("");

  const navigate = useNavigate();

  const guardarRegistro = () => {
    const error = validarRegistro({
      nombre, correo, contraseña, contraseñaRepetida,
      telefono, direccion, velero
    });

    if (error) return alert(error);

    navigate("/inicio");
  };

  return (
    <Container className="cuadroRegistro">

      <Text variant="h1">REGISTRO DE USUARIO</Text>

      <Row>
        <Col>
          <Formulario
            label="Nombre Completo:"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Col>
      </Row>

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
          <Formulario
            label="Repetir Contraseña:"
            type="password"
            value={contraseñaRepetida}
            onChange={(e) => setContraseñaRepetida(e.target.value)}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Formulario
            label="Teléfono (Opcional):"
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Formulario
            label="Dirección (Calle y Número):"
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Formulario
            label="Modelo de Velero:"
            type="text"
            value={velero}
            onChange={(e) => setVelero(e.target.value)}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button onClick={guardarRegistro}>
            Guardar
          </Button>

          <Button href="/inicio">
            Cancelar
          </Button>
        </Col>
      </Row>

    </Container>
  );
}

export default RegistroOrganism;