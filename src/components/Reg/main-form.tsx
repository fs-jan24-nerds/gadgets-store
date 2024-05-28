import { useState } from 'react';
import SignIn from './sign-in';
import SignUp from './sign-up';

function MainForm() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={`flex pt-[60px] transition-colors ${isSignUp ? '' : ''}`}>
      <div className="container max-w-lg mx-auto p-4">
        {isSignUp ? <SignUp /> : <SignIn />}
        <div className="flex justify-around mt-8">
          <button
            onClick={() => setIsSignUp(false)}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          >
            Sign in
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainForm;
