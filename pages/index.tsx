import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import Link from 'next/link';



export default function Home() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center font-Montserrat gap-24'>
    <div>
      <h1 className="text-8xl">Matthew Baxendale</h1>
      <h3 className='text-center'>Junior Full Stack Developer</h3>
    </div>
      <div className='flex justify-evenly w-1/2 border text-xl'>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
}
