import React from 'react'
import { Nav, NavLink, NavTitle, Bars, NavMenu, NavBtn, NavBtnLink } from './navbarElements'

export const Navbar = () => {
    return (
        <>
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
                    <NavBtnLink to="/login">
                        Login
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
};