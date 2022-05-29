import { Container, LabelContainer, SelectContainer } from "./styles";

export const SelectSignUp = ({ label, register, name, error, ...rest }) => {
  return (
    <Container>
      <LabelContainer>
        {label} {!!error && <span> - {error}</span>}
      </LabelContainer>

      <SelectContainer>
        <select {...register(name)} {...rest}>
          <option value="" disabled defaultValue>
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
      </SelectContainer>
    </Container>
  );
};
