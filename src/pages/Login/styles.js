import styled from "styled-components";

export const Header = styled.header`
  width: 101px;
  height: 14px;
  margin: auto;
  margin-top: 114px;
  margin-bottom: 19px;

  @media screen and (min-width: 769px) {
    width: 144px;
    height: 20px;
    padding-bottom: 35px;
  }

  img {
    @media screen and (min-width: 769px) {
      width: 144px;
      height: 20px;
    }
  }
`;

export const Container = styled.div`
  width: 296px;
  height: 402px;
  background: var(--grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  @media screen and (min-width: 769px) {
    width: 369px;
    height: 502px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      background: var(--primary);
      width: 100%;
      height: 38px;
      margin-top: 4px;
      border: 1px solid var(--primary);
      border-radius: 4px;
      color: var(--grey-0);
      font-size: 13px;
      &:hover {
        background: var(--primary-focus);
        border: 1px solid var(--primary-focus);
      }

      @media screen and (min-width: 769px) {
        height: 48px;
        font-size: 16px;
        margin-top: 24px;
      }
    }
  }

  h4 {
    color: #f8f9fa;
    font-weight: 700;
    padding-top: 36px;
    padding-bottom: 22px;

    @media screen and (min-width: 769px) {
      font-size: 18px;
      padding-top: 42px;
      padding-bottom: 28px;
    }
  }

  p {
    color: var(--grey-1);
    font-size: 10px;
    font-weight: 600;
    padding-top: 27px;
    padding-bottom: 17px;

    @media screen and (min-width: 769px) {
      font-size: 12px;
      padding-top: 34px;
      padding-bottom: 22px;
    }
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

    @media screen and (min-width: 769px) {
      height: 48px;
      font-size: 16px;
    }
  }
`;
