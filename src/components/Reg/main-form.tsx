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
            className="w-full bg-accent ml-8 text-white px-4 py-2 rounded shadow-lg"
          >
            Sign in
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className="w-full bg-accent ml-8 mr-8 text-white px-4 py-2 rounded shadow-lg"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainForm;
