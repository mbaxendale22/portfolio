import React from 'react';
import { motion } from 'framer-motion'

interface Props {
  content: {
    image: string;
    title: string;
    description: string;
    readme: string;
    site: string;
    tech: string[];
    direction: string
  };
}

const Card: React.FC<Props> = ({
  content: { image, title, description, readme, site, tech, direction }
}) => {
  return (
    <motion.div
    initial={{ opacity: 0, x: direction }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="max-w-sm rounded overflow-hidden shadow-lg font-Montserrat h-[85%] mx-4 md:mx-0 md:h-full">
      <div className="w-full h-1/3">
        <img className="w-full h-full object-cover" src={image}></img>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">{title}</div>
        <p className="text-gray-700 text-sm text-justify">{description}</p>
      </div>
      <div className="px-6 text-sm flex justify-evenly">
        <div className="animate-links">
          <a target="blank" rel="noopener noreferrer" href={readme}>
            README
          </a>
        </div>
        <div className="animate-links">
          <a href={site} target="blank" rel="noopener noreferrer">
            DEPLOYED SITE
          </a>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="text-lg font-bold pb-3">Key Tech</p>
        <ul className="flex text-xs md:text-sm justify-evenly">
          {tech.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default Card;
