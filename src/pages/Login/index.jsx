import { Container } from "./styles";
// import { Input } from "../../components/Input";
import { useHistory } from "react-router-dom";

export const Login = ({ logo }) => {
  const history = useHistory();

  const signupPath = (path) => {
    return history.push(path);
  };

  return (
    <>
      <img src={logo} alt={"kenziehub"} />

      <Container>
        <form>
          <h4>Login</h4>
          <input label="Email" placeholder="Seu email" type="email" />
          <input label="Senha" placeholder="Sua senha" type="password" />
          <button>Entrar</button>
        </form>
        <p>Ainda não possui uma conta?</p>
        <button onClick={() => signupPath("/signup")}>Cadastre-se</button>
      </Container>
    </>
  );
};
