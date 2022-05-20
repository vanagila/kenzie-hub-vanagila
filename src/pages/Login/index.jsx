import { Container } from "./styles";
import { Input } from "../../components/Input";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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
          <Input label="Email" placeholder="Seu email" type="email" />
          <Input label="Senha" placeholder="Sua senha" type="password" />
          <button>Entrar</button>
        </form>
        <p>Ainda não possui uma conta?</p>
        <button onClick={() => signupPath("/signup")}>Cadastre-se</button>
      </Container>
    </>
  );
};
