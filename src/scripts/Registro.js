export function validarRegistro({
    nombre,
    correo,
    contraseña,
    contraseñaRepetida,
    telefono,
    direccion,
    velero
}) {
    if (
        nombre.trim() === "" ||
        correo.trim() === "" ||
        contraseña.trim() === "" ||
        contraseñaRepetida.trim() === "" ||
        direccion.trim() === "" ||
        velero.trim() === ""
    ) {
        return "Es importante que rellenes todos los datos!";
    }

    let expresionNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;

    if (!expresionNombre.test(nombre)) {
        return "El nombre no puede contener números ni caracteres especiales";
    }

    let expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionCorreo.test(correo)) {
        return "El correo electrónico no es válido";
    }

    if (contraseña.length < 10) {
        return "La contraseña debe contener 10 caracteres mínimo";
    }

    if (contraseña !== contraseñaRepetida) {
        return "Las contraseñas no coinciden";
    }

    let expresionTelefono = /^\+?[0-9]+$/;

    if (telefono !== "" && !expresionTelefono.test(telefono)) {
        return "El teléfono solo puede contener números y el + inicial en caso de ser necesario";
    }

    let tieneNumero = /[0-9]/.test(direccion);
    let tieneLetras = /[A-Za-zÁÉÍÓÚáéíóúÑñ]/.test(direccion);

    if (!tieneLetras || !tieneNumero) {
        return "La dirección debe contener un nombre de calle y el número de casa o departamento";
    }

    return null;
}