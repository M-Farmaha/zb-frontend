import {
  NavLinkStyled,
  NavList,
  NavWrap,
  Header,
  NavButton,
} from "./AppBar-styled";

import { getToken } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ButtonLoader } from "../Loaders/Loaders";
import { useLogoutUserMutation } from "../../redux/authApi";
import { setToken } from "../../redux/slice";

export const AppBar = () => {
  const [isLoading, setisLoading] = useState(false);
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();

  const handleLogOutClick = async () => {
    setisLoading(true);
    try {
      await logoutUser(token);
      dispatch(setToken(null));
    } catch (error) {
      alert(error);
    }
    setisLoading(false);
  };

  return (
    <>
      <Header>
        <NavWrap>
          {token ? (
            <NavButton
              disabled={isLoading}
              type="button"
              onClick={handleLogOutClick}
            >
              {!isLoading ? "Log Out" : <ButtonLoader />}
            </NavButton>
          ) : (
            <NavList>
              <li>
                <NavLinkStyled to="/login">Log In</NavLinkStyled>
              </li>

              <li>
                <NavLinkStyled to="/register">Sign Up</NavLinkStyled>
              </li>
            </NavList>
          )}
        </NavWrap>
      </Header>
    </>
  );
};
