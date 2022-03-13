import { useState } from 'react';
import { CenteredForm, ErrorParagraph, FormButton, FormField } from '../form/form';
import { useQueryParameters } from '../referrals/hooks/useQueryParameters';
import { buildRedirectComponentFromQueryParameters } from '../referrals/referralProcessing';
import { PasswordInput, UsernameInput } from '../form/input';
import { validateLoginPassword, validateUsername } from '../form/validations';

const usernameErrorMessage = (
    <ErrorParagraph>
        Bitte gib deinen Nutzernamen ein.
    </ErrorParagraph>
);

const passwordErrorMessage = (
    <ErrorParagraph>
        Bitte gib dein Passwort ein.
    </ErrorParagraph>
);

const areAllFieldsValid = (fieldValidations) =>
    fieldValidations.usernameValid && fieldValidations.passwordValid;

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [isUsernameValid, setUsernameValid] = useState(true);
    const [password, setPassword] = useState('');
    const [isPasswordValid, setPasswordValid] = useState(true);

    const [redirect, setRedirect] = useState(null);

    const queryParameters = useQueryParameters();

    const validateFields = () => {
        const usernameValid = validateUsername(username);
        const passwordValid = validateLoginPassword(password);

        return { usernameValid, passwordValid };
    };

    const setFieldValidations = ({ usernameValid, passwordValid }) => {
        setUsernameValid(usernameValid);
        setPasswordValid(passwordValid);
    }

    const redirectUser = () => {
        const redirectComponent = buildRedirectComponentFromQueryParameters(queryParameters);
        setRedirect(() => redirectComponent);
    };

    const onSubmit = () => {
        const fieldValidations = validateFields();
        setFieldValidations(fieldValidations);

        const allFieldsValid = areAllFieldsValid(fieldValidations);

        if (allFieldsValid)
            redirectUser();
    };

    return (
        <CenteredForm>
            <FormField>
                <h2>Login</h2>
                <p>Um Kommentare schreiben zu k&ouml;nnen, musst du dich einloggen.</p>
                <p>Du hast noch keinen Account? <a href="/registrierung">Hier kannst du dich registrieren.</a></p>
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
                <FormButton onClick={ onSubmit }>Einloggen</FormButton>
            </FormField>
            { redirect }
        </CenteredForm>
    );
};