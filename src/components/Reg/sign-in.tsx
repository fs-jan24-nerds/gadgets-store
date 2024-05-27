import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5005/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        setError('Failed to login: ' + response.statusText);
        return;
      }

      const data = await response.json();
      console.log('Login successful:', data);
      localStorage.setItem('token', data.token); // Зберігаємо токен в локальному сховищі
      setUser(data);
      navigate('/');
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to login');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
      <h3 className="text-2xl font-bold mb-6">Sign in</h3>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Sign in
      </button>
    </form>
  );
}

export default SignIn;
