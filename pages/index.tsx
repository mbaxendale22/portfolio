import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center font-Montserrat gap-24 bg-gray-50">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-8xl text-center">Matthew Baxendale</h1>
        <h3 className="text-xl">Junior Full Stack Developer</h3>
      </div>
      <div className="flex justify-evenly w-1/2 text-xl font-bold">
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
}
