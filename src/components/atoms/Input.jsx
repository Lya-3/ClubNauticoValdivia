import { Form } from 'react-bootstrap';
import '../../styles/atoms/Input.css';

function Input({ ...props }) {
  return <Form.Control className="cuadroTexto" {...props} />;
}

export default Input;