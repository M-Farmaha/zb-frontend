import { useNavigate } from "react-router-dom";
import {
  Background,
  Button,
  ContentWrap,
  SubTitle,
  Title,
} from "./StartPage-styled";

export const StartPage = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/login");
  };

  return (
    <>
      <Background>
        <ContentWrap>
          <Title>The chemical negatively charged</Title>
          <SubTitle>
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is
          </SubTitle>
          <Button type="button" onClick={handleButtonClick}>
            Get Started
          </Button>
        </ContentWrap>
      </Background>
    </>
  );
};
