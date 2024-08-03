import React, { useState, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/useAuthStore';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { logout, user } = useAuthStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav className="bg-green-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://webreinvent.com/images/logo-webreinvent.svg" // Update with the path to your company logo
              alt="Company Logo"
              className="w-auto h-8 mr-12"
            />
            <Link to="/" className="text-gray-200 font-bold">
              Dashboard
            </Link>
          </div>
          <div className="relative">
            <img
              src={user?.avatar} // Placeholder avatar
              alt="User Avatar"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={handleToggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <button
                  onClick={logout}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <main className="container mx-auto mt-4">
        {children}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
