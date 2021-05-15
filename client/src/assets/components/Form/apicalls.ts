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
    console.log(data);
  } catch (err) {
    console.log(err.message, 'hello');
  }
};
