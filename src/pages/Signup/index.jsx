import { Container, Header } from "./styles";
import { Input } from "../../components/Input";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Signup = ({ logo }) => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Senha de no mínimo 6 caracteres"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas não conferem"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const sendData = (data) => {
    delete data.confirmPassword;
    console.log(data);
  };

  return (
    <>
      <Header>
        <img src={logo} alt={"kenziehub"} />
      </Header>
      {/* <ReturnLogin onClick={() => handleSignup("/")}>Voltar</ReturnLogin> */}
      <Container>
        <form onSubmit={handleSubmit(sendData)}>
          <h4>Crie sua conta</h4>
          <p>Rápido e grátis, vamos nessa</p>
          <Input
            register={register}
            label="Nome"
            placeholder="Digite aqui seu nome"
            type="text"
            name="name"
            error={errors.name?.message}
          />
          <Input
            register={register}
            label="Email"
            placeholder="Digite aqui seu email"
            type="email"
            name="email"
            error={errors.email?.message}
          />
          <Input
            register={register}
            label="Senha"
            placeholder="Digite aqui sua senha"
            type="password"
            name="password"
            error={errors.password?.message}
          />
          <Input
            register={register}
            label="Confirmar Senha"
            placeholder="Confirme aqui sua senha"
            type="password"
            name="confirmPassword"
            error={errors.confirmPassword?.message}
          />
          <Input
            register={register}
            label="Bio"
            placeholder="Digite aqui sua bio"
            type="text"
            name="bio"
            error={errors.bio?.message}
          />
          <Input
            register={register}
            label="Contato"
            placeholder="Digite aqui seu contato"
            name="contact"
            error={errors.contact?.message}
          />
          <Input
            register={register}
            label="Selecionar módulo"
            placeholder="Primeiro Módulo"
            name="course_module"
            error={errors.module?.message}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    </>
  );
};
