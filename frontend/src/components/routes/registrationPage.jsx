import {useState} from 'react';

export const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const onSubmit = () => {
        alert(1);
    };

    return (
        <>
            <div className="full">
                <h2>Login</h2>
            </div>
            <div className="full form-field">
                <span>Nutzername</span><br />
                <input
                    type="text"
                    value={username}
                    onChange={event => setUsername(event.target.value)} />
            </div>
            <div className="full form-field">
                <span>E-Mail</span><br />
                <input
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)} />
            </div>
            <div className="full form-field">
                <span>Password</span><br />
                <input
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)} />
            </div>
            <div className="full form-field">
                <span>Password wiederholen</span><br />
                <input
                    type="password"
                    value={passwordConfirmation}
                    onChange={event => setPasswordConfirmation(event.target.value)} />
            </div>
            <div className="full form-field">
                <button onClick={onSubmit}>Registrieren</button>
            </div>
        </>
    );
};