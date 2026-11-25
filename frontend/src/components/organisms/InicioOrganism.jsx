import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { validarInicio } from '../../scripts/Inicio';
import Formulario from '../molecules/Formulario';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

function InicioOrganism({
  titulo = "INICIAR SESIÓN",
  boton = "Iniciar Sesión",
  enlace = "/inicio-admin"
}) {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const navigate = useNavigate();

  const esAdmin = enlace === "/inicio";

  const iniciarSesion = () => {
    setMensajeError("");
    const error = validarInicio(correo, contraseña);

    if (error) {
      setMensajeError(error);
      return;
    }

    navigate("/arriendos");
  };

  return (
    <Container className="cuadroInicio">
      <div className="login-header">
        <span className={`login-badge ${esAdmin ? 'badge-admin' : 'badge-cliente'}`}>
          {esAdmin ? "ADMINISTRACIÓN" : "PORTAL SOCIOS"}
        </span>
        <Text variant="h1">{titulo}</Text>
        <p className="login-subtitulo">
          {esAdmin
            ? "Ingresa tus credenciales de gestión del Club Náutico"
            : "Bienvenido de vuelta al Club Náutico Valdivia"}
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

      <Row>
        <Col>
          <Formulario
            label="Correo Electrónico:"
            type="email"
            placeholder="ejemplo@correo.cl"
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
            placeholder="••••••••"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </Col>
      </Row>

      <div className="login-acciones">
        <Button className="btn-login-principal" onClick={iniciarSesion}>
          {boton}
        </Button>

        <div className="login-acciones-secundarias">
          <Button className="btn-login-rol" onClick={() => navigate(enlace)}>
            {esAdmin ? "Cambiar a Cliente" : "Cambiar a Admin"}
          </Button>

          {!esAdmin && (
            <Button className="btn-login-registro" onClick={() => navigate("/registro")}>
              Crear una cuenta
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
}

export default InicioOrganism;