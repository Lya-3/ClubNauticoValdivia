import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { validarRegistro } from '../../scripts/Registro';
import Formulario from '../molecules/Formulario';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

function RegistroOrganism() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [contraseñaRepetida, setContraseñaRepetida] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [velero, setVelero] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const navigate = useNavigate();

  const guardarRegistro = () => {
    setMensajeError("");
    const error = validarRegistro({
      nombre, correo, contraseña, contraseñaRepetida,
      telefono, direccion, velero
    });

    if (error) {
      setMensajeError(error);
      return;
    }

    navigate("/inicio");
  };

  return (
    <Container className="cuadroRegistro">
      <div className="registro-header">
        <span className="registro-badge">NUEVO SOCIO</span>
        <Text variant="h1">REGISTRO DE USUARIO</Text>
        <p className="registro-subtitulo">
          Completa tus datos y los de tu embarcación para unirte al club
        </p>
      </div>

      {mensajeError && (
        <Alert
          variant="danger"
          onClose={() => setMensajeError("")}
          dismissible
          className="text-start mb-4"
        >
          {mensajeError}
        </Alert>
      )}

      <Row className="g-3">
        <Col md={6}>
          <Formulario
            label="Nombre Completo:"
            type="text"
            placeholder="Ej: Juan Pérez"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Formulario
            label="Correo Electrónico:"
            type="email"
            placeholder="ejemplo@correo.cl"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </Col>
      </Row>

      <Row className="g-3">
        <Col md={6}>
          <Formulario
            label="Contraseña:"
            type="password"
            placeholder="Mínimo 8 caracteres"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Formulario
            label="Repetir Contraseña:"
            type="password"
            placeholder="Repite tu contraseña"
            value={contraseñaRepetida}
            onChange={(e) => setContraseñaRepetida(e.target.value)}
          />
        </Col>
      </Row>

      <Row className="g-3">
        <Col md={6}>
          <Formulario
            label="Teléfono (Opcional):"
            type="tel"
            placeholder="+56 9 1234 5678"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Formulario
            label="Dirección (Calle y Número):"
            type="text"
            placeholder="Ej: Av. Arturo Prat 123"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </Col>
      </Row>

      <Row className="g-3">
        <Col>
          <Formulario
            label="Modelo de Velero / Embarcación:"
            type="text"
            placeholder="Ej: Beneteau Oceanis 38"
            value={velero}
            onChange={(e) => setVelero(e.target.value)}
          />
        </Col>
      </Row>

      <div className="registro-acciones">
        <Button className="btn-registro-cancelar" onClick={() => navigate("/inicio")}>
          Cancelar
        </Button>

        <Button className="btn-registro-guardar" onClick={guardarRegistro}>
          Crear Cuenta
        </Button>
      </div>
    </Container>
  );
}

export default RegistroOrganism;