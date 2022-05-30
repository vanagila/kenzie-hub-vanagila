import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  div {
    span {
      color: var(--negative);
    }
  }
`;

export const LabelContainer = styled.div`
  color: var(--grey-0);
  font-size: 10px;
  margin-bottom: 15px;

  @media screen and (min-device-width: 769px) {
    font-size: 12px;
  }
`;

export const InputContainer = styled.div`
  background: var(--grey-2);
  display: flex;
  width: 264px;
  height: 38px;
  margin-bottom: 15px;
  border-radius: 4px;

  @media screen and (min-device-width: 769px) {
    width: 330px;
    height: 48px;
    transition: ease all 0.5s;
  }

  input {
    background: transparent;
    border: 1px var(--grey-0) solid;
    padding: 13px;
    width: 100%;
    border-radius: 4px;
    color: var(--grey-0);
  }
`;
