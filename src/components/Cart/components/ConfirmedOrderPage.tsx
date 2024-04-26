import { Link } from 'react-router-dom';
import successIcon from '../img/success.gif';

export const ConfirmedOrderPage = () => {
  return (
    <div className="flex flex-col w-full  items-center">
      <h1 className="font-extrabold text-[25px] mb-[20px] text-primary sm:text-[32px]">
        Order is confirmed!
      </h1>
      <p className="mb-[10px] text-[20px] text-secondary">Thank you for your purchase!</p>
      <img className="mb-[30px] w-[300px]" src={successIcon} alt="successIcon" />

      <Link
        to={'../'}
        className="flex items-center justify-center w-full tablet:w-[30%] h-[40px] font-bold text-sm bg-accent  text-white  rounded-[10px]"
      >
        Continue shopping
      </Link>
    </div>
  );
};
