import { Link, useParams } from 'react-router-dom';
import { RootState, useAppSelector } from '../../store/store';
import { getPhones } from '../../api/api';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPhones } from '../../store/phonesSlice';
import { Item } from '../../types/Product';

export const ProductDetails: React.FC = () => {
  const { phones, isLoaded } = useAppSelector((state: RootState) => state.phones);
  const { id } = useParams();
  const [phone, setPhone] = useState<Item | undefined>();
  const dispatch = useDispatch();
  const [currentImageIdx, setCurrentImageIdx] = useState(0)
  useEffect(() => {
    if (isLoaded) {
      return;
    }
    dispatch(setPhones(getPhones()));
  }, [isLoaded, dispatch]);

  useEffect(() => {
    if (isLoaded) {
      const selectedPhone = phones.find((phone) => phone.id === id);

      setPhone(selectedPhone);
    }
  }, [id, phones]);

  const productStyles =
    'items-center w-20 h-20 p-2 border border-#C4C4C4 cursor-pointer hover:border-primary transition-colors duration-500 ease-out';
  return (
    <>
      {phone && (
        <div className="flex flex-col p-4">
          <h1 className="text-2xl font-bold mb-2">
            {phone?.name}
            {id}
          </h1>
          <div className="flex flex-row w-[570px] h-[464px] mb-[80px]">
            <div className="flex flex-col gap-4 items-center">
              {phone.images.map((image, index) => {
                return (
                  <div className={`${productStyles}`} key={image}>
                    {/* <Link to={`/gadgets-store/${image}`}> */}
                      <img
                        src={`/gadgets-store/${image}`}
                        alt={`${phone.name} ${index + 1}`}
                        className={'max-h-full max-w-full object-contain m-auto'}
                        onMouseOver={() => setCurrentImageIdx(index)}
                      />
                    {/* </Link> */}
                  </div>
                );
              })}
            </div>
            <div className="w-[442px]">
              <img src={`/gadgets-store/${phone?.images[currentImageIdx]}`} className="m-[11px] w-1/2" />
            </div>
          </div>
          <div className="text-lg">
            <p>
              {phone?.screen}, {phone?.resolution}
            </p>
            <p>Processor: {phone?.processor}</p>
            <p>RAM: {phone?.ram}</p>
            <p>Camera: {phone?.camera}</p>
            <p>Zoom: {phone?.zoom}</p>
            <p>Connectivity: {phone?.cell.join(', ')}</p>
            <p className="font-bold">
              Price:
              {phone?.priceDiscount < phone?.priceRegular ? (
                <span className="text-red-500">${phone?.priceDiscount}</span>
              ) : (
                <span>${phone?.priceRegular}</span>
              )}
            </p>
          </div>
          {phone.description?.map(({ title, text }, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold">{title}</h2>
              {text?.map((paragraph, pIndex) => <p key={pIndex}>{paragraph}</p>)}
            </div>
          ))}
          <div className="my-4">
            <label htmlFor="capacity" className="block mb-2">
              Capacity:
            </label>
            <select name="capacity" id="capacity">
              {phone.capacityAvailable.map((capacity, index) => (
                <option key={index} value={capacity}>
                  {capacity}
                </option>
              ))}
            </select>
          </div>
          <div className="my-4">
            <label htmlFor="color" className="block mb-2">
              Color:
            </label>
            <select name="color" id="color">
              {phone.colorsAvailable?.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </>
  );
};
