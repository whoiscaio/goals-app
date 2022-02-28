import { ArrowRight } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import FormGroup from '../components/FormGroup';
import useFormError from '../hooks/useFormError';
import { LoginSignupPageContainer } from './styles';

type SignupTypes = {
  currentTheme: string;
};

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Signup({ currentTheme }: SignupTypes) {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [setNewError, cleanErrors, getErrorsByFieldname] = useFormError();

  const arrowIconColor = currentTheme === 'dark' ? '#f6f8ff' : '#141414';

  function validateUsername(username: string) {
    if (!username) {
      return setNewError('This field is required', 'username');
    }

    cleanErrors('username');
  }

  function validateEmail(email: string) {
    if (email.length === 0) {
      return setNewError('This field is required', 'email');
    }

    if (!emailRegex.test(email)) {
      return setNewError('Email is not valid', 'email');
    }

    cleanErrors('email');
  }

  function validatePassword(password: string) {
    validateConfirmPassword(password, confirmPassword);

    if (!password) {
      return setNewError('This field is required', 'password');
    }

    if (password.length < 8) {
      return setNewError(
        'The password must contain at least 8 digits',
        'password'
      );
    }

    cleanErrors('password');
  }

  function validateConfirmPassword(
    currentPassword: string,
    confirmPassword: string
  ) {
    if (confirmPassword !== currentPassword) {
      return setNewError('Both password must be equal', 'confirmPassword');
    }

    cleanErrors('confirmPassword');
  }

  function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);

    validateUsername(e.target.value);
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);

    validateEmail(e.target.value);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);

    validatePassword(e.target.value);
  }

  function handleConfirmPasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value);

    validateConfirmPassword(password, e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const condition =
      username &&
      emailRegex.test(email) &&
      password &&
      confirmPassword === password;

    if (!condition) {
      validateUsername(username);
      validateEmail(email);
      validatePassword(password);
      validateConfirmPassword(password, confirmPassword);
    } else {
      console.log('no errors');
    }
  }

  const usernameErrors = getErrorsByFieldname('username');
  const emailErrors = getErrorsByFieldname('email');
  const passwordErrors = getErrorsByFieldname('password');
  const confirmPasswordErrors = getErrorsByFieldname('confirmPassword');

  return (
    <LoginSignupPageContainer>
      <h1>Signup Page</h1>

      <form onSubmit={handleSubmit}>
        <FormGroup error={usernameErrors}>
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={handleUsernameChange}
            className={usernameErrors.length > 0 ? 'error' : undefined}
          />
        </FormGroup>

        <FormGroup error={emailErrors}>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={handleEmailChange}
            className={emailErrors.length > 0 ? 'error' : undefined}
          />
        </FormGroup>

        <FormGroup error={passwordErrors}>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={handlePasswordChange}
            className={passwordErrors.length > 0 ? 'error' : undefined}
          />
        </FormGroup>

        <FormGroup error={confirmPasswordErrors}>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm your password"
            onChange={handleConfirmPasswordChange}
            className={confirmPasswordErrors.length > 0 ? 'error' : undefined}
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

export default Signup;
