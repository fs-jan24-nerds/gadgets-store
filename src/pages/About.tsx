import { motion } from 'framer-motion';

import { GridItem } from '../components/Grid/GridItem';

import { Description } from '../types/Product';
import { generateAnimation } from '../utils/animations';
import SkeletonAbout from '../components/ProductDetails/SkeletonAbout';
import SkeletonTechSpex from '../components/ProductDetails/SkeletonTechSpex';
import { useEffect, useState } from 'react';

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
  const { screen, resolution, processor, ram, camera, zoom, cell } = item;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <GridItem className="mb-4 laptop:mb-0 col-start-1 col-end-5 tablet:col-end-13 laptop:col-end-7 desktop:col-end-13">
        <motion.div
          initial="hidden"
          transition={{ delay: 0.7, duration: 0.6 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          variants={generateAnimation('x', -60)}
          className="w-full"
        >
          <h1 className="font-bold text-2xl md:text-3xl text-primary border-b-2 border-elements">
            About
          </h1>
          {item.description.map((desc: Description, index: number) => (
            <div key={index}>
              {!isLoading ? (
                <>
                  <h2 className="font-bold text-xl md:text-2xl mt-6 text-primary">{desc.title}</h2>
                  <p className="mt-3 font-medium text-secondary">{desc.text}</p>
                </>
              ) : (
                <SkeletonAbout />
              )}
            </div>
          ))}
        </motion.div>
      </GridItem>

      <GridItem className="col-start-1 col-end-5 tablet:col-end-13 laptop:col-start-9 laptop:col-end-13 desktop:col-start-17 desktop:col-end-25">
        <motion.div
          initial="hidden"
          transition={{ delay: 0.7, duration: 0.6 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          variants={generateAnimation('x', 60)}
          className="w-full"
        >
          <h1 className="font-bold text-2xl md:text-3xl border-b-2 border-elements text-primary">
            Tech specs
          </h1>
          {!isLoading ? (
            <>
              {Object.entries({
                Screen: screen,
                Resolution: resolution,
                Processor: processor,
                Ram: ram,
                Camera: camera,
                Zoom: zoom,
                Cell: cell.join(', '),
              }).map(([key, value]) => (
                <div key={key} className="flex justify-between mt-3 ">
                  <p className="font-medium text-secondary">{key}</p>
                  <p className="text-primary h-2">{value}</p>
                </div>
              ))}
            </>
          ) : (
            <SkeletonTechSpex />
          )}
        </motion.div>
      </GridItem>
    </>
  );
};
