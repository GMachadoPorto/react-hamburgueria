import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { StyledForm } from "../../styles/form";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { Link } from "react-router-dom";
import { iRegister } from "../../context/UserContext";

function FormRegister() {
  const { registerUser, loadingRequest } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegister>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(registerUser)} noValidate>
      <header>
        <h2>Cadastro</h2>
        <Link to="/">Retornar para o login</Link>
      </header>
      <Input
        label="Nome"
        type="text"
        placeholder="Nome"
        register={register("name")}
        borderColor={
          errors.name?.message
            ? "var(--color-negative)"
            : "var(--color-primary)"
        }
      >
        {errors.name?.message && errors.name.message}
      </Input>
      <Input
        label="Email"
        type="text"
        placeholder="Email"
        register={register("email")}
        borderColor={
          errors.email?.message
            ? "var(--color-negative)"
            : "var(--color-primary)"
        }
      >
        {errors.email?.message && errors.email.message}
      </Input>

      <Input
        label="Senha"
        type="password"
        placeholder="Senha"
        register={register("password")}
        borderColor={
          errors.password?.message
            ? "var(--color-negative)"
            : "var(--color-primary)"
        }
      >
        {errors.password?.message && errors.password.message}
      </Input>
      <Input
        label="Confirmar senha"
        type="password"
        placeholder="Confirmar senha"
        register={register("confirmPassword")}
        borderColor={
          errors.confirmPassword?.message
            ? "var(--color-negative)"
            : "var(--color-primary)"
        }
      >
        {errors.confirmPassword?.message && errors.confirmPassword.message}
      </Input>

      <button className="register" type="submit" disabled={loadingRequest}>
        Cadastrar
      </button>
    </StyledForm>
  );
}

export default FormRegister;
