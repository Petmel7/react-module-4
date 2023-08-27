import { useState, useEffect } from "react";

export default function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleEmailChange = event => {
    //     setEmail(event.target.value);
    // }

    // const handlePasswordChange = event => {
    //     setPassword(event.target.value);
    // }

    const handleChange = event => {
        const { name, value } = event.target;

        switch (name) {
            case 'email':
                setEmail(value);
                break;
            
            case 'password':
                setPassword(value);
                break;
            
            default:
                return;
        }
    }

    useEffect(() => {
        window.localStorage.setItem('email', JSON.stringify(email))
    }, [email]);

    useEffect(() => {
        window.localStorage.setItem('password', JSON.stringify(password))
    }, [password]);

    return (
        <form className='' autoComplete="off">
            <label className="">
                <span>Email</span>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={email} />
            </label>

            <label className="">
                <span>Password</span>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={password} />
            </label>

            <button type="submit"></button>

        </form>
    )
}

