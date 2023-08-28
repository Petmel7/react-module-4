import useLocalStorage from '../../src/hooks/useLocalStorage.js';

export default function SignupForm() {
    const [email, setEmail] = useLocalStorage('email', '');
    const [password, setPassword] = useLocalStorage('password', '');

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

            <button type="submit">Sign up</button>

        </form>
    )
}