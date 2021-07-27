import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarMenu, SidebarWrapper, SideBtnWrap, SidebarRoute } from './sidebar';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About Us</SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to='jobs' onClick={toggle}>Jobs</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to ='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>

            </SidebarWrapper>
        </SidebarContainer>

    )
}

export default Sidebar
