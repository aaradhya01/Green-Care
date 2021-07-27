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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

// export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (    
    <BoxContainer onSubmit={handleSubmit}>
      <Marginer direction="vertical" margin={20} />
      <FormContainer>
        <Input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}/></FormContainer>
        <Marginer direction="vertical" margin={20} />
        <FormContainer>
        <Input type="password" placeholder="Password"  required value={password} onChange={(e) => setPassword(e.target.value)}/>
      </FormContainer>
      <Marginer direction="vertical" margin={20} />
      <MutedLink href="home">Forgot your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6rem" />
      <SubmitButton type="submit" disabled={!validateForm()}>Sign In</SubmitButton>
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