import React, { Children, MouseEventHandler, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

function About() {
  const [toggleNav, setToggleNav] = useState(false);

  const handleNavClick = (e: React.MouseEvent) => {
    setToggleNav(!toggleNav);
    const menu = document.querySelector('.menu') as HTMLDivElement;
    const nodes = Array.from(menu.children);
    nodes.forEach((child) => child.classList.toggle('rotate-burger'));
  };

  return (
    <div className="h-screen snap-y snap-proximity font-Montserrat overflow-x-hidden relative">
      <div
        className="absolute w-20 md:w-24 h-1/6 top-1 left-6 cursor-pointer menu"
        onClick={handleNavClick}
      >
        <div className="w-1/2 h-[5px] bg-green-800 mt-2 mb-2 rounded-sm"></div>
        <div className="w-1/2  h-[5px] bg-green-800 mt-2 mb-2 rounded-sm"></div>
        <div className="w-1/2  h-[5px] bg-green-800 mt-2 mb-2 rounded-sm"></div>
      </div>
      {toggleNav && (
        <motion.div
          initial={{ opacity: 0, translateY: '0' }}
          animate={{ opacity: 1, translateY: '10px' }}
          transition={{ duration: 0.5 }}
          className="absolute navbar top-12 left-5 h-1/2 w-12 md:w-14 shadow-lg bg-green-700 rounded-md flex flex-col justify-evenly items-center text-sm"
        >
          <Link href="/">
            <div className="rounded-lg bg-white h-[15%] w-2/3 flex justify-center items-center hover:scale-110 cursor-pointer shadow">
              <img
                className="transform scale-75"
                src="../home-solid.svg"
                alt="link to homepage"
              />
            </div>
          </Link>
          <Link href="/projects">
            <div className="rounded-lg bg-white h-[15%] w-2/3 flex justify-center items-center hover:scale-110 cursor-pointer shadow">
              <img
                className="transform scale-75"
                src="../code-solid.svg"
                alt="link to projects page"
              />
            </div>
          </Link>
          <Link href="/contact">
            <div className="rounded-lg bg-white h-[15%] w-2/3 flex justify-center items-center hover:scale-110 cursor-pointer shadow">
              <img
                className="transform scale-75"
                src="../envelope-open-regular.svg"
                alt="link to contact"
              />
            </div>
          </Link>
        </motion.div>
      )}
      <section className="h-screen flex flex-col justify-center items-center snap-start text-center gap-12 text-base sm:text-lg font-bold mx-14 md:mx-0">
        <h2 className="text-3xl">I'm Matthew Baxendale</h2>
        <p>I'm a junior full stack web developer</p>
        <p>
          I learnt to code General Assembly's Software Enginner Immersive
          Bootcamp
        </p>
        <p>
          I learnt to develop in Javascript & Python and built full stack{' '}
          <div className="animate-links">
            <Link href="/projects">
              <a>PROJECTS</a>
            </Link>
          </div>
        </p>
        <p className="text-2xl pt-12">But what else have I done?</p>
      </section>
      <section className="h-screen w-screen flex justify-center items-center relative snap-start">
        <div className="absolute h-screen w-screen -z-10 opacity-30 overflow-y-hidden">
          <Image
            alt="wall of coffee bags"
            src="/../public/salzburg.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.1 }
          }}
          className="flex flex-col items-center justify-center text-center gap-12 h-full w-4/5 sm:w-3/4 text-base sm:text-lg snap-start"
        >
          <h2 className="text-3xl">I GOT DEGREES</h2>
          <p>
            In 2018 I was awarded a PhD in Philosophy, from{' '}
            <a
              className="animate-links"
              href="https://www.ceu.edu/"
              target="blank"
              rel="noopener noreferrer"
            >
              CEU
            </a>
            , Budapest/Vienna
          </p>
          <p>
            I worked on the study of Complex Systems in philosophy & the life
            sciences
          </p>
          <p>I spoke at conferences across Europe and in the US</p>
          <div>Some of my work was published, you can check it out</div>
          <div className="flex w-3/4">
            <div className="animate-links">
              <a
                href="https://link.springer.com/article/10.1007%2Fs11229-018-1683-1"
                target="blank"
                rel="noopener noreferrer"
              >
                HERE
              </a>
            </div>{' '}
            ||
            <div className="animate-links">
              <a
                href="https://link.springer.com/article/10.1007%2Fs11023-018-9456-7"
                target="blank"
                rel="noopener noreferrer"
              >
                HERE
              </a>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="h-screen w-screen flex justify-center items-center relative">
        <div className="absolute h-screen w-screen -z-10 opacity-30">
          <Image
            alt="wall of coffee bags"
            src="/../public/coffee-wall.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.1 }
          }}
          className="flex flex-col items-center justify-center text-center gap-12 h-full w-3/4 text-base sm:text-lg snap-start"
        >
          <h2 className="text-3xl">I SLUNG SOME 'SPRO</h2>
          <p>I worked in an industry I'm passionate about: coffee</p>
          <p>I began as a barista and moved up to managerial positions</p>
          <p>
            Eventually I ran my own pop up coffee shop for a while called Kis
            Kávé, which means 'small coffee' in Hungarian
          </p>
        </motion.div>
      </section>
      <section className="h-screen w-screen flex justify-center items-center relative">
        <div className="absolute h-screen w-screen -z-10 opacity-30">
          <Image
            alt="wall of coffee bags"
            src="/../public/flowers.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.1 }
          }}
          className="flex flex-col items-center justify-center text-center gap-12 h-full w-3/4 snap-start text-base sm:text-lg "
        >
          <h2 className="text-3xl">WHAT ELSE?</h2>
          <p>
            I like to run. I got into it when working on my masters and rely on
            it for mental & physical wellbeing
          </p>
          <p>
            I have Rhodesian Ridgeback called Aya who loves to explore forests,
            countryside, and (small) mountains.
          </p>
          <p>
            I've played video games since I was a kid, I still enjoy it when I
            can find the time
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
