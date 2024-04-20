import { useCartProducts } from "../../../hooks/useCartProducts";

export const Checkout = () => {
  const { cart } = useCartProducts();
  const total = cart.reduce((acc, cartItem) => acc + (cartItem.product.price * cartItem.count), 0)
  const totalItems = cart.reduce((acc, cartItem) => acc + cartItem.count, 0)

  return (
  <div className="flex flex-col items-center justify-center border border-gray-300 p-[24px]">
    <p className="font-Mont font-extrabold text-3xl leading-10 tracking-tighter text-primary">
      {`$${total}`}
    </p>

    <p className="font-Mont font-medium text-base leading-6 text-secondary mb-5">
      Total for {totalItems} items
    </p>

    <p className="bg-secondary w-full md:w-[321px] h-1 mb-[24px]"></p>

    <button className="md:w-80 w-full h-12 bg-primary text-white font-Mont font-bold text-base leading-6 text-center">
      Checkout
    </button>
  </div>
  )
}