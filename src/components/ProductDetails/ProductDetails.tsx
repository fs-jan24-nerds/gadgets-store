import { IProduct } from '../../types/interfaces';

type Props = {
  product: IProduct;
};

export const ProductDetail: React.FC<Props> = ({ product }) => {
  const { screen, processor, resolution, ram, camera, zoom, cell, priceRegular, priceDiscount } =
    product;
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <div className="flex mb-4">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`${product.name} ${index + 1}`} className="w-1/5" />
        ))}
      </div>
      <div className="text-lg">
        <p>
          {screen}, {resolution}
        </p>
        <p>Processor: {processor}</p>
        <p>RAM: {ram}</p>
        <p>Camera: {camera}</p>
        <p>Zoom: {zoom}</p>
        <p>Connectivity: {cell.join(', ')}</p>
        <p className="font-bold">
          Price:
          {product.priceDiscount < priceRegular ? (
            <span className="text-red-500">${priceDiscount}</span>
          ) : (
            <span>${priceRegular}</span>
          )}
        </p>
      </div>
      {product.description.map(({ title, text }, index) => (
        <div key={index}>
          <h2 className="text-xl font-semibold">{title}</h2>
          {text.map((paragraph, pIndex) => (
            <p key={pIndex}>{paragraph}</p>
          ))}
        </div>
      ))}
      <div className="my-4">
        <label htmlFor="capacity" className="block mb-2">
          Capacity:
        </label>
        <select name="capacity" id="capacity">
          {product.capacityAvailable.map((capacity, index) => (
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
          {product.colorsAvailable.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
