export interface TextInputProps {
    label?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    checked?: boolean;
    icon?: React.ReactNode;
    description?: string;
    error?: string;
  }
  
  export interface SigninFormData {
    email: string;
    password: string;
  }
  
  export interface SignupFormData {
    name: string;
    nickname: string;
    email: string;
    gender: string;
    password: string;
    confirmPassword: string;
  }
  