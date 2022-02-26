import { ChangeEvent, FormEvent, useState } from 'react';
import { ArrowRight } from 'lucide-react';

import { LoginSignupPageContainer } from './styles';

type LoginProps = {
  currentTheme: string;
};

function Login({ currentTheme }: LoginProps) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log();
  }

  function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  const arrowIconColor = currentTheme === 'dark' ? '#f6f8ff' : '#141414';

  return (
    <LoginSignupPageContainer>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>

        <label>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
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

export default Login;
