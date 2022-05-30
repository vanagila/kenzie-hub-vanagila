import styled from "styled-components";

export const AddTechModal = styled.div`
  margin: auto;
  width: 296px;
  background: var(--grey-3);
  position: absolute;
  transition: ease all 0.5s;
  top: 20%;
  left: 4%;
  box-shadow: -5px 3px 4px 1px rgba(0, 0, 0, 0.36);
  -webkit-box-shadow: -5px 3px 4px 1px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: -5px 3px 4px 1px rgba(0, 0, 0, 0.36);

  @media screen and (min-device-width: 480px) {
    width: 345px;
    left: 10%;
    transition: ease all 0.5s;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 325px;
    left: 29%;
  }

  @media screen and (min-device-width: 769px) {
    width: 369px;
    left: 35%;
    transition: ease all 0.5s;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      width: 264px;
      height: 38px;
      border-radius: 4px;
      background: var(--primary);
      border: 1px solid var(--primary);
      margin-bottom: 25px;
      font-size: 12px;
      font-weight: 500;
      color: var(--grey-0);

      @media screen and (min-device-width: 769px) {
        width: 330px;
        margin-top: 10px;
        font-size: 16px;
      }
    }
  }
`;

export const ModalHeader = styled.header`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px 16px;
  margin-bottom: 19px;
  background: var(--grey-2);

  p {
    font-size: 11px;
    font-weight: 700;
    color: var(--grey-0);

    @media screen and (min-device-width: 769px) {
      font-size: 14px;
    }
  }

  button {
    font-size: 12px;
    background: none;
    border: none;
    color: var(--grey-0);
    cursor: pointer;

    @media screen and (min-device-width: 769px) {
      font-size: 14px;
    }
  }
`;
