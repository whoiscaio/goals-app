import { ArrowRight } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { LoginSignupPageContainer } from './styles';

type SignupTypes = {
  currentTheme: string;
};

function Signup({ currentTheme }: SignupTypes) {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const arrowIconColor = currentTheme === 'dark' ? '#f6f8ff' : '#141414';

  function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleConfirmPasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log();
  }

  return (
    <LoginSignupPageContainer>
      <h1>Signup Page</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>

        <label>
          <span>Email</span>
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>

        <label>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        <label>
          <span>Confirm password</span>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </label>

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
