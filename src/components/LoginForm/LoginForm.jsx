import { useState } from "react";

import {
  Form,
  Label,
  Input,
  Button,
  SecureButton,
  HidePasswordIcon,
  ShowPasswordIcon,
  LinkStyled,
} from "./LoginForm-styled";
import { ButtonLoader } from "../Loaders/Loaders";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../../redux/authApi";
import { setToken } from "../../redux/slice";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    try {
      const { token } = await loginUser({ email, password }).unwrap();
      dispatch(setToken(token));
    } catch (error) {
      alert(error?.data?.message);
    }
    setisLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor={"email"}>Email</Label>
      <Input
        style={{ marginBottom: "20px" }}
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id={"email"}
        required
        autoComplete="off"
      />

      <Label htmlFor={"password"}>Password</Label>

      <div style={{ position: "relative" }}>
        <Input
          style={{ marginBottom: "10px", paddingRight: "50px" }}
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id={"password"}
          title="Min 6, max 20 latin letters and figures"
          pattern="^[a-zA-Z0-9]{6,20}$"
          required
          autoComplete="off"
        />
        <SecureButton
          style={{ position: "absolute", top: 0, right: 0 }}
          type="button"
          onClick={() => setShowPassword((prevState) => !prevState)}
        >
          {showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
        </SecureButton>
      </div>

      <LinkStyled style={{ marginBottom: "30px", marginLeft: "auto" }}>
        Forgot password?
      </LinkStyled>

      <Button type="submit" disabled={isLoading || !email || !password}>
        {!isLoading ? "Sign In" : <ButtonLoader />}
      </Button>
    </Form>
  );
};
