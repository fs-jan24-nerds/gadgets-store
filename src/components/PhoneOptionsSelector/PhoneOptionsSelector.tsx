import { useState } from 'react';
import likeIcon from '../../assets/icons/LikeIcon.svg';
import disLikeIcon from '../../assets/icons/dislike.svg';
import classNames from 'classnames';
import { PhoneColor } from '../../types/enums';
import { Item } from '../../types/Product';


const phoneMemorySize = [64, 256, 512];
type Props = {
  phone: Item | undefined;
};

export const PhoneOptionsSelector: React.FC<Props> = ({ phone }) => {
  const [selectedSize, setSelectedSize] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const phoneColors = Object.values(PhoneColor);

  const isInCart = false;
  const isLike = false;
 const isDiscountActive = true;
  const colorMenu = (color: number) => {
    const changeColorClasses: string = classNames(
      'flex',
      'justify-center',
      'items-center',
      'w-[30px]',
      'h-[30px]',
      'bg-white',
      'rounded-full',
      'border-[2px] border-icons',
      'hover:scale-110',
      'transition duration-300',
      {
        'border-[2px] border-primary': selectedColor === color,
      },
    );
    return changeColorClasses;
  };

  const sizeMenu = (size: number) => {
    const changeSizeClasses: string = classNames(
      'border border-icons',
      'p-[7px]',
      'text-primary',
      'text-[14px]',
      'transition duration-300',
      'hover:border-primary',
      {
        'bg-primary text-white': selectedSize === size,
      },
    );
    return changeSizeClasses;
  };

  return (
    <article className="w-[100%]">
      <div className="flex justify-between text-xs font-medium leading-4 font-mont text-secondary mb-[8px]">
        <h3>Available colors</h3>
        <span className="text-icons">ID: 802390</span>
      </div>
      <div className="flex mb-[25px] gap-2">
        {phoneColors.map((color, index) => (
          <button key={color} className={colorMenu(index)} onClick={() => setSelectedColor(index)}>
            <span
              className="w-[20px] h-[20px] rounded-full"
              style={{ backgroundColor: color.toLowerCase() }}
            ></span>
          </button>
        ))}
      </div>
      <div className="w-[320px] h-[1px] bg-elements mb-[24px]"></div>
      <h3 className="text-xs font-medium leading-4  font-mont text-secondary mb-[8px]">
        Select capacity
      </h3>
      <div className="font-mont-semiBold flex gap-1 mb-[24px]">
        {phoneMemorySize.map((size, index) => (
          <button className={sizeMenu(index)} key={size} onClick={() => setSelectedSize(index)}>
            {size} GB
          </button>
        ))}
      </div>
      <div className="flex mb-[16px] items-center">
        {isDiscountActive ? (
          <>
            <p className="font-mont-bold mr-2 font-extrabold text-[32px] text-primary">
              ${phone?.priceDiscount}
            </p>
            <p className="font-mont-semiBold line-through  text-[22px] text-secondary">
              ${phone?.priceRegular}
            </p>
          </>
        ) : (
          <p className="font-extrabold text-primary">${phone?.priceRegular}</p>
        )}
      </div>

      <div className="w-[320px] h-[1px] bg-elements mb-[24px]"></div>
      <div className="flex justify-start gap-[8px] mb-[32px]">
        {isInCart ? (
          <button className="w-[263px] h-[40px] font-bold text-sm bg-white border border-1 border-elements text-green">
            Added to cart
          </button>
        ) : (
          <button className="w-[263px] h-[40px] font-bold text-sm bg-primary text-white">
            Add to cart
          </button>
        )}
        {isLike ? (
          <button className="text-sm w-[48px] h-[40px]">
            <img src={likeIcon} alt="like" />
          </button>
        ) : (
          <button className="text-sm w-[48px] h-[40px]">
            <img src={disLikeIcon} alt="dislike" />
          </button>
        )}
      </div>
      <div className="flex gap-[150px] items-start font-mont-semiBold text-[12px] leading-4 ">
        <div className="flex flex-col gap-[6px] text-secondary">
          <p>Screen: </p>
          <p>Resolution:</p>
          <p>Processor: </p>
          <p> RAM:</p>
        </div>
        <div className="flex flex-col gap-[6px] text-primary text-right">
          <p> {phone?.screen}</p>
          <p>{phone?.resolution}</p>
          <p>{phone?.processor}</p>
          <p>{phone?.ram}</p>
        </div>
      </div>
    </article>
  );
};
