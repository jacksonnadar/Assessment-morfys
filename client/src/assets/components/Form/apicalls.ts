import { Values } from './Form';

export const register = async (
  inputValues: Values,
  setMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const response = await fetch('http://localhost:8080/users/register', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputValues),
    });
    const data = await response.json();
    setMessage(data.message);
    localStorage.setItem('jwtToken', data.accessToken);
    const redirectURL = data?.redirectURL;
    window.location.href = redirectURL;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const login = async (
  inputValues: Values,
  setMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const response = await fetch('http://localhost:8080/users/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
      }),
    });
    const data = await response.json();
    setMessage(data.message);
    localStorage.setItem('jwtToken', data.accessToken);
    const redirectURL = data?.redirectURL;
    window.location.href = redirectURL;
    console.log(data);
  } catch (err) {
    console.log(err.message, 'hello');
  }
};
export interface UsersInterface {
  date: string;
  _id: string;
  name: string;
  email: string;
  password: string;
  __v: number;
}

export const getAllUsers = async () => {
  try {
    const accessToken = localStorage.getItem('jwtToken');
    const response = await fetch('http://localhost:8080/users/', {
      headers: new Headers({
        authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });
    const data: UsersInterface = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
