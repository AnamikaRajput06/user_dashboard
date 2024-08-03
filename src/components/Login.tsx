import React, { useState } from 'react';
import { useAuthStore } from '../stores/useAuthStore';
import { login } from '../services/authService';
import Input from './Input';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { toast, Bounce } from 'react-toastify';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUserToken } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    setIsLoading(true);
    event.preventDefault();
    login({ email, password })
      .then((data) => {
        setUserToken(data);
        toast.success('Login successful', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
        navigate('/');
      })
      .catch((err) => {
        toast.error('Login failed', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    // <div className="max-w-md mx-auto mt-10  flex items-center">
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
        <p className="text-xs mb-3 text-gray-400">LOGIN WITH EMAIL</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col w-1/2">
        <Input
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          disabled={isLoading}
          onClick={handleSubmit}
          className="my-6 w-full bg-green-900"
        >
          Login
        </Button>
        <hr />
        <p className="text-xs py-6 self-end text-gray-500">
          Dont have an account?{' '}
          <a className="text-green-900" href="/signup">
            Sign up here
          </a>
        </p>
      </form>
    </>
  );
};

export default Login;
