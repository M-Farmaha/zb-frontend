import { useState } from "react";
import {
  Form,
  Label,
  Input,
  Button,
  SecureButton,
  HidePasswordIcon,
  ShowPasswordIcon,
} from "./RegisterForm-styled";

import { ButtonLoader } from "../Loaders/Loaders";
import { useCreateUserMutation } from "../../redux/authApi";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/slice";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const [createNewUser] = useCreateUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    try {
      const { token } = await createNewUser({ name, email, password }).unwrap();
      dispatch(setToken(token));
    } catch (error) {
      alert(error.data.message);
    }
    setisLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor={"name"}>Name</Label>
      <Input
        style={{ marginBottom: "20px" }}
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        id={"name"}
        title="Min 6, max 20 latin letters"
        pattern="^[a-zA-Z]{6,20}$"
        required
        autoComplete="off"
      />

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
          style={{ marginBottom: "30px", paddingRight: "50px" }}
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

      <Button
        type="submit"
        disabled={isLoading || !name || !email || !password}
      >
        {!isLoading ? "Sign Up" : <ButtonLoader />}
      </Button>
    </Form>
  );
};
