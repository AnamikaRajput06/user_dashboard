import React, { useState } from 'react';
import { signup } from '../services/authService';
import Input from './Input';
import Button from './Button';
import { toast, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    setIsLoading(true);
    event.preventDefault();
    try {
      signup({ email, password, firstName, lastName })
        .then((data) => {
          toast.success('Sign up successful! Please login', {
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
          navigate('/login');
        })
        .catch((err) =>
          toast.error('Sign up failed', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
          })
        )
        .finally(() => setIsLoading(false));
      // Handle successful signup, e.g., redirect to sign in page
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">Welcome</h1>
        <p className="text-xs mb-3 text-gray-400">CREATE YOUR ACCOUNT</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col w-1/2">
        <Input
          type="text"
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          type="text"
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
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
          onClick={handleSubmit}
          disabled={isLoading}
          className="my-6 w-full bg-green-900"
        >
          Sign up
        </Button>
        <hr />
        <p className="text-xs py-6 self-end text-gray-500">
          Already have an account?{' '}
          <a className="text-green-900" href="/login">
            Login here
          </a>
        </p>
      </form>
    </>
  );
};

export default SignUp;
