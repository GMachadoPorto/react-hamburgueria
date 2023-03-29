import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { StyledForm } from "../../styles/form";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { Link } from "react-router-dom";
import { iLogin } from "../../context/UserContext";

function FormLogin() {
  const { login, loadingRequest } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(login)} noValidate>
      <header>
        <h2>Login</h2>
      </header>
      <Input
        label="Email"
        type="text"
        placeholder="Email"
        register={register("email")}
        borderColor={
          errors.email?.message
            ? "var(--color-negative)"
            : "var(--color-gray-0)"
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
            : "var(--color-gray-0)"
        }
      >
        {errors.password?.message && errors.password.message}
      </Input>

      <button className="login" type="submit" disabled={loadingRequest}>
        Login
      </button>
      <span>
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </span>
      <Link className="fakeButton" to="/register">
        Cadastrar
      </Link>
    </StyledForm>
  );
}

export default FormLogin;
