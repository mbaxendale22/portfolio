import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-blue-500">Matthew Baxendale</h1>
      <h3>Junior Full Stack Developer</h3>
      <div>
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>Projects</a>
        </Link>
        <Link href="/">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
}
