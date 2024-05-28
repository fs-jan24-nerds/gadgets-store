import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch('https://nerds-gs-backend.onrender.com/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        setError('Fill all fields' + response.statusText);
        setTimeout(() => setError(''), 3000);
        return;
      }

      const data = await response.json();
      console.log('Registration successful:', data);

      // Збереження токена та інших даних в localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);
      localStorage.setItem('email', data.email);

      // Встановлення користувача в контекст
      setUser({ username: data.username, email: data.email, token: data.token });
      navigate('/');
      toast.success(`Hello, ${user?.username}!`);
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to register');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-surface-2 p-8 shadow-lg rounded-lg">
      <h3 className="text-2xl font-bold mb-6 text-textMain">Sign up</h3>
      {error && (
        <p className="mb-4 border p-2 flex justify-center bg-[#dc2626] text-neutral-50 px-4 py-2 rounded">
          {error}
        </p>
      )}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Full Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-500 rounded bg-surface-1 text-textMain"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-500 rounded bg-surface-1 text-textMain"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-500 rounded bg-surface-1 text-textMain"
        />
      </div>
      <button type="submit" className="w-full bg-accent text-white p-2 rounded">
        Sign up
      </button>
    </form>
  );
};

export default SignUp;
