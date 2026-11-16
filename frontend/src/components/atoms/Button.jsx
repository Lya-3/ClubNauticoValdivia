import { Button as BootstrapButton } from 'react-bootstrap';
import '../../styles/atoms/Button.css';

function Button({ children, className = "", ...props }) {
  return (
    <BootstrapButton className={`boton ${className}`} {...props}>
      {children}
    </BootstrapButton>
  );
}

export default Button;