'use client';
import { useState } from 'react';

type LoginControllerReturn = {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  loading: boolean;
};

export default function LoginController(): LoginControllerReturn {
  const [error, setError] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  function handleSubmit() {
    setLoading(true);
    console.log(email, password);
    setLoading(false);
  }

  return {
    error,
    setError,
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    loading,
  };
}

