import React from 'react';

import Form from '../../assets/components/Form/Form';

import './Auth.scss';
import logo from '../../assets/images/svg/logo.svg';
import illustration from '../../assets/images/svg/illustration.svg';
import decor_dots from '../../assets/images/svg/decor_dots.svg';
import decor_plus from '../../assets/images/svg/decor_plus.svg';
interface Props {}

const Auth: React.FC<Props> = () => {
  return (
    <div className="Auth">
      <header>
        <img src={logo} alt="logo" />
        <p>Create school account</p>
      </header>
      <main>
        <Form />
        <section className="illustration">
          <img src={illustration} alt="illustration" />
          <img className="decor dots" src={decor_dots} alt="illustration" />
          <img className="decor plus" src={decor_plus} alt="illustration" />
        </section>
      </main>
    </div>
  );
};

export default Auth;
