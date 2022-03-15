import { useState } from 'react';
import { CenteredForm, ErrorParagraph, FormButton, FormField } from '../form/form';
import { useQueryParameters } from '../referrals/hooks/useQueryParameters';
import { buildRedirectComponentFromQueryParameters } from '../referrals/referralProcessing';
import { PasswordInput, UsernameInput } from '../form/input';
import { validateLoginPassword, validateUsername } from '../form/validations';
import { login } from '../../requests/authentication';
import { useCookies } from 'react-cookie';

const usernameErrorMessage = (
    <ErrorParagraph>
        Bitte gib deinen Nutzernamen ein.
    </ErrorParagraph>
);

const usernameUnknownErrorMessage = (
    <ErrorParagraph>
        Dieser Nutzer ist nicht bekannt.
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
    const [isUsernameKnown, setUsernameKnown] = useState(true);
    const [password, setPassword] = useState('');
    const [isPasswordValid, setPasswordValid] = useState(true);

    const [redirect, setRedirect] = useState(null);

    const [, setCookie, ] = useCookies();

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

    const onSubmit = async (event) => {
        event.preventDefault();

        const fieldValidations = validateFields();
        setFieldValidations(fieldValidations);

        const allFieldsValid = areAllFieldsValid(fieldValidations);

        if (!allFieldsValid) return;

        const userId = await login(username, password);

        if (userId === null) {
            setUsernameKnown(false);
            return;
        }

        setCookie('userId', userId);
        setCookie('username', username);

        redirectUser();
    };

    return (
        <CenteredForm onSubmit={ onSubmit }>
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
                    isValid={ isUsernameValid && isUsernameKnown } />
                { isUsernameValid ? null : usernameErrorMessage }
                { isUsernameKnown ? null : usernameUnknownErrorMessage }
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
                <FormButton type="submit">Einloggen</FormButton>
            </FormField>
            { redirect }
        </CenteredForm>
    );
};