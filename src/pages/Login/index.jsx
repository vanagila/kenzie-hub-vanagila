import { Container, Header } from "./styles";
import { Input } from "../../components/Input";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = ({
  logo,
  setUser,
  setToken,
  authenticated,
  setAuthenticated,
}) => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Senha de no mínimo 6 caracteres"),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const signupPath = () => {
    history.push("/signup");
  };

  const handleLogin = async (data) => {
    await api
      .post("/sessions", data)
      .then((response) => {
        localStorage.setItem("@KenzieHub:Token", response.data.token);
        localStorage.setItem(
          "@KenzieHub:User",
          JSON.stringify(response.data.user)
        );

        setAuthenticated(true);

        setToken(response.data.token);
        setUser(response.data.user);
        history.push("/dashboard");
      })
      .catch((err) => toast.error("Algo deu errado, tente novamente"));

    reset();
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Header>
        <img src={logo} alt={"kenziehub"} />
      </Header>

      <Container>
        <form onSubmit={handleSubmit(handleLogin)}>
          <h4>Login</h4>
          <Input
            register={register}
            label="Email"
            placeholder="Seu email"
            type="email"
            name="email"
            error={errors.email?.message}
          />
          <Input
            register={register}
            label="Senha"
            placeholder="Sua senha"
            type="password"
            name="password"
            error={errors.password?.message}
          />
          <button type="submit">Entrar</button>
        </form>
        <p>Ainda não possui uma conta?</p>
        <button onClick={() => signupPath("/signup")}>Cadastre-se</button>
      </Container>
    </>
  );
};
