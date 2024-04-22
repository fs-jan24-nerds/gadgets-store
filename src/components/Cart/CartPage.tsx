import { useNavigate } from 'react-router-dom';
import vectorIcon from './img/Vector.svg';
import { CartTable } from './components/CartTable';
import { useCartProducts } from '../../hooks/useCartProducts';
import { EmptyCartMessage } from './components/EmptyCartMessage';
import { Checkout } from './components/Checkout';

const CartPage = () => {
  const navigate = useNavigate();
  const { cart } = useCartProducts();

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

      <div className="md:flex justify-between md:gap-4 gap-5 items-start">
        {cart.length === 0 ? (
          <EmptyCartMessage />
        ) : (
          <>
            <CartTable /> <Checkout />
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
