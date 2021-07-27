import React, { useState,useContext} from "react";
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

const SignupForm=()=>{
 const [username,setUsername]=useState('');
 const [password,setPassword]=useState('');
 const handleSubmit=(e)=>{
  e.preventDefault();
  
  
  const data = { username, password }

  fetch('/api/newUser', { method: 'POST', 

  body: JSON.stringify(data), // data can be `string` or {object}!

  headers:{ 'Content-Type': 'application/json' } })

  .then(res => res.json())

  .catch(error => console.error('Error:', error))

  .then(response => console.log('Success:', response));
 }
 
const { switchToSignin } = useContext(AccountContext);
return(
  <BoxContainer onSubmit={(e) => handleSubmit(e)}>
      <FormContainer>
        <Input type="text" placeholder="User Name" required id='username' name='username'  value={username}   onChange={(e) => setUsername(e.target.value)}/></FormContainer>
      <Marginer direction="vertical" margin={20} />
      <FormContainer>
        <Input type="email" placeholder="Email" required /></FormContainer>
      <Marginer direction="vertical" margin={20} />
      <FormContainer>
        <Input type="password" placeholder="Password" required  id='password' name='password'   value={password}  onChange={(e) => setPassword(e.target.value)}/></FormContainer>
      <Marginer direction="vertical" margin={20} />
      <FormContainer>
        <Input type="password" placeholder="Confirm Password" required/>
      </FormContainer>
      <Marginer direction="vertical" margin="1.6rem" />
      <SubmitButton type="submit" onClick={(e) => handleSubmit(e)}>Sign Up</SubmitButton>
      <Marginer direction="vertical" margin="1rem" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          SignIn
        </BoldLink>
        <Marginer direction="vertical" margin="1.5rem" />
      </MutedLink>
    </BoxContainer>
)

}
export default SignupForm;

/* export class SignupForm extends Component {

    constructor() {
        super();

        this.state = {
          username: '',
          password: '',
      };

      this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event) {
      event.preventDefault();
  
  
      const data = { username:this.state.username, email:this.state.email , password:this.state.password }
  
      fetch('/api/newUser', { method: 'POST', 
  
      body: JSON.stringify(data), // data can be `string` or {object}!
  
      headers:{ 'Content-Type': 'application/json' } })
  
      .then(res => res.json())
  
      .catch(error => console.error('Error:', error))
  
      .then(response => console.log('Success:', response));
     }

     handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    render() {

const { switchToSignin } = useContext(AccountContext);
  return (
    <BoxContainer onSubmit={(e) => handleFormSubmit(e)}>
      <FormContainer>
        <Input type="text" placeholder="User Name" required id='username' name='username' onChange={handleChange}/></FormContainer>
      <Marginer direction="vertical" margin={20} />
      <FormContainer>
        <Input type="email" placeholder="Email" required /></FormContainer>
      <Marginer direction="vertical" margin={20} />
      <FormContainer>
        <Input type="password" placeholder="Password" required  id='password' name='password' onChange={handleChange}/></FormContainer>
      <Marginer direction="vertical" margin={20} />
      <FormContainer>
        <Input type="password" placeholder="Confirm Password" required/>
      </FormContainer>
      <Marginer direction="vertical" margin="1.6rem" />
      <SubmitButton type="submit" onSubmit={(e) => this.handleSubmit(e)}>Sign Up</SubmitButton>
      <Marginer direction="vertical" margin="1rem" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          SignIn
        </BoldLink>
        <Marginer direction="vertical" margin="1.5rem" />
      </MutedLink>
    </BoxContainer>
  );
}
}
*/