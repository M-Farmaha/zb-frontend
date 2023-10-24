import styled from "styled-components";

export const ItemWrap = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  background-color: var(--primary-grey-color);
`;

export const Image = styled.img`
  height: 400px;
  min-width: 450px;
  width: 630px;
  object-fit: cover;
`;

export const ImageLoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export const DescriptionWrap = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  padding: 20px 14px;
`;

export const DescriptionTitle = styled.h3`
  color: var(--primary-white-color);
  font-family: Merriweather;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.7;

  margin-bottom: 5px;
`;

export const DescriptionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 75px;
`;

export const DescriptionItem = styled.li`
  width: 150px;
`;

export const DescriptionText = styled.span`
  color: var(--primary-white-color);
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.22;
`;
