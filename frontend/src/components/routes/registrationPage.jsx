import { useState } from 'react';
import { CenteredForm, ErrorParagraph, FormButton, FormField } from '../form/form';
import { useQueryParameters } from '../referrals/hooks/useQueryParameters';
import { buildRedirectComponentFromQueryParameters } from '../referrals/referralProcessing';
import { PasswordInput, UsernameInput } from '../form/input';
import { validatePasswordConfirmation, validateRegistrationPassword, validateUsername } from '../form/validations';
import { register } from '../../requests/authentication';
import { useCookies } from 'react-cookie';

const usernameErrorMessage = (
    <ErrorParagraph>
        Bitte gib einen Nutzernamen ein.
    </ErrorParagraph>
);

const passwordErrorMessage = (
    <ErrorParagraph>
        Dein Passwort muss mindestens 10 Zeichen lang sein.
    </ErrorParagraph>
);

const passwordConfirmationErrorMessage = (
    <ErrorParagraph>
        Die Passw&ouml;rter m&uuml;ssen &uuml;bereinstimmen.
    </ErrorParagraph>
);

const areAllFieldsValid = (fieldValidations) =>
    fieldValidations.usernameValid && fieldValidations.passwordValid && fieldValidations.passwordConfirmationValid;

export const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const [isUsernameValid, setUsernameValid] = useState(true);
    const [isPasswordValid, setPasswordValid] = useState(true);
    const [isPasswordConfirmationValid, setPasswordConfirmationValid] = useState(true);

    const [redirect, setRedirect] = useState(null);

    const [, setCookie,] = useCookies();

    const queryParameters = useQueryParameters();

    const validateFields = () => {
        const usernameValid = validateUsername(username);
        const passwordValid = validateRegistrationPassword(password);
        const passwordConfirmationValid = validatePasswordConfirmation(password, passwordConfirmation);

        return { usernameValid, passwordValid, passwordConfirmationValid };
    };

    const setFieldValidations = ({ usernameValid, passwordValid, passwordConfirmationValid }) => {
        setUsernameValid(usernameValid);
        setPasswordValid(passwordValid);
        setPasswordConfirmationValid(passwordConfirmationValid);
    }

    const redirectUser = () => {
        const redirectComponent = buildRedirectComponentFromQueryParameters(queryParameters);
        setRedirect(() => redirectComponent);
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        const fieldValidations = validateFields();
        setFieldValidations(fieldValidations);

        const allFieldsValid = areAllFieldsValid(fieldValidations);

        if (!allFieldsValid) return;

        await register(username, password)

        setCookie('username', username);

        redirectUser();
    };

    return (
        <CenteredForm onSubmit={ onSubmit }>
            <FormField>
                <h2>Registrierung</h2>
                <p>Um Kommentare schreiben zu k&ouml;nnen, musst du dich einloggen.</p>
                <p>Du hast bereits einen Account? <a href="/login">Hier kannst du dich einloggen.</a></p>
            </FormField>
            <FormField>
                <span>Nutzername</span><br />
                <UsernameInput
                    value={ username }
                    setValue={ setUsername }
                    isValid={ isUsernameValid } />
                { isUsernameValid ? null : usernameErrorMessage }
            </FormField>
            <FormField>
                <span>Passwort</span><br />
                <PasswordInput
                    value={ password }
                    setValue={ setPassword }
                    isValid={ isPasswordValid } />
                { isPasswordValid ? null : passwordErrorMessage }
            </FormField>
            <FormField>
                <span>Passwort wiederholen</span><br />
                <PasswordInput
                    value={ passwordConfirmation }
                    setValue={ setPasswordConfirmation }
                    isValid={ isPasswordValid && isPasswordConfirmationValid } />
                { isPasswordConfirmationValid ? null : passwordConfirmationErrorMessage }
            </FormField>
            <FormField>
                <FormButton type="submit">Registrieren</FormButton>
            </FormField>
            { redirect }
        </CenteredForm>
    );
};