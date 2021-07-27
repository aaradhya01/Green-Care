import styled from "styled-components";

// export const Container = styled.div`
// background: linear-gradient(
//   220deg, rgba(0,0,0,1) 40%,
// rgba(10, 201, 122, 1) 100%
// )
// `;

// body {
//   width: 100%;
//   height: 100%;
//   overflow-x: hidden;
// }
// * {
//   box-sizing: border-box;
// }

// body {
//   margin: 0;
//   font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
//     "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
//     "Helvetica Neue", sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }

// code {
//   font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
//     monospace;
// }

// #root {
//   width: 100%;
//   height: 100%;
// }

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20%;
  box-shadow: 1px 1px 2.5px rgba(1, 191, 113, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 15px;
  color: rgba(1, 191, 113, 0.7);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 360px){
    font-size: 12px;
  }
`;

export const BoldLink = styled.a`
  font-size: 15px;
  color: rgb(1, 191, 113);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;

  @media screen and (max-width: 360px){
    margin: 0 2px;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;
  outline: none;
  border: 2px solid rgba(1, 191, 113, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 20px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(1, 191, 113, 0.1);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(1, 191, 113);
  }

  @media screen and (max-width: 360px){
    font-size: 15px;
    width: 50%;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 20%;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #01bf71;
  background: linear-gradient(
    58deg,
    rgba(1, 191, 113,1) 20%,
    rgba(1, 191, 113,1 ) 100%
  );
  &:hover {
    filter: brightness(1.03);
  }
`;

