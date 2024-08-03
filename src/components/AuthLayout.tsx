import React from 'react';
import Illustration from './../assets/images/loginImage.svg';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    // <div className="max-w-md mx-auto mt-10  flex items-center">
    <div className="flex items-center mx-auto grid grid-cols-2 ">
      <div className="m-10 flex flex-col items-center">
        <Outlet />
      </div>
      <div
        style={{
          backgroundImage: `url(${Illustration})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
        }}
      ></div>
    </div>
  );
};

export default AuthLayout;
