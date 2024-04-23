import { CartTable } from './components/CartTable';
import { useCartProducts } from '../../hooks/useCartProducts';
import { EmptyCartMessage } from './components/EmptyCartMessage';
import { Checkout } from './components/Checkout';
import { Grid } from '../Grid/Grid';
import { GridItem as GI } from '../Grid/GridItem';
import { BackButton } from '../BackButton/BackButton';

const CartPage = () => {
  const { cart } = useCartProducts();

  return (
    <div className='max-w-max-width mx-auto box-content px-0 md:px-6 lg:px-8'>
      <Grid>
        <GI>
          <BackButton />
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
            <GI className="col-span-4 tablet:col-span-12 laptop:col-span-8 desktop:col-span-16">
              <CartTable />
            </GI>

            <GI className="col-span-4 tablet:col-span-12 laptop:col-span-4 desktop:col-span-8">
              <Checkout />
            </GI>
          </>
        )}
      </Grid>
    </div>
  );
};

export default CartPage;
