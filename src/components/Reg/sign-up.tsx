import { useState } from 'react';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Male');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = async (event: { preventDefault: () => void }) => {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch('http://localhost:3001/signup', {
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       method: 'POST',
  //       body: JSON.stringify({ firstName, lastName, email, gender, birth, phone, password }),
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
      <h3 className="text-2xl font-bold mb-6">Sign up</h3>
      <div className="mb-4">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="mb-4">
        <input
          type="date"
          placeholder="Дата народження"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Sign up
      </button>
    </form>
  );
}

export default SignUp;
