import Text from '../atoms/Text';
import Input from '../atoms/Input';

function Formulario({ label, type, value, onChange }) {
  return (
    <div className="campo">
      <Text variant="label">{label}</Text>
      <Input
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Formulario;