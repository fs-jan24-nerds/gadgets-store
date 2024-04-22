import { useNavigate } from 'react-router-dom';
import vectorIcon from './img/Vector.svg';
import { CartTable } from './components/CartTable';
import { useCartProducts } from '../../hooks/useCartProducts';
import { EmptyCartMessage } from './components/EmptyCartMessage';
import { Checkout } from './components/Checkout';
import { Grid } from '../Grid/Grid';
import { GridItem as GI } from '../Grid/GridItem';

const CartPage = () => {
  const navigate = useNavigate();
  const { cart } = useCartProducts();

  return (
    <Grid>
      <GI>
        <button
          onClick={() => navigate('..')}
          className="flex items-center gap-2 font-Mont text-lg font-bold leading-4 tracking-tight text-left text-secondary  mb-4"
        >
          <img src={vectorIcon} alt="vector" />
          <span>Back</span>
        </button>
      </GI>

      <GI>
        <h1 className="font-Mont font-bold leading-14 tracking-tight text-left text-primary sm:text-5xl text-3xl mb-8">
          Cart
        </h1>
      </GI>
      {cart.length === 0 ? (
        <GI>
          <EmptyCartMessage />
        </GI>
      ) : (
        <>
          <GI className="col-span-4 tablet:col-span-12 desktop:col-span-16">
            <CartTable />
          </GI>

          <GI className="col-span-4 tablet:col-span-12 desktop:col-span-8">
            <Checkout />
          </GI>
        </>
      )}
    </Grid>
  );
};

export default CartPage;
