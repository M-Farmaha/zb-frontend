import styled from "styled-components";

export const Section = styled.section`
  margin-top: 80px;
  padding: 50px 80px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 800px) {
    padding: 50px 10vw
  }
`;

export const Title = styled.h2`
  color: var(--accent-color);
  font-family: Merriweather;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.21;

  margin-bottom: 20px;
  
`;

export const DealsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
