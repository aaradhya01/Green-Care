// import styled from "styled-components";
// import {Link} from 'react-router-dom';

// export const Container = styled.div`
//     height: 900px;
//     margin-top: -80px;
//     position: fixed;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     top: 0;
//     z-index: 0;
//     overflow: hidden;
//     background: linear-gradient(
//         108deg, rgba(1, 147, 86, 1) 0%,
//         rgba(10, 201, 122, 1) 100%
//     );
// `;



// export const FormWrap = styled.div`
//         height: 100%;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;

//         @media screen and (max-width: 400px) {
//             height: 80%;
//         };
// `;

// export const Icon = styled(Link)`
//         margin-left: 32px;
//         margin-top: 32px;
//         text-decoration: none;
//         color: #ff;
//         font-weight: 700;
//         font-size: 32px;

//         @media screen and (max-width: 400px) {
//             margin-left: 16px;
//             margin-top: 8px;
//         };
// `

// export const FormContent = styled.div`
//         height: 100%;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;

//         @media screen and (max-width: 400px) {
//             padding: 10px;
//         };
// `;

// export const Form = styled.div`
//         background: #010101;
//         max-width: 400px;
//         height: auto;
//         width: 100%
//         z-index: 1;
//         margin: 0 auto;
//         padding: 80px 32px;
//         border-radius: 4px;
//         box-shadow: 0 1px 3px rgba(0,0,0,0.9);

//         @media screen and (max-width: 400px) {
//             padding: 32px 32px;
//         };
// `;

// export const FormH1 = styled.h1`
//         margin-bottom: 40px;
//         color: #fff;
//         font-size: 20px;
//         font-weight: 400;
//         text-align: center;
// `;

// export const FormLabel = styled.label`
//     margin-bottom: 8px;
//     color: #fff;
//     font-size: 14px;
// `

// export const FormInput = styled.input`
//     margin-bottom: 32px;
//     padding: 16px 16px;
//     border: none;
//     border-radius: 4px;
// `

// export const FormButton = styled.button`
//     margin: 10px;
//     padding: 0;
//     border: none;
// `

// export const Text = styled.span`
//         margin-top: 24px;
//         color: #fff;
//         font-size: 14px;
//         text-align: center;
// `;


// import React from "react";
// import styled, { css } from "styled-components";

// export const Container = styled.div`
//     padding: 180px 0;
//     text-align: center;
//     background: linear-gradient(
//             220deg, rgba(0,0,0,1) 40%,
//          rgba(10, 201, 122, 1) 100%
//      );`

// export const CardWrapper = styled.div`
// width: 280px;
//   min-height: 550px;
//   display: flex;
//   flex-direction: column;
//   border-radius: 19px;
//   background-color: #fff;
//   box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
//   position: relative;
//   overflow: hidden;
// `;

// export const CardHeader = styled.header`
//   padding-top: 32px;
//   padding-bottom: 32px;
// `;

// export const CardHeading = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   text-align: center;
// `;

// export const CardBody = styled.div`
//   padding-right: 32px;
//   padding-left: 32px;
// `;

// export const CardFieldset = styled.fieldset`
//   position: relative;
//   padding: 0;
//   margin: 0;
//   border: 0;

//   & + & {
//     margin-top: 24px;
//   }

//   &:nth-last-of-type(2) {
//     margin-top: 32px;
//   }

//   &:last-of-type {
//     text-align: center;
//   }
// `;

// export const CardInput = styled.input`
//   padding: 7px 0;
//   width: 100%;
//   font-family: inherit;
//   font-size: 16px;
//   border-top: 0;
//   border-right: 0;
//   border-bottom: 1px solid #ddd;
//   border-left: 0;
//   transition: border-bottom-color 0.25s ease-in;

//   &:focus {
//     border-bottom-color: #e5195f;
//     outline: 0;
//   }
// `;

// export const CardIcon = styled.span`
//   color: #666;
//   cursor: pointer;
//   opacity: .25;
//   transition: opacity .25s ease-in;

//   &:hover {
//     opacity: .95;
//   }

//   ${props =>
//     props.big &&
//     css`
//       font-size: 26px;
//     `}

//   ${props =>
//     props.eye &&
//     css`
//       position: absolute;
//       top: 8px;
//       right: 0;
//     `}

//   ${props =>
//     props.small &&
//     css`
//       font-size: 14px;
//     `}
// `;

// export const CardOptionsNote = styled.small`
//   padding-top: 8px;
//   display: block;
//   width: 100%;
//   font-size: 12px;
//   text-align: center;
//   text-transform: uppercase;
// `;

// export const CardOptions = styled.ul`
//   padding: 0;
//   margin: 16px 0 8px;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   list-style-type: none;
// `;

// export const CardOptionsItem = styled.li`
//   &:nth-of-type(n + 2) {
//     margin-left: 16px;
//   }
// `;

// export const CardButton = styled.button`
//   display: block;
//   width: 100%;
//   padding: 12px 0;
//   font-family: inherit;
//   font-size: 14px;
//   font-weight: 700;
//   color: #fff;
//   background-color: #01bf71;
//   border: 0;
//   border-radius: 35px;
//   box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
//   cursor: pointer;
//   transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

//   &:hover {
//     box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
//     transform: translate(0, -5px);
//   }
// `;

// export const CardLink = styled.a`
//   display: inline-block;
//   font-size: 12px;
//   text-decoration: none;
//   color: #aaa;
//   border-bottom: 1px solid #ddd;
//   cursor: pointer;
//   transition: color 0.25s ease-in;

//   &:hover {
//     color: #777;
//   }
// `;