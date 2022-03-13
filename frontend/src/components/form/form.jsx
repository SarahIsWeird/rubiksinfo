import styled from 'styled-components';
import { WideParagraph } from '../article/paragraph';

const InnerCenteredFormContainer = styled.div`
    width: max-content;
    margin-left: auto;
    margin-right: auto;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CenteredForm = ({ children }) => (
    <WideParagraph>
        <InnerCenteredFormContainer>
            {children}
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
`;

export const ErrorParagraph = styled.p`
    color: red;
    margin-bottom: 0;
`;