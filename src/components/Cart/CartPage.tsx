import { CartTable } from './components/CartTable';
import { useCartProducts } from '../../hooks/useCartProducts';
import { EmptyCartMessage } from './components/EmptyCartMessage';
import { Checkout } from './components/Checkout';
import { Grid } from '../Grid/Grid';
import { GridItem as GI } from '../Grid/GridItem';

import { useState } from 'react';
import { ConfirmedOrderPage } from './components/ConfirmedOrderPage';

import { BackButton } from '../BackButton/BackButton';
import { motion } from 'framer-motion';
import { generateAnimation } from '../../utils/animations';

const CartPage = () => {
  const { cart } = useCartProducts();
  const [isConfirmed, setIsComfirmed] = useState(false);

  return (
    <div className="max-w-max-width mx-auto box-content px-0 md:px-6 lg:px-8">
      <Grid>
        <GI>
          <BackButton />
        </GI>

        <GI>
          <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.6 }}
            variants={generateAnimation('y', -50)}
            className="font-mont-Bold leading-14 tracking-tight text-left text-primary sm:text-5xl text-3xl mb-8"
          >
            Cart
          </motion.h1>
        </GI>
        {isConfirmed && (
          <GI>
            <ConfirmedOrderPage />
          </GI>
        )}

        {!isConfirmed && cart.length === 0 && (
          <GI>
            <EmptyCartMessage />
          </GI>
        )}

        {!isConfirmed && cart.length !== 0 && (
          <>
            <GI className="col-span-4 tablet:col-span-12 laptop:col-span-8 desktop:col-span-16">
              <CartTable />
            </GI>

            <GI className="col-span-4 tablet:col-span-12 laptop:col-span-4 desktop:col-span-8">
              <Checkout onComfirmed={setIsComfirmed} />
            </GI>
          </>
        )}
      </Grid>
    </div>
  );
};

export default CartPage;
