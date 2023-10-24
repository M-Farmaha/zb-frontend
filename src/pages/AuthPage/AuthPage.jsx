import { LoginForm } from "../../components/LoginForm/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import {
  AuthContainer,
  Background,
  Container,
  LinkStyled,
  RedirectText,
  Title,
} from "./AuthPage-styled";
import { useLocation } from "react-router-dom";

const AuthPage = () => {
  const { pathname } = useLocation();
  const route = pathname === "/register" ? "Sign Up" : "Login";

  return (
    <Container>
      <Background />
      <AuthContainer>
        <Title>{route}</Title>
        {route === "Login" ? <LoginForm /> : <RegisterForm />}
        <RedirectText>
          {route === "Login"
            ? "Don’t have an account? "
            : "Already have an account? "}
          <LinkStyled to={route === "Login" ? "/register" : "/login"}>
            {route === "Login" ? "Sign Up" : "Log In"}
          </LinkStyled>
        </RedirectText>
      </AuthContainer>
    </Container>
  );
};

export default AuthPage;
