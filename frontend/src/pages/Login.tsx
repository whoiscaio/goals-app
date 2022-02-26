import { ChangeEvent, FormEvent, useState } from 'react';
import { ArrowRight } from 'lucide-react';

import { LoginSignupPageContainer } from './styles';
import FormGroup from '../components/FormGroup';
import useFormError from '../hooks/useFormError';

type LoginProps = {
  currentTheme: string;
};

function Login({ currentTheme }: LoginProps) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [setNewError, cleanError, getErrorsByFieldname] = useFormError();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log();
  }

  function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);

    if(!e.target.value) {
      setNewError('This field is required', 'username');
    } else {
      cleanError('This field is required', 'username');
    }
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);

    if(!e.target.value) {
      setNewError('This field is required', 'password');
    } else {
      cleanError('This field is required', 'password');
    }
  }

  const arrowIconColor = currentTheme === 'dark' ? '#f6f8ff' : '#141414';

  return (
    <LoginSignupPageContainer>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup error={getErrorsByFieldname('username')}>
          <span>Username</span>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </FormGroup>

        <FormGroup error={getErrorsByFieldname('password')}>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormGroup>

        <div className="button-wrapper">
          <button type="submit">
            <ArrowRight size={32} color={arrowIconColor} />
          </button>
        </div>
      </form>
    </LoginSignupPageContainer>
  );
}

export default Login;
