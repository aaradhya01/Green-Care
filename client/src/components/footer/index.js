import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './footer'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import logo from '../../images/logo.png'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>


                    <FooterLinksWrapper>

                        <FooterLinkItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                                <FooterLink to='/sign-up'>How it works</FooterLink>
                                <FooterLink to='signin'>Testimonial</FooterLink>
                                <FooterLink to='signin'>Careers</FooterLink>
                                <FooterLink to='signin'>Investors</FooterLink>
                                <FooterLink to='signin'>Terms and Services</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us </FooterLinkTitle>
                                <FooterLink to='signin'>How it works</FooterLink>
                                <FooterLink to='signin'>Testimonial</FooterLink>
                                <FooterLink to='signin'>Careers</FooterLink>
                                <FooterLink to='signin'>Investors</FooterLink>
                                <FooterLink to='signin'>Terms and Services</FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>


                    <FooterLinksWrapper>

                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media </FooterLinkTitle>
                                <FooterLink to='signin'>How it works</FooterLink>
                                <FooterLink to='signin'>Testimonial</FooterLink>
                                <FooterLink to='signin'>Careers</FooterLink>
                                <FooterLink to='signin'>Investors</FooterLink>
                                <FooterLink to='signin'>Terms and Services</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Business</FooterLinkTitle>
                                <FooterLink to='signin'>How it works</FooterLink>
                                <FooterLink to='signin'>Testimonial</FooterLink>
                                <FooterLink to='signin'>Careers</FooterLink>
                                <FooterLink to='signin'>Investors</FooterLink>
                                <FooterLink to='user'>Terms and Services</FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>


                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>

                        <SocialLogo to='/' onClick={toggleHome}><img src={logo} alt='logo' style={{height: '100px'}}/></SocialLogo>
                        <WebsiteRights>© All rights reserved.  {new Date().getFullYear()} </WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                                </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                                </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='YouTube'>
                                <FaYoutube />
                                </SocialIconLink>
                            <SocialIconLink href='//www.twitter.com/' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                                </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>            
        </FooterContainer>
    )
}

export default Footer
