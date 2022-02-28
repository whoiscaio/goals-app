import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

import { LoginSignupPageContainer } from './styles';
import FormGroup from '../components/FormGroup';
import useFormError from '../hooks/useFormError';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Link, useNavigate } from 'react-router-dom';
import { login, reset } from '../store/features/auth/authSlice';

type LoginProps = {
  currentTheme: string;
};

function Login({ currentTheme }: LoginProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isError, isSuccess, isLoading, user, message } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if(isSuccess) {
      navigate('/');
    }

    dispatch(reset());
  }, [isError, isSuccess, isLoading, user, message, navigate, dispatch]);

  const [setNewError, cleanErrors, getErrorsByFieldname, isThereAnyError] =
    useFormError();

  function validateEmail(email: string) {
    if (!email) {
      return setNewError('This field is required', 'email');
    }

    cleanErrors('email');
  }

  function validatePassword(password: string) {
    if (!password) {
      return setNewError('This field is required', 'password');
    }

    cleanErrors('password');
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);

    validateEmail(e.target.value);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);

    validatePassword(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (isThereAnyError() || email.length === 0 || password.length === 0) {
      validateEmail(email);
      validatePassword(password);
    } else {
      const userData = {
        email,
        password,
      };

      dispatch(login(userData));
    }
  }

  const arrowIconColor = currentTheme === 'dark' ? '#f6f8ff' : '#141414';

  const emailErrors = getErrorsByFieldname('email');
  const passwordErrors = getErrorsByFieldname('password');

  return (
    <LoginSignupPageContainer>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
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

        <div className="button-wrapper">
          <span>Doesn't have an account? <Link to="/signup">Signup here</Link></span>
          <button type="submit">
            <ArrowRight size={32} color={arrowIconColor} />
          </button>
        </div>
      </form>
    </LoginSignupPageContainer>
  );
}

export default Login;
