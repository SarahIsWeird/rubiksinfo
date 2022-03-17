import styled from 'styled-components';

const StyledFooter = styled.footer`
    height: 40px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`;

const FooterLink = styled.a`
    padding: 10px 15px;

    :link, :visited {
        color: ${props => props.theme.linkColor};
        text-decoration: none;
    }
`;

export const Footer = () => (
    <StyledFooter>
        <FooterLink href="/kontakt">Kontakt</FooterLink>
        <FooterLink href="/impressum">Impressum</FooterLink>
    </StyledFooter>
);