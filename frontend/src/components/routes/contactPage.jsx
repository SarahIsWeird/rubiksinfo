import styled from 'styled-components';
import {WideParagraph} from '../article/paragraph';

const FieldSet = styled.fieldset`
    padding: 1em 0;
    border: 0;
  
    label {
        display: inline-block;
        width: 3em;
    }
`;

const FormInput = styled.input`
    width: 50%;
    vertical-align: top;
    margin-left: 3em;
`;

const FormTextArea = styled.textarea`
    width: 50%;
    vertical-align: top;
    margin-left: 3em;
`;

export const ContactPage = () => (
    <WideParagraph>
        <h2>Kontaktformular</h2>
        <form>
            <FieldSet>
                <label htmlFor="name">Name:</label>
                <FormInput id="name" type="text" name="Name" required/>
            </FieldSet>
            <FieldSet>
                <label htmlFor="email">E-Mail:</label>
                <FormInput id="email" type="email" name="E-Mail" required/>
            </FieldSet>
            <FieldSet>
                <label htmlFor="nachricht">Nachricht:</label>
                <FormTextArea id="nachricht" rows="5" name="Nachricht" required />
            </FieldSet>
            <input type="submit" value="Absenden"/>
        </form>
    </WideParagraph>
);