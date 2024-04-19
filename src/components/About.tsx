import { Description } from '../types/Product';

interface Props {
  item: {
    description: Description[];
    screen: string;
    resolution: string;
    processor: string;
    ram: string;
    camera: string;
    zoom: string;
    cell: string[];
  };
}

export const About: React.FC<Props> = ({ item }) => {
  console.log(item);

  return (
    <div className="grid grid-cols-12 w-full">
      <div className="col-span-6">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-xl border-b-2 border-elements">
          About
        </h1>
        <div>
          <h2 className="font-bold text-xl md:text-2xl lg:text-xl mt-6">
            {item.description[0].title}
          </h2>
          <p className="mt-3 font-medium text-secondary">{item.description[0].text}</p>
        </div>
        <div>
          <h2 className="font-bold text-xl md:text-2xl lg:text-xl mt-6">
            {item.description[1].title}
          </h2>
          <p className="mt-3 font-medium text-secondary">{item.description[1].text}</p>
        </div>
        <div>
          <h2 className="font-bold text-xl md:text-2xl lg:text-xl mt-6">
            {item.description[2].title}
          </h2>
          <p className="mt-3 font-medium text-secondary">{item.description[2].text}</p>
        </div>
      </div>
      <div className="col-start-8 col-span-5">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-xl border-b-2 border-elements">
          Tech specs
        </h1>
        <div className="flex justify-between mt-3 ">
          <p className="font-medium text-secondary">Screen</p>
          <p>{item.screen}</p>
        </div>
        <div className="flex justify-between mt-3 ">
          <p className="font-medium text-secondary">Resolution</p>
          <p>{item.resolution}</p>
        </div>
        <div className="flex justify-between mt-3 ">
          <p className="font-medium text-secondary">Processor</p>
          <p>{item.processor}</p>
        </div>
        <div className="flex justify-between mt-3 ">
          <p className="font-medium text-secondary">Ram</p>
          <p>{item.ram}</p>
        </div>
        <div className="flex justify-between mt-3 ">
          <p className="font-medium text-secondary">Camera</p>
          <p>{item.camera}</p>
        </div>
        <div className="flex justify-between mt-3 ">
          <p className="font-medium text-secondary">Zoom</p>
          <p>{item.zoom}</p>
        </div>
        <div className="flex justify-between mt-3 ">
          <p className="font-medium text-secondary">Cell</p>
          <p>{item.cell}</p>
        </div>
      </div>
    </div>
  );
};
