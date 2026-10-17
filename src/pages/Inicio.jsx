import InicioOrganism from '../components/organisms/InicioOrganism';
import '../styles/Inicio.css';

function Inicio() {
  return (
    <main className="fondo-login">
      <InicioOrganism
        titulo="INICIO DE SESIÓN"
        boton="Iniciar como Admin"
        enlace="/inicio-admin"
      />
    </main>
  );
}

export default Inicio;