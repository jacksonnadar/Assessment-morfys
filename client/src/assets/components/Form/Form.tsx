import React, { useState } from 'react';

import './Form.scss';
import eye from '../../images/png/eye.png';
import FormClass from './formValidation';
import { login, register } from './apicalls';
interface Props {}

export interface Values {
  [name: string]: string;
  email: string;
  password: string;
}
const Form: React.FC<Props> = () => {
  const [values, setValues] = useState<Values>({
    name: '',
    email: '',
    password: '',
  });
  const [isPasshid, setIsPasshid] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const [message, setMessage] = useState('');

  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((v) => {
      const values = { ...v };
      values[e.target.name] = e.target.value;
      return values;
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formClass = new FormClass(setMessage);
    if (!formClass.formValidation(values, isRegister)) return;
    if (isRegister) return register(values, setMessage);
    login(values, setMessage);
  };
  return (
    <div className="Form">
      <h1 className="Form__title">Welcome to Globiliti!</h1>
      <p className="Form__subtitle">Create your school account</p>
      <form className="auth-form" onSubmit={submitHandler}>
        <div className="auth-form__container">
          {isRegister && (
            <div className="input-container">
              <label htmlFor="name">What’s your full name?</label>
              <input
                value={values['name']}
                onChange={inputOnChangeHandler}
                name="name"
                type="name"
              />
            </div>
          )}

          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              value={values['email']}
              onChange={inputOnChangeHandler}
              name="email"
              type="text"
            />
          </div>

          <div className="input-container">
            <label htmlFor="password">Password</label>
            <div className="pass">
              <input
                value={values['password']}
                onChange={inputOnChangeHandler}
                name="password"
                type={isPasshid ? 'password' : 'text'}
              />
              <span
                className="hid-icon"
                onClick={() => setIsPasshid(!isPasshid)}
              >
                <img className={!isPasshid ? '' : 'fade'} src={eye} alt="" />
              </span>
            </div>
          </div>

          <p className="message">{message}</p>
        </div>

        <button className="primary-btn">
          {isRegister ? 'CREATE ACCOUNT' : 'LOG IN'}
        </button>
        <h3 className="bottom-text" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'ALREADY REGISTERED? LOG IN' : 'CREATE NEW ACCOUNT'}
        </h3>
      </form>
    </div>
  );
};

export default Form;
