import { Container, LabelContainer, SelectContainer } from "./styles";

export const SelectModal = ({ label, register, name, error, ...rest }) => {
  return (
    <Container>
      <LabelContainer>
        {label} {!!error && <span> - {error}</span>}
      </LabelContainer>

      <SelectContainer>
        <select {...register(name)} {...rest}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </SelectContainer>
    </Container>
  );
};
