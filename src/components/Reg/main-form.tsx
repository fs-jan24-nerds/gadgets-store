import { useState } from 'react';
import SignIn from './sign-in';
import SignUp from './sign-up';

function MainForm() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div
      className={`min-h-screen flex justify-center items-center transition-colors ${isSignUp ? 'bg-red-600' : 'bg-red-600'}`}
    >
      <div className="container max-w-lg mx-auto p-4">
        <div className="flex justify-around mb-8">
          <button
            onClick={() => setIsSignUp(false)}
            className="bg-white text-gray-700 px-4 py-2 rounded"
          >
            Sign in
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className="bg-white text-gray-700 px-4 py-2 rounded"
          >
            Sign up
          </button>
        </div>
        {isSignUp ? <SignUp /> : <SignIn />}
      </div>
    </div>
  );
}

export default MainForm;
