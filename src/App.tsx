import React, { useState } from 'react';
import {Signin} from './Signin.tsx';
import {Signup} from './Signup.tsx';
import './App.css';

const App = () => {
  const [isSignin, setIsSignin] = useState(true);

  const handleSigninSubmit = (data: { email: string; password: string }) => {
    console.log('Данные для входа:', data);
  };

  const handleSignupSubmit = (data: {
    name: string;
    nickname: string;
    email: string;
    gender: string;
    password: string;
    confirmPassword: string;
  }) => {
    console.log('Данные регистрации:', data);
  };

  return (
    <div className="App">
      <h1>{isSignin ? 'Вход' : 'Зарегистрироваться'}</h1>
      {isSignin ? (
        <Signin onSubmit={handleSigninSubmit} />
      ) : (
        <Signup onSubmit={handleSignupSubmit} />
      )}
      <button onClick={() => setIsSignin(!isSignin)}>
        {isSignin ? 'Нужно создать учетную запись?' : 'У вас уже есть аккаунт?'}
      </button>
    </div>
  );
};

export default App;

