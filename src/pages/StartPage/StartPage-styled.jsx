import styled from "styled-components";
import StartPageBackground from "./StartPageBackground.jpg";

export const Background = styled.div`
  color: var(--primary-black-color);
  background-color: var(--primary-color);
  background-image: linear-gradient(
      to right,
      rgba(23, 34, 52, 0.6),
      rgba(23, 34, 52, 0.6)
    ),
    url(${StartPageBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 80px;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: var(--primary-white-color);
  text-align: center;
  font-family: Merriweather;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;

  margin-bottom: 10px;
  padding: 0px 40px;

  @media (max-width: 490px) {
    font-size: 13vw;
  }
`;

export const SubTitle = styled.p`
  max-width: 822px;
  color: var(--primary-white-color);
  text-align: center;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.48px;

  margin-bottom: 30px;
  padding: 0px 40px;

  @media (max-width: 490px) {
    font-size: 4.9vw;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: var(--primary-white-color);
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 24px;

  border-radius: 8px;
  border: 1px solid var(--primary-white-color);

  font-family: Merriweather;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.7;

  transition: var(--main-transition);

  &:hover {
    background-color: var(--accent-color);
    color: var(--primary-white-color);
    border: 1px solid var(--accent-color);
  }
  &.active {
    background-color: var(--accent-color);
    color: var(--primary-white-color);
    border: 1px solid var(--accent-color);
    cursor: default;
  }
`;
