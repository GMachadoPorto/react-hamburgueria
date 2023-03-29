import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Mínimo de 6 caracteres"),
  confirmPassword: yup
    .string()
    .required("Senha obrigatória")
    .oneOf([yup.ref("password"), null], "Senhas não são iguais"),
});
