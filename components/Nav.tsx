import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  top: { text: string; path: string };
  middle: { text: string; path: string };
  bottom: { text: string; path: string };
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
        className="absolute w-20 md:w-24 h-1/6 top-1 left-12 cursor-pointer menu"
        onClick={handleNavClick}
      >
        <div className="w-1/2 h-[5px] bg-green-800 mt-2 mb-2 rounded-sm"></div>
        <div className="w-1/2 h-[5px] bg-green-800 mt-2 mb-2 rounded-sm"></div>
        <div className="w-1/2 h-[5px] bg-green-800 mt-2 mb-2 rounded-sm"></div>
      </div>
      <AnimatePresence>
        {toggleNav && (
          <motion.div
            initial={{ opacity: 0, translateX: '-100vw' }}
            animate={{ opacity: 1, translateX: '0px' }}
            exit={{ translateX: '-100vw' }}
            transition={{ duration: 1 }}
            className="absolute navbar bg-white top-24 z-10 left-6 h-3/4 w-24 md:w-24 shadow-xl rounded-xl flex flex-col justify-evenly items-center text-sm font-Montserrat"
          >
            <Link href={top.path}>
              <div className="rounded-lg bg-gray-50 p-2 w-2/3 flex justify-center items-center hover:scale-110 cursor-pointer shadow">
                <p>{top.text}</p>
              </div>
            </Link>
            <Link href={middle.path}>
              <div className="rounded-lg bg-gray-50 p-2 w-2/3 flex justify-center items-center hover:scale-110 cursor-pointer shadow">
                <p>{middle.text}</p>
              </div>
            </Link>
            <Link href={bottom.path}>
              <div className="rounded-lg bg-gray-50 p-2 w-2/3 flex justify-center items-center hover:scale-110 cursor-pointer shadow">
                <p>{bottom.text}</p>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <motion.div
          initial={{ opacity: 0, translateY: '0' }}
          animate={{ opacity: 1, translateY: '10px' }}
          transition={{ duration: 0.5 }}
          className="absolute navbar top-12 left-5 h-1/2 w-12 md:w-14 shadow-lg bg-gradient-to-tr from-green-200 to-green-600 rounded-md flex flex-col justify-evenly items-center text-sm"
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
      )} */}
    </>
  );
};

export default Nav;
