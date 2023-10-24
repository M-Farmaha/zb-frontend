import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  height: 80px;
  padding: 0px 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background-color: var(--primary-color);
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.06),
    0px 2px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const NavWrap = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavList = styled.ul`
  height: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  color: var(--accent-color);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  min-width: 40px;
  height: 45px;

  border-radius: 8px;
  border: 1px solid var(--accent-color);

  text-align: center;
  font-family: Merriweather;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.38;

  transition: var(--main-transition);

  &:hover {
    background-color: var(--accent-color);
    color: var(--primary-white-color);
  }
  &.active {
    background-color: var(--accent-color);
    color: var(--primary-white-color);
    cursor: default;
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  @media (max-width: 490px) {
    width: calc((100vw - 170px) /2 )
  }
`;

export const NavButton = styled.button`
  color: var(--accent-color);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  min-width: 40px;
  height: 45px;
  padding: 11px;

  border-radius: 8px;
  border: 1px solid var(--accent-color);

  text-align: center;
  font-family: Merriweather;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.38;

  outline: none;
  background-color: transparent;

  transition: var(--main-transition);

  &:hover {
    background-color: var(--accent-color);
    color: var(--primary-white-color);
  }
  &.active {
    background-color: var(--accent-color);
    color: var(--primary-white-color);
    cursor: default;
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  @media (max-width: 320px) {
    width: calc(100vw /2 )
  }
`;
