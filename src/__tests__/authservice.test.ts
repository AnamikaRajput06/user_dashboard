import axios from 'axios';
import { login, signup } from '../services/authService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('authService', () => {
  it('should login user successfully', async () => {
    const responseData = {
      token: 'dummyToken',
      user: { id: 1, email: 'test@example.com' },
    };
    mockedAxios.post.mockResolvedValueOnce({ data: responseData });

    const data = await login({
      email: 'test@example.com',
      password: 'password123',
    });
    expect(data).toEqual(responseData);
    expect(mockedAxios.post).toHaveBeenCalledWith('/login', {
      email: 'test@example.com',
      password: 'password123',
    });
  });

  it('should signup user successfully', async () => {
    const responseData = { id: 1, email: 'test@example.com' };
    mockedAxios.post.mockResolvedValueOnce({ data: responseData });

    const data = await signup({
      email: 'test@example.com',
      password: 'password123',
    });
    expect(data).toEqual(responseData);
    expect(mockedAxios.post).toHaveBeenCalledWith('/register', {
      email: 'test@example.com',
      password: 'password123',
    });
  });
});
