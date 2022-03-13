import React from 'react'
import { Nav, NavLink, NavTitle, Bars, NavMenu, NavBtn, NavBtnLink } from './navbarElements'
import { useLocation } from 'react-router';

const nonReferringPaths = ['/', '/login', '/registrierung'];

const pathCanBeReferrer = (urlPath) =>
    !nonReferringPaths.includes(urlPath);

const buildConditionalReferrerPath = (destination, currentUrl) => {
    let destinationWithReferrer = destination;

    if (pathCanBeReferrer(currentUrl))
        destinationWithReferrer += "?referrer=" + currentUrl;

    return destinationWithReferrer;
};

const buildLoginPath = (currentUrl) =>
    buildConditionalReferrerPath("/login", currentUrl);

export const Navbar = () => {
    const currentLocation = useLocation().pathname;

    return (
        <Nav>
            <NavTitle to="/">
                <h1>Rubik's Info</h1>
            </NavTitle>
            <Bars />
            <NavMenu>
                <NavLink to="/geschichte" activeStyle>
                    Geschichte
                </NavLink>
                <NavLink to="/arten" activeStyle>
                    Arten
                </NavLink>
                <NavLink to="/loesen" activeStyle>
                    Lösung
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to={buildLoginPath(currentLocation)}>
                    Login
                </NavBtnLink>
            </NavBtn>
        </Nav>
    )
};