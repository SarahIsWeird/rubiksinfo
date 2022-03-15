import React from 'react'
import { Nav, NavLink, NavTitle, Bars, NavMenu, NavBtn, NavBtnLink } from './navbarElements'
import { useLocation } from 'react-router';
import { buildConditionalReferrerPath } from '../referrals/referralCreation';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import { FormButton } from '../form/form';
import { logout } from '../../requests/authentication';

const buildLoginPath = (currentUrl) =>
    buildConditionalReferrerPath("/login", currentUrl);

const UsernameDiv = styled.div`
    display: flex;
    align-items: center;
    width: 25vw !important;
    
    justify-content: flex-end;
  
    color: white;
`;

const RightMarginSpan = styled.span`
    margin-right: 1em;
`;

export const Navbar = () => {
    const [cookies, , removeCookie] = useCookies(['username']);
    const currentLocation = useLocation().pathname;

    const onLogout = async () => {
        await logout(cookies['userId']);

        removeCookie('userId');
        removeCookie('username');
    };

    const usernameComponent = (
        <UsernameDiv>
            <RightMarginSpan>
                { cookies['username'] }
            </RightMarginSpan>
            <FormButton onClick={ onLogout }>
                Ausloggen
            </FormButton>
        </UsernameDiv>
    );
    const loginComponent = (
        <NavBtn>
            <NavBtnLink to={ buildLoginPath(currentLocation) }>
                Login
            </NavBtnLink>
        </NavBtn>
    );

    return (
        <Nav>
            <NavTitle to="/">
                <h1>Rubik's Info</h1>
            </NavTitle>
            <Bars />
            <NavMenu>
                <NavLink to="/geschichte">
                    Geschichte
                </NavLink>
                <NavLink to="/arten">
                    Arten
                </NavLink>
                <NavLink to="/loesen">
                    Lösung
                </NavLink>
            </NavMenu>
            { cookies['username'] !== undefined ? usernameComponent : loginComponent }
        </Nav>
    )
};