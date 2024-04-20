import { useParams } from 'react-router-dom';
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

  useEffect(() => {
    if (isLoaded) {
      return;
    }
    dispatch(setPhones(getPhones()));
  }, [isLoaded, dispatch]);

  useEffect(() => {
    if (isLoaded) {
      const selectedPhone = phones.find((phone) => phone.id === id);

      console.log({ selectedPhone });
      setPhone(selectedPhone);
    }
  }, [id, phones]);
  console.log(phone);

  return (
    <>
      {phone && (
        <div className="flex flex-col items-center p-4">
          <h1 className="text-2xl font-bold mb-2">
            {phone?.name}
            {id}
          </h1>
          <div className="flex mb-4">
            {phone.images.map((image, index) => (
              <img key={index} src={image} alt={`${name} ${index + 1}`} className="w-1/5" />
            ))}
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
