import {SyntheticEvent, ChangeEvent, useState} from 'react';
import {useHistory} from 'react-router-dom';

import {Routes} from '~/constants';
import login from '~/services/login';
import ErrorBlock from '~/components/ErrorBlock';

import './login-style.scss';

const Login = () => {
  const {push} = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) {
      setErrorMessage(null);
    }
    if (event.target.name === 'username') {
      setUsername(event.target.value)
    } else if (event.target.name === 'password') {
      setPassword(event.target.value)
    }
  }

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username) {
      setErrorMessage('Username field is required');
      return;
    } else if (!password) {
      setErrorMessage('Password field is required');
      return;
    }
    setErrorMessage(null);
    setIsLoading(true);
    try {
      await login(username, password);
      push(Routes.PasswordHealth);
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="text-center">
          Password Health
        </h1>
        <input
          value={username}
          onChange={onInputChange}
          name="username"
          placeholder="Username"
          type="text"
          className="input mt-52px"
          disabled={isLoading}
        />
        <input
          value={password}
          onChange={onInputChange}
          name="password"
          placeholder="Password"
          type="password"
          className="input mt-24px"
          disabled={isLoading}
        />
        <ErrorBlock error={errorMessage}/>
        <button type="submit" className="button mt-24px" disabled={isLoading}>
          {isLoading ? 'Loading' : 'Login'}
        </button>
      </form>
    </div>
  )
};

export default Login;
