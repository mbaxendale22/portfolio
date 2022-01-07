import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-10 font-Montserrat bg-gray-50">
      <h1 className="text-2xl">Looks like that page doesn't exist...</h1>
      <p className="text-xl">Try one of these instead:</p>
      <div className="flex justify-evenly sm:w-1/2 w-full text-lg sm:text-xl font-bold">
        <div className="animate-links">
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className="animate-links">
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </div>
        <div className="animate-links">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
