import styled from "styled-components";

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
  }

  button {
    font-size: 12px;
    background: none;
    border: none;
    color: var(--grey-0);
    cursor: pointer;
  }
`;

export const EditTechModal = styled.div`
  width: 296px;
  background: var(--grey-3);
  position: absolute;
  transition: ease all 0.5s;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: -5px 3px 4px 1px rgba(0, 0, 0, 0.36);
  -webkit-box-shadow: -5px 3px 4px 1px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: -5px 3px 4px 1px rgba(0, 0, 0, 0.36);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const EditBtn = styled.div`
  width: 264px;
  display: flex;
  justify-content: space-between;

  button:first-child {
    width: 163px;
    height: 38px;
    border-radius: 4px;
    background: var(--primary);
    border: 1px solid var(--primary);
    margin-bottom: 25px;
    font-size: 12px;
    font-weight: 500;
    color: var(--grey-0);
    &:hover {
      background: var(--primary-focus);
      border: 1px solid var(--primary-focus);
    }
  }

  button:last-child {
    width: 78px;
    height: 38px;
    border-radius: 4px;
    background: var(--primary);
    border: 1px solid var(--primary);
    margin-bottom: 25px;
    font-size: 12px;
    font-weight: 500;
    color: var(--grey-0);
    &:hover {
      background: var(--primary-focus);
      border: 1px solid var(--primary-focus);
    }
  }
`;
