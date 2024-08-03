import api from './api';

interface LoginData {
  email: string;
  password: string;
}

interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const login = async (data: LoginData) => {
  const response = await api.post('/login', data);
  return response.data;
};

export const signup = async (data: SignupData) => {
  const response = await api.post('/register', data);
  return response.data;
};

export const fetchUserData = async (id: number) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const fetchUserList = async () => {
  const response = await api.get('/users?per_page=8');
  return response.data;
};
