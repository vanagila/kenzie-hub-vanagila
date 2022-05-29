import styled from "styled-components";

export const Header = styled.header`
  width: 101px;
  height: 14px;
  margin: auto;
  margin-top: 114px;
  margin-bottom: 19px;
`;

export const Container = styled.div`
  width: 296px;
  height: 402px;
  background: var(--grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      background: var(--primary);
      width: 100%;
      height: 38px;
      border: 1px solid var(--primary);
      border-radius: 4px;
      color: var(--grey-0);
      font-size: 13px;
      &:hover {
        background: var(--primary-focus);
        border: 1px solid var(--primary-focus);
      }
    }
  }

  h4 {
    color: #f8f9fa;
    font-weight: 700;
    padding-top: 36px;
    padding-bottom: 22px;
  }

  p {
    color: var(--grey-1);
    font-size: 10px;
    font-weight: 600;
    padding-top: 27px;
    padding-bottom: 17px;
  }

  button {
    background: var(--primary);
    width: 264px;
    height: 38px;
    font-size: 13px;
    border: 1px solid var(--primary);
    border-radius: 4px;
    color: var(--grey-0);
    &:hover {
      background: var(--primary-focus);
      border: 1px solid var(--primary-focus);
    }
  }
`;
