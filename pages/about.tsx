import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import Link from 'next/link';
import Head from 'next/head';
import { home, code, contact, skills } from '../helpers/propVariables';
import { BsArrowLeft, BsArrowRight, BsChevronDoubleUp } from 'react-icons/bs';

function About() {
  return (
    <>
      <Head>
        <title>About | MB</title>
      </Head>
      <div className="h-screen font-Montserrat z-10 overflow-x-hidden relative">
        <Nav top={home} middle1={code} middle2={skills} bottom={contact} />
        <motion.section
        initial={{opacity: 0, x: -200}}
        animate={{opacity: 1, x: 0}}
        transition={{ duration: 1 }}
          id="pageTop"
          className="h-screen z-30 flex flex-col justify-center items-center snap-start text-center gap-12 text-base sm:text-lg font-bold mx-14 md:mx-0"
        >
          <h2 className="text-3xl">I'm Matthew Baxendale</h2>
          <p>I'm a junior full stack web developer.</p>
          <p>
            I learnt to code at General Assembly's Software Enginner Immersive
            Bootcamp.
          </p>
          <p>
            I learnt to develop in Javascript (React/Node) & Python
            (React/Django) and built full stack{' '}
            <div className="animate-links">
              <Link href="/projects">
                <a>APPLICATIONS</a>
              </Link>
            </div>
          </p>
          <p className="text-2xl pt-12">But what else have I done?</p>
        </motion.section>
        <section className="h-screen w-screen flex justify-center items-center gap-2 p-6">
          <div className="border hidden sm:flex sm:w-1/2 bg-salzburg bg-cover h-full"></div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 }
            }}
            className="flex flex-col items-center justify-center text-center gap-12 h-full w-1/2 sm:w-1/2 text-base md:text-lg"
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
              , Budapest/Vienna.
            </p>
            <p>
              I worked on the study of Complex Systems in philosophy & the life
              sciences.
            </p>
            <p>I spoke at conferences across Europe and in the US.</p>
            <div>Some of my work was published, you can check it out.</div>
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
            <div className=" hidden sm:flex gap-4 transform translate-y-6">
              <BsArrowLeft className="transform scale-150" />
              <p className=" text-xs md:text-sm">
                View from my apartment window in Salzburg where I spent a year
                as a visiting researcher
              </p>
            </div>
          </motion.div>
        </section>
        <section className="h-screen w-screen flex justify-center items-center gap-2 p-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 }
            }}
            className="flex flex-col items-center justify-center text-center gap-12 h-full w-1/2 sm:w-1/2 text-base md:text-lg"
          >
            <h2 className="text-3xl">I SLUNG SOME 'SPRO</h2>
            <p>I worked in an industry I'm passionate about: coffee.</p>
            <p>I began as a barista and moved up to managerial positions.</p>
            <p>
              Eventually I ran my own pop up coffee shop for a while called Kis
              Kávé, which means 'small coffee' in Hungarian.
            </p>
            <div className=" hidden sm:flex gap-4 transform translate-y-6">
              <p className=" text-xs md:text-sm">
                Wall of coffee in my popup coffee shop
              </p>
              <BsArrowRight className="transform scale-150" />
            </div>
          </motion.div>
          <div className="hidden sm:flex sm:w-1/2 bg-coffee bg-cover h-full"></div>
        </section>
        <section className="h-screen w-screen  flex justify-center items-center gap-2 p-6">
          <div className="hidden sm:flex sm:w-1/2 bg-leaf bg-cover h-full"></div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 }
            }}
            className="flex flex-col items-center justify-center text-center gap-12 h-full w-1/2 sm:w-1/2 text-base md:text-lg"
          >
            <h2 className="text-3xl">WHAT ELSE?</h2>
            <p>
              I like to run. I got into it when working on my masters and rely
              on it for mental & physical wellbeing.
            </p>
            <p>
              I have a Rhodesian Ridgeback called Aya who loves to explore
              forests, countryside, and small mountains.
            </p>
            <p>
              I've played video games since I was a kid, I still enjoy it when I
              can find the time.
            </p>
            <div className=" hidden sm:flex gap-4 transform translate-y-6">
              <BsArrowLeft className="transform scale-150" />
              <p className=" text-xs md:text-sm">A rainy day in Loch Lomand</p>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}

export default About;
