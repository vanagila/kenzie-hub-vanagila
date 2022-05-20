import styled from "styled-components";

export const Header = styled.div`
  margin: auto;
  width: 296px;
  border-color: 1px solid white;

  img {
    width: 101px;
    height: 15px;
  }
`;

export const ReturnLogin = styled.button`
  width: 79px;
  height: 25px;
  border-radius: 4px;
  background: var(--grey-3);
  color: var(--grey-0);
  font-weight: 600;
  font-size: 10px;
  border: none;
`;

export const Container = styled.div`
  width: 296px;
  height: 725px;
  background: var(--grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h4 {
    color: #f8f9fa;
    font-weight: 700;
    padding-top: 33px;
  }

  button {
    background: var(--primary-negative);
    width: 100%;
    height: 38px;
    margin-bottom: 33px;
    border: 1px solid var(--primary-negative);
    border-radius: 4px;
    color: var(--grey-0);
    font-size: 13px;
  }

  p {
    color: var(--grey-1);
    font-size: 10px;
    font-weight: 600;
    padding-top: 17px;
    padding-bottom: 17px;
  }
`;
