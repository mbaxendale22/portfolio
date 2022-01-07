import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Props {
  top: { icon: string; path: string };
  middle: { icon: string; path: string };
  bottom: { icon: string; path: string };
}

const Nav: React.FC<Props> = ({ top, middle, bottom }) => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  const handleNavClick = (e: React.MouseEvent) => {
    setToggleNav(!toggleNav);
    const menu = document.querySelector('.menu') as HTMLDivElement;
    const nodes = Array.from(menu.children);
    nodes.forEach((child) => child.classList.toggle('rotate-burger'));
  };

  return (
    <>
      <div
        className="absolute w-20 md:w-24 h-1/6 top-1 left-6 cursor-pointer menu"
        onClick={handleNavClick}
      >
        <div className="w-1/2 h-[5px] bg-green-800 mt-2 mb-2 rounded-sm"></div>
        <div className="w-1/2 h-[5px] bg-green-800 mt-2 mb-2 rounded-sm"></div>
        <div className="w-1/2 h-[5px] bg-green-800 mt-2 mb-2 rounded-sm"></div>
      </div>
      {toggleNav && (
        <motion.div
          initial={{ opacity: 0, translateY: '0' }}
          animate={{ opacity: 1, translateY: '10px' }}
          transition={{ duration: 0.5 }}
          className="absolute navbar top-12 left-5 h-1/2 w-12 md:w-14 shadow-lg bg-green-700 rounded-md flex flex-col justify-evenly items-center text-sm"
        >
          <Link href={top.path}>
            <div className="rounded-lg bg-white h-[11%] w-2/3 flex justify-center items-center hover:scale-110 cursor-pointer shadow">
              <img
                className="transform scale-75"
                src={top.icon}
                alt="link to homepage"
              />
            </div>
          </Link>
          <Link href={middle.path}>
            <div className="rounded-lg bg-white h-[11%] w-2/3 flex justify-center items-center hover:scale-110 cursor-pointer shadow">
              <img
                className="transform scale-75"
                src={middle.icon}
                alt="link to projects page"
              />
            </div>
          </Link>
          <Link href={bottom.path}>
            <div className="rounded-lg bg-white h-[11%] w-2/3 flex justify-center items-center hover:scale-110 cursor-pointer shadow">
              <img
                className="transform scale-75"
                src={bottom.icon}
                alt="link to contact"
              />
            </div>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default Nav;
