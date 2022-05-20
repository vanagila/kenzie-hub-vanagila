import { Container, LabelContainer, InputContainer } from "./styles";

export const Input = ({ label, register, name, error, ...rest }) => {
  return (
    <Container>
      <LabelContainer>
        {label} {!!error && <span> - {error}</span>}
      </LabelContainer>

      <InputContainer>
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};
