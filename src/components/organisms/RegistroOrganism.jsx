import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
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

  const navigate = useNavigate();

  const guardarRegistro = () => {

    // Validacion para los cuadros vacios
    if (
      nombre.trim() === "" ||
      correo.trim() === "" ||
      contraseña.trim() === "" ||
      contraseñaRepetida.trim() === "" ||
      direccion.trim() === "" ||
      velero.trim() === ""
    ) {
      alert("Es importante que rellenes todos los datos!");
      return;
    }

    // Validacion de nombre con regex
    let expresionNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;

    if (!expresionNombre.test(nombre)) {
      alert("El nombre no puede contener números ni caracteres especiales");
      return;
    }

    // Validacion de correo con regex
    let expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionCorreo.test(correo)) {
      alert("El correo electrónico no es válido");
      return;
    }

    // Validacion de contraseña
    if (contraseña.length < 10) {
      alert("La contraseña debe contener 10 caracteres mínimo");
      return;
    }

    // Validar que las contraseñas coincidan
    if (contraseña !== contraseñaRepetida) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Validar direccion
    let tieneNumero = /[0-9]/.test(direccion);
    let tieneLetras = /[A-Za-zÁÉÍÓÚáéíóúÑñ]/.test(direccion);

    if (!tieneLetras || !tieneNumero) {
      alert("La dirección debe contener un nombre de calle y el número de casa o departamento");
      return;
    }

    // Redirigir cuande pase las validaciones
    navigate("/");
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