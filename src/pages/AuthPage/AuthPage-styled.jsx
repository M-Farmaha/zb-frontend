import styled from "styled-components";
import AuthPageBackground from "./AuthPageBackground.jpg";

import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  margin-top: 80px;
`;

export const Background = styled.div`
  background-color: var(--primary-color);
  background-image: url(${AuthPageBackground});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  width: 100%;
  height: calc(100vh - 80px);
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 80px);
  min-width: 550px;

  background-color: var(--secondary-white-color);
`;

export const Title = styled.h2`
  color: var(--secondary-black-color);
  font-family: Merriweather;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.21;

  width: 350px;
  margin-bottom: 20px;
`;

export const LinkStyled = styled(Link)`
  color: var(--accent-color);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.57;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const RedirectText = styled.p`
  color: var(--primary-color);
  text-align: center;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.57;
`;
