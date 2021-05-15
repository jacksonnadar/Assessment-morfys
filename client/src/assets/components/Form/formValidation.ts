import { Values } from './Form';

export default class FormClass {
  setMessage;
  constructor(setMessage: React.Dispatch<React.SetStateAction<string>>) {
    this.setMessage = setMessage;
  }
  formValidation(inputValues: Values, isRegister: boolean) {
    try {
      if (isRegister) this.validateName(inputValues['name']);
      this.validateEmail(inputValues.email);
      this.validatePasssword(inputValues.password);
      return true;
    } catch (err) {
      console.log(err);
    }
  }

  validateName(name: string) {
    const nameArr = name.split(' ');
    if (nameArr.length !== 2) {
      this.setMessage('Your full name should have first name and last name');
      throw new Error('invalid name');
    }
  }

  validateEmail(email: string) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(String(email).toLowerCase())) {
      this.setMessage('Enter a proper Email id');
      throw new Error('invalid email');
    }
  }

  validatePasssword(pass: string) {
    if (pass.length < 6) {
      this.setMessage('Password must be atleast 6 characters long');
      throw new Error('invalid pass');
    }
  }
}
