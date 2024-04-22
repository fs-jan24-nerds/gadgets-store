import { Link, useParams } from 'react-router-dom';
import { RootState, useAppSelector } from '../../store/store';
import { getPhones } from '../../api/api';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPhones } from '../../store/phonesSlice';
import { Item } from '../../types/Product';
import { PhoneOptionsSelector } from '../PhoneOptionsSelector/PhoneOptionsSelector';

export const ProductDetails: React.FC = () => {
  const { phones, isLoaded } = useAppSelector((state: RootState) => state.phones);
  const { id } = useParams();

  const [phone, setPhone] = useState<Item | undefined>();

  const dispatch = useDispatch();
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

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
        <div className="mx-auto max-w-screen-xl p-6">
          <div className="mb-6">
            <Link to={-1 as any} className="flex text-secondary">
              <div className="w-4 h-4">
                <img
                  src="/gadgets-store/src/assets/icons/leftArrow.svg"
                  alt="Go back"
                  className="max-w-full"
                />
              </div>
              Back
            </Link>

            <h1 className="font-mont-bold leading-[41px] tracking-tighter text-primary text-left mb-6 md:text-4xl text-[22px]">
              {phone?.name}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:items-start">
            <div className="flex md:flex-row md:w-[570px] md:h-[464px] mb-[80px] flex-col-reverse m-auto">
              <div className="flex md:flex-col gap-2 md:gap-4 items-center">
                {phone.images.map((image, index) => {
                  return (
                    <div className={`${productStyles}`} key={image}>
                      <img
                        src={`/gadgets-store/${image}`}
                        alt={`${phone.name} ${index + 1}`}
                        className={'max-h-full w-auto object-contain m-auto'}
                        onMouseOver={() => setCurrentImageIdx(index)}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="md:w-[442px]">
                <img
                  src={`/gadgets-store/${phone?.images[currentImageIdx]}`}
                  className="p-[11px] max-h-full m-auto"
                />
              </div>
            </div>
            <PhoneOptionsSelector phone={phone} />
          </div>

          {phone.description?.map(({ title, text }, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold">{title}</h2>
              {text?.map((paragraph, pIndex) => <p key={pIndex}>{paragraph}</p>)}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
