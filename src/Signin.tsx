import React, { useState } from 'react';
import {TextInput} from './TextInput.tsx';
import { SigninFormData } from './types';

interface SigninProps {
  onSubmit: (data: SigninFormData) => void;
}

export const Signin = ({ onSubmit }: SigninProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Почта"
        type="email"
        placeholder="Введите ваш email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextInput
        label="Пароль"
        type="password"
        placeholder="Введите ваш пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Войти</button>
    </form>
  );
};
