import InicioOrganism from '../components/organisms/InicioOrganism';
import '../styles/Inicio.css';

function InicioAdmin() {
  return (
    <main className="fondo-login">
      <InicioOrganism
        titulo="INICIAR SESIÓN COMO ADMINISTRADOR"
        boton="Ingresar"
        enlace="/inicio"
      />
    </main>
  );
}

export default InicioAdmin;