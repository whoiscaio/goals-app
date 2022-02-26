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

  const [setNewError, cleanErrors, getErrorsByFieldname, isThereAnyError] =
    useFormError();

  function validateUsername(username: string) {
    if (!username) {
      return setNewError('This field is required', 'username');
    }

    cleanErrors('username');
  }

  function validatePassword(password: string) {
    if (!password) {
      return setNewError('This field is required', 'password');
    }

    cleanErrors('password');
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (isThereAnyError() || username.length === 0 || password.length === 0) {
      validateUsername(username);
      validatePassword(password);
    } else {
      console.log('no error');
    }
  }

  function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);

    validateUsername(e.target.value);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);

    validatePassword(e.target.value);
  }

  const arrowIconColor = currentTheme === 'dark' ? '#f6f8ff' : '#141414';

  const usernameErrors = getErrorsByFieldname('username');
  const passwordErrors = getErrorsByFieldname('password');

  return (
    <LoginSignupPageContainer>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup error={usernameErrors}>
          <span>Username</span>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className={usernameErrors.length > 0 ? 'error' : undefined}
          />
        </FormGroup>

        <FormGroup error={passwordErrors}>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={passwordErrors.length > 0 ? 'error' : undefined}
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
