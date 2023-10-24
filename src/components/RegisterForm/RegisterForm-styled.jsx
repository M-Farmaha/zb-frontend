import styled from "styled-components";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;

  margin-bottom: 10px;
`;

export const Label = styled.label`
  color: var(--primary-black-color);

  font-family: Merriweather;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.43;

  margin-bottom: 3px;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px 20px 14px 20px;
  border: none;
  outline: none;
  border-radius: 5px;

  color: var(--primary-color);
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.57;

  background-color: var(--primary-grey-color);

  transition: var(--main-transition);

  ::placeholder {
    color: var(--primary-color);
    opacity: 0.5;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.57;
  }

  &:focus {
    background-color: var(--primary-white-color);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 44px;

  font-family: Merriweather;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.38;

  color: var(--primary-white-color);
  background-color: var(--accent-color);
  border-radius: 5px;
  border: none;

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export const SecureButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;

  opacity: 0.5;
  color: var(--primary-color);
  background-color: transparent;
  border-radius: 5px;
  border: none;
  padding: 6px;

  transition: var(--main-transition);

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
    opacity: 1;
  }
`;

export const ShowPasswordIcon = styled(AiFillEye)`
  width: 20px;
  height: 20px;
`;

export const HidePasswordIcon = styled(AiFillEyeInvisible)`
  width: 20px;
  height: 20px;
`;
