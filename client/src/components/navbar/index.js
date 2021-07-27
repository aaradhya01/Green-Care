import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './navbar';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../images/logo.png';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav= {scrollNav}>
                <NavbarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavLogo to='/' onClick={toggleHome} > 
                    <img src={logo} alt='logo' style={{height: '100px'}}/>
                        </NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' activeClass='active' offset={-80}>About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' activeClass='active' offset={-80}>Sign Up</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' activeClass='active' offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='jobs' smooth={true} duration={500} spy={true} exact='true' activeClass='active' offset={-80}>Jobs</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
