import styled from "styled-components";

export const Header = styled.nav`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: auto;
  padding: 17px 12px;

  img {
    width: 101px;
    height: 15px;
  }

  @media screen and (min-width: 769px) {
    width: 780px;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Line = styled.hr`
  width: 100%;
  border-top: 1px solid var(--grey-3);
  border-bottom: 1px solid var(--grey-3);
`;

export const LogOutButton = styled.button`
  width: 55px;
  height: 32px;
  border-radius: 4px;
  background: var(--grey-3);
  color: var(--grey-0);
  font-weight: 600;
  font-size: 12px;
  border: none;
  &:hover {
    background: var(--grey-2);
  }
`;

export const ContainerInfo = styled.header`
  margin: auto;
  width: 320px;
  height: 131px;
  padding-top: 35px;
  padding-left: 12px;
  margin-top: 24px;

  h3 {
    color: var(--grey-0);
    font-weight: 700px;
    padding-bottom: 10px;
  }

  p {
    font-size: 12px;
    font-weight: 600px;
    color: var(--grey-1);
  }

  @media screen and (min-width: 769px) {
    width: 780px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-left: 0;
  }
`;

export const TechHeader = styled.div`
  margin: auto;
  height: 32px;
  width: 294px;
  margin-top: 19px;
  display: flex;
  justify-content: space-between;

  h4 {
    color: var(--grey-0);
  }

  @media screen and (min-width: 769px) {
    width: 780px;
    margin-top: 29px;
    margin-bottom: 29px;
  }
`;

export const AddTechButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: var(--grey-3);
  color: var(--grey-0);
  font-weight: 600;
  font-size: 12px;
  border: none;
  &:hover {
    background: var(--grey-2);
  }
`;

export const TechContainer = styled.section`
  margin: auto;
  margin-top: 21px;
  width: 296px;
  border-radius: 4px;
  padding: 22px 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: var(--grey-3);
  transition: ease all 0.5s;

  @media screen and (min-width: 769px) {
    width: 780px;
    align-items: center;
    transition: ease all 0.5s;
  }
`;

export const TechCard = styled.div`
  width: 279px;
  height: 48px;
  padding: 12px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background: var(--grey-4);
  cursor: pointer;
  &:hover {
    background: var(--grey-2);
  }

  @media screen and (min-width: 769px) {
    width: 742px;
  }

  h5 {
    font-size: 14px;
    color: var(--grey-0);
  }

  p {
    color: var(--grey-1);
    font-size: 12px;
  }
`;
