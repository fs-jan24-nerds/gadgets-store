import { useNavigate } from 'react-router-dom';
import vectorIcon from './img/Vector.svg';
import phoneIcon from './img/phone.png';

const CartPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate('..')}
        className="flex items-center gap-2  font-Mont text-lg font-bold leading-4 tracking-tight text-left text-secondary  mb-4"
      >
        <img src={vectorIcon} alt="vector" />
        <span>Back</span>
      </button>

      <h1 className="font-Mont font-bold leading-14 tracking-tight text-left text-primary sm:text-5xl text-3xl mb-8">
        Cart
      </h1>
      <div className="md:flex md:gap-4 gap-5 items-start">
        <div className='mb-[32px]'>
          <div className="sm:flex items-center justify-center gap-[24px] p-[24px] border border-gray-300 mb-[16px] ">
            <div className="sm:mb-0 flex gap-[24px] items-center justify-center mb-7">
              <span className="text-secondary text-base">X</span>
              <div className="w-[66px] h-[66px]">
                <img src={phoneIcon} alt="phone" />
              </div>
              <p className="font-Mont text-base font-semibold leading-6 text-primary">
                Apple iPhone 14 Pro 128GB Silver (MQ023)
              </p>
            </div>
            <div className="flex gap-[24px] justify-center">
              <div className="flex items-center gap-2 font-Mont text-base font-semibold text-primary">
                <button className="border border-gray-300 px-3 py-1">-</button>
                <span className="text-base text-primary">0</span>
                <button className="border border-gray-300 px-3 py-1">+</button>
              </div>
              <p className="font-Mont text-2xl font-bold leading-8 text-right text-primary">
                $3200
              </p>
            </div>
          </div>

          <div className="sm:flex items-center justify-center gap-[24px] p-[24px] border border-gray-300 mb-[16px] ">
            <div className="sm:mb-0 flex gap-[24px] items-center justify-center mb-7">
              <span className="text-secondary text-base">X</span>
              <div className="w-[66px] h-[66px]">
                <img src={phoneIcon} alt="phone" />
              </div>
              <p className="font-Mont text-base font-semibold leading-6 text-primary">
                Apple iPhone 14 Pro 128GB Silver (MQ023)
              </p>
            </div>
            <div className="flex gap-[24px] justify-center">
              <div className="flex items-center gap-2 font-Mont text-base font-semibold text-primary">
                <button className="border border-gray-300 px-3 py-1">-</button>
                <span className="text-base text-primary">0</span>
                <button className="border border-gray-300 px-3 py-1">+</button>
              </div>
              <p className="font-Mont text-2xl font-bold leading-8 text-right text-primary">
                $3200
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border border-gray-300 p-[24px]">
          <p className="font-Mont font-extrabold text-3xl leading-10 tracking-tighter text-primary">
            $3200
          </p>
          <p className="font-Mont font-medium text-base leading-6 text-secondary mb-5">
            Total for 3 items
          </p>
          <p className="bg-secondary w-full md:w-[321px] h-1 mb-[24px]"></p>

          <button className="md:w-80 w-full h-12 bg-primary text-white font-Mont font-bold text-base leading-6 text-center">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
