import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    padding: 5px;

    border-width: 1px;
    border-radius: 4px;
    border-color: ${props => props.theme.fontColor};
    border-style: solid;
  
    color: ${props => props.theme.fontColor};
    caret-color: ${props => props.theme.fontColor};
  
    background-color: ${props => props.theme.backgroundColor};
    
    &.error {
        border-color: ${props => props.theme.errorColor};
    }
`;

export const Input = ({ value, setValue, isValid, type, className }) => (
    <StyledInput
        type={ type !== null ? type : 'text' }
        value={ value }
        onChange={ event => setValue(event.target.value) }
        className={ className + (isValid === false ? ' error' : '') } />
);

export const UsernameInput = styled(Input)`
    width: 50%;
`;

export const PasswordInput = (props) => (
    <Input
        type='password'
        { ...props } />
);