import React from 'react';

interface Props {
  content: {
    image: string;
    title: string;
    description: string;
    readme: string;
    site: string;
    tech: string[];
  };
}

const Card: React.FC<Props> = ({
  content: { image, title, description, readme, site, tech }
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg font-Montserrat">
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
    </div>
  );
};

export default Card;
