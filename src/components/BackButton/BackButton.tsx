import { useNavigate } from 'react-router-dom';

import { leftArrow } from '../../assets/SVGIcons';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('..')}
      className="flex items-center gap-2 font-Mont text-lg font-bold leading-4 tracking-tight text-left text-textSecondary  mb-4 mt-6 sm:mt-10"
    >
      {leftArrow}
      <span>Back</span>
    </button>
  );
};
