import {API} from '~/constants';
import getUrl from '~/utils/getUrl';

const login = async (username: string, password: string) => {
  const url = getUrl(API.Login, {
    username,
    password,
  });

  const response = await fetch(url);
  if (response.status === 401) {
    throw new Error('Not authorized')
  }
  const data = await response.json();
  const { token } = data;

  localStorage.setItem('token', token);
};

export default login;
