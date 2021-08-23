import * as yup from "yup"

export const userValidationSchema = yup.object().shape({
    firstName: yup.string().required("el campo primer nobre es requerido"),
    lastName: yup.string().required("el campo apellido es requerido"),
    email: yup.string().required("el campo email es requerido"),
    job: yup.string().required("el campo cargo es requerido"),
    password: yup
        .string()
        .required("el campo contraseña es requerido")
        .min(6, "El campo contraseña debe tener al menos 6 digitos"),
    confirmPassword: yup
        .string()
        .required("el campo confirmar contraseña es requerido")
        .oneOf(
            [yup.ref("password"), null],
            "Confirmar contraseña debe ser igual a contraseña"
        ),
    period: yup.string().required("el campo periodo es requerido"),
});