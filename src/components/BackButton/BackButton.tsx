import { useNavigate } from 'react-router-dom';

import BackArrow from '../../assets/icons/leftArrow.svg';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('..')}
      className="flex items-center gap-2 font-Mont text-lg font-bold leading-4 tracking-tight text-left text-secondary  mb-4 mt-6 sm:mt-10"
    >
      <img src={BackArrow} alt="vector" />
      <span>Back</span>
    </button>
  );
};
