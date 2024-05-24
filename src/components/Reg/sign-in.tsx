import { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = async (event: { preventDefault: () => void }) => {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch('http://localhost:3001/signin', {
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       method: 'POST',
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (response.status === 200) {
  //       const data = await response.json();
  //       localStorage.setItem('user', email);
  //       localStorage.setItem('token', JSON.stringify(data.data));
  //       window.location.href = '/';
  //     } else {
  //       alert(response.statusText);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <form className="bg-white p-8 shadow-lg rounded-lg">
      <h3 className="text-2xl font-bold mb-6">Sign in</h3>
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
