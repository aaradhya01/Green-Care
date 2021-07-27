// // import React from 'react'
// // import {FormH1, Container, FormButton, FormContent, FormInput, FormLabel, FormWrap, Text, Icon, Form } from './signin'
// // import { Button } from '../button';

// // const SignIn =  ({primary, dark, dark2 }) => {
// //     return (
// //         <>
// //         <Container>
// //             <FormWrap>
// //                 <Icon to='/'>Logo</Icon>
// //                 <FormContent>
// //                     <Form action='#'>
// //                         <FormH1>Sign in to your account</FormH1>
// //                         <FormLabel htmlFor='for'></FormLabel>
// //                         <FormInput type='email' required placeholder='E-mail'/>
// //                         <FormLabel htmlFor='for'></FormLabel>
// //                         <FormInput type='password' required placeholder='Password'/>
// //                         <FormButton type='submit'><Button to='home' smooth={true}   duration={500} spy={true} exact='true' offset={-80}
// //                             primary={primary ? 1 : 0}
// //                             dark= {dark ? 1 : 0}
// //                             dark2= {dark2 ? 1 : 0}
// //                             >Continue</Button></FormButton>
// //                         <Text>Forgot password</Text>
// //                     </Form>
// //                 </FormContent>
// //             </FormWrap>
// //         </Container>
            
// //         </>
// //     )
// // }
// // export default SignIn








// import React from "react";
// import ReactDOM from "react-dom";
// import {
//   CardWrapper,
//   CardHeader,
//   CardHeading,
//   CardBody,
//   CardIcon,
//   CardFieldset,
//   CardInput,
//   CardOptionsItem,
//   CardOptions,
//   CardOptionsNote,
//   CardButton,
//   CardLink,
//   Container
// } from "./signin";
// import "./styles.css";

// const SignIn =  () => {
//         return (
//     <Container>
//       <CardWrapper>
//         <CardHeader>
//           <CardHeading>Sign in</CardHeading>
//         </CardHeader>

//         <CardBody>
//           <CardFieldset>
//             <CardInput placeholder="Username" type="text" required />
//           </CardFieldset>

//           <CardFieldset>
//             <CardInput placeholder="E-mail" type="text" required />
//           </CardFieldset>

//           <CardFieldset>
//             <CardInput placeholder="Password" type="password" required />
//             <CardIcon className="fa fa-eye" eye small />
//           </CardFieldset>

//           <CardFieldset>
//             <CardOptionsNote>Or sign up with</CardOptionsNote>

//             <CardOptions>
//               <CardOptionsItem>
//                 <CardIcon className="fab fa-google" big />
//               </CardOptionsItem>

//               <CardOptionsItem>
//                 <CardIcon className="fab fa-twitter" big />
//               </CardOptionsItem>

//               <CardOptionsItem>
//                 <CardIcon className="fab fa-facebook" big />
//               </CardOptionsItem>
//             </CardOptions>
//           </CardFieldset>

//           <CardFieldset>
//             <CardButton type="button">Sign Up</CardButton>
//           </CardFieldset>

//           <CardFieldset>
//             <CardLink>I already have an account</CardLink>
//           </CardFieldset>
//         </CardBody>
//       </CardWrapper>

//     </Container>
//   );
// }

// export default SignIn
// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<App />, rootElement);
