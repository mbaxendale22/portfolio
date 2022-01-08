import React from 'react';
import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import Link from 'next/link';
import Image from 'next/image';
import { home, code, contact } from '../helpers/propVariables';

function About() {
  return (
    <div className="h-screen font-Montserrat z-10 overflow-x-hidden relative">
      <Nav top={home} middle={code} bottom={contact} />
      <section className="h-screen z-30 flex flex-col justify-center items-center snap-start text-center gap-12 text-base sm:text-lg font-bold mx-14 md:mx-0">
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
            alt="salzburg landscape"
            src="/backgrounds/salzburg.jpg"
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
          <h2 className="text-3xl">I Studied</h2>
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
            src="/backgrounds/coffee-wall.jpg"
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
            alt="flowers"
            src="/backgrounds/flowers.jpg"
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
