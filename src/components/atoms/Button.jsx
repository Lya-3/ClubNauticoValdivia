import { Button as BootstrapButton } from 'react-bootstrap';
import '../../styles/atoms/Button.css';

function Button({ children, ...props }) {
  return (
    <BootstrapButton className="boton" {...props}>
      {children}
    </BootstrapButton>
  );
}

export default Button;