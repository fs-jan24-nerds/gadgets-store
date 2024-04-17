import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../api/api";
import { CardItem } from "../components/CardItem";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { setProducts } from "../store/productsSlice";

export const PhonesPage = () => {
  const { products, isLoaded } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (isLoaded) return;
    dispatch(setProducts(getProducts()))
  }, [isLoaded, dispatch])

  return (
    <>
     <h1 className="text-lg">Phones Page</h1>
    
     {isLoaded && (
      <div className="grid grid-cols-4 gap-y-1 gap-x-[300px]">
        {products
          .filter((product) => product.category === "phones")
          .map((product) => (
            <CardItem key={product.id} product={product} />
          ))}
      </div>

     )}
    </>
  );
};
