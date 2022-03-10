import {useState} from 'react';

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
                <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
            </div>
            <div className="full form-field">
                <span>Password</span><br />
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
            </div>
            <div className="full form-field">
                <button onClick={onSubmit}>Einloggen</button>
            </div>
        </>
    );
};