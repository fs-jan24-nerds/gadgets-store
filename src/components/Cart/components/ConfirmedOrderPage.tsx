import { Link } from 'react-router-dom';
import successIcon from '../img/success.jpg';
import cl from './Cart.module.css'
export const ConfirmedOrderPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-extrabold mb-[10px] text-[25px] text-primary sm:text-[32px]">Order is confirmed!</h1>
      <p className="mb-[20px] text-[20px] text-secondary">Thank you for your purchase!</p>
      <img className={cl.wobble} src={successIcon} alt="successIcon" />
      <Link
        to={'../'}
        className="flex items-center justify-center w-full xl:w-[30%] h-[40px] font-bold text-sm bg-white  border-2 border-green text-green rounded-[10px]"
      >
        Continue shopping
      </Link>
    </div>
  );
};
