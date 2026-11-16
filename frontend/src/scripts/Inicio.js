export function validarInicio(correo, contraseña) {

    if (correo.trim() === "" || contraseña.trim() === "") {
        return "Debes ingresar todos los datos para iniciar sesión";
    }

    let expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionCorreo.test(correo)) {
        return "El correo electrónico no es válido";
    }

    if (contraseña.length < 10) {
        return "La contraseña que estás utilizando debe contener 10 caracteres mínimo";
    }

    return null;
}