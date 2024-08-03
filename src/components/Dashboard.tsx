import React, { useEffect, useState } from 'react';
import { useAuthStore, User } from '../stores/useAuthStore';
import { fetchUserData, fetchUserList } from '../services/authService';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import the icons you want to use

const Dashboard: React.FC = () => {
  const { isAuthenticated, setUser } = useAuthStore();
  const [userList, setUserList] = useState<User[]>();

  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        try {
          const res = await fetchUserData(3);
          setUser(res.data);
        } catch (error) {
          console.error('Failed to fetch user data', error);
        }
      })();
    }
  }, [isAuthenticated, setUser]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchUserList()
        .then((data) => setUserList(data.data))
        .catch((error) => console.error('Failed to fetch user list', error));
    }
  }, [isAuthenticated]);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-6">User List</h1>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Avatar
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userList?.map((user) => (
              <tr className="bg-white border-b" key={user.id}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  <img
                    src={user.avatar}
                    alt={user.first_name}
                    className="w-8 h-8 rounded-full"
                  />
                </th>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.first_name}</td>
                <td className="px-6 py-4">{user.last_name}</td>
                <td className="px-6 py-4">
                  <div className="flex ">
                    <button className="border border-gray-800 text-gray-800 p-2 rounded hover:bg-gray-800 hover:text-white mr-3">
                      <FaEdit size={15} />
                    </button>
                    <button className="border border-red-400 text-red-400 p-2 rounded hover:bg-red-500 hover:text-white mx-3">
                      <FaTrash size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
