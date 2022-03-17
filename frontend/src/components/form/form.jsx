import styled from 'styled-components';
import { WideParagraph } from '../article/paragraph';

const InnerCenteredFormContainer = styled.form`
    width: max-content;
    margin-left: auto;
    margin-right: auto;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CenteredForm = ({ children, onSubmit }) => (
    <WideParagraph>
        <InnerCenteredFormContainer onSubmit={ onSubmit }>
            { children }
        </InnerCenteredFormContainer>
    </WideParagraph>
);

export const FormField = styled.div`
    width: 100%;
    margin-bottom: 1em;
`;

export const FormButton = styled.button`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background: lightskyblue;
        color: black;
    }
  
    font-size: 1em;
`;

export const ErrorParagraph = styled.p`
    color: ${props => props.theme.errorColor};
    margin-bottom: 0;
`;