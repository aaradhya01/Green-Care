import React, { useState, useContext } from "react";
import axios from "axios";
// import { Link } from 'react-router-dom'
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { username, password };

    fetch("/api/login", {
      method: "POST",

      body: JSON.stringify(data), // data can be `string` or {object}!

      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())

      .catch((error) => console.error("Error:", error))

      .then((response) => console.log("Success:", response));
  };

  // export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer onSubmit={(e) => handleSubmit(e)}>
      <Marginer direction="vertical" margin={20} />
      <FormContainer>
        <Input
          type="text"
          placeholder="username"
          required
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={20} />
      <FormContainer>
        <Input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={20} />
      <MutedLink href="home">Forgot your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6rem" />
      <SubmitButton type="submit" onClick={(e) => handleSubmit(e)}>
        Sign In
      </SubmitButton>
      <Marginer direction="vertical" margin="1rem" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          SignUp
        </BoldLink>
      </MutedLink>
    </BoxContainer>
    // </Container>
  );
}
