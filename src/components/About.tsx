import { Description } from '../types/Product';
import { motion } from 'framer-motion';
import { generateAnimation } from '../utils/animations';

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
  return (
    <div className="grid grid-cols-12 w-full mt-14 md:mt-16 lg:mt-20">
      <motion.div
        initial="hidden"
        transition={{ delay: 0.7, duration: 0.6 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        variants={generateAnimation('x', -60)}
        className="col-span-12 pdt:col-span-6 mb-10"
      >
        <h1 className="font-bold text-2xl md:text-3xl text-primary lg:text-xl border-b-2 border-elements">
          About
        </h1>
        {item.description.map((desc: Description, index: number) => (
          <div key={index}>
            <h2 className="font-bold text-xl md:text-2xl lg:text-xl mt-6 text-primary">
              {desc.title}
            </h2>
            <p className="mt-3 font-medium text-secondary">{desc.text}</p>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial="hidden"
        transition={{ delay: 0.7, duration: 0.6 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        variants={generateAnimation('x', 60)}
        className="col-span-12 pdt:col-start-8 pdt:col-span-5 mb-10"
      >
        <h1 className="font-bold text-2xl md:text-3xl lg:text-xl border-b-2 border-elements text-primary">
          Tech specs
        </h1>
        <div className="flex justify-between mt-3 ">
          <p className="font-medium text-secondary">Screen</p>
          <p className="text-primary">{item.screen}</p>
        </div>
        <div className="flex justify-between mt-3 ">
          <p className="font-medium text-secondary text-primary">Resolution</p>
          <p className="text-primary">{item.resolution}</p>
        </div>
        <div className="flex justify-between mt-3 ">
          <p className="font-medium text-secondary">Processor</p>
          <p className="text-primary">{item.processor}</p>
        </div>
        <div className="flex justify-between mt-3 ">
          <p className="font-medium text-secondary">Ram</p>
          <p className="text-primary">{item.ram}</p>
        </div>
        <div className="flex justify-between mt-3 ">
          <p className="font-medium text-secondary">Camera</p>
          <p className="text-primary">{item.camera}</p>
        </div>
        <div className="flex justify-between mt-3 ">
          <p className="font-medium text-secondary">Zoom</p>
          <p className="text-primary">{item.zoom}</p>
        </div>
        <div className="flex justify-between mt-3 ">
          <p className="font-medium text-secondary">Cell</p>
          <p className="text-primary">{item.cell}</p>
        </div>
      </motion.div>
    </div>
  );
};
