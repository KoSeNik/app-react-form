import React, { useState, FormEvent } from 'react';
import { TextInput } from './TextInput.tsx';
import { IconAt } from './IconAt.tsx';
import { SignupFormData } from './types';

interface SignupProps {
  onSubmit: (data: SignupFormData) => void;
}

export const Signup = ({ onSubmit }:SignupProps) => {
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    nickname: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
			setPasswordError((prev) => !prev);
			return;
		}
    setPasswordError(false);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Имя"
        name="name"
        placeholder="Введите ваше имя"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextInput
        label="Ник"
        name="nickname"
        placeholder="Введите ваш ник"
        value={formData.nickname}
        onChange={handleChange}
        required
        icon={<IconAt/>}
      />
      <TextInput
        label="Почта"
        name="email"
        type="email"
        placeholder="Введите ваш email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <div>
      <label><strong>Пол:</strong></label>
        <TextInput
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
          description="Мужчина"
        />
        <TextInput
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleChange}
          description="Женщина"
        />
      </div>
      <TextInput
        label="Пароль"
        name="password"
        type="password"
        placeholder="Введите ваш пароль"
        value={formData.password}
        onChange={handleChange}
        required
        error={passwordError ? "Пароли не совпадают" : ""}
      />
      <TextInput
        label="Повторить пароль"
        name="confirmPassword"
        type="password"
        placeholder="Подтвердите ваш пароль"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        error={passwordError ? "Пароли не совпадают" : ""}
      />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};