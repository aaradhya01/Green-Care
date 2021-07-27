import React, {useState} from 'react';
// import SignIn from '../components/Signin';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import ScrollToTop from '../components/ScrollToTop';
import { AccountBox } from "../components/accountBox";
import styled from 'styled-components';

const AppContainer = styled.div`
    padding: 180px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    208deg, rgba(4, 24, 15,1) 50%,
  rgba(4, 20, 10, 1) 40%);
`;


const SigninPage = () => {
        const [isOpen, setIsOpen] = useState(false);
    
        const toggle= () => {
            setIsOpen(!isOpen);
        };

    return (
        <>  
        <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/> 
            {/* <Marginer direction="vertical" margin="7.6rem" /> */}
                <AppContainer>
                <AccountBox/>
            </AppContainer>
            {/* <Marginer direction="vertical" margin="5.6rem" /> */}
            <Footer />
        </>
    );
};

export default SigninPage;
