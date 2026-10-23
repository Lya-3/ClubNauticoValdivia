import Text from '../atoms/Text';
import Input from '../atoms/Input';

function Formulario({ label, type }) {
  return (
    <div className="campo">
      <Text variant="label">{label}</Text>
      <Input type={type} />
    </div>
  );
}

export default Formulario;