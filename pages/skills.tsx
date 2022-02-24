import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/Nav';
import { AnimatePresence, motion } from 'framer-motion';
import { home, code, contact, about } from '../helpers/propVariables';

const skillsVariants = {
  hidden: {
    opacity: 0,
    x: '+100vw',
    y: 0
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0
  },
  exit: {
    x: 0,
    y: '-100vh'
  }
};
const skills = () => {
  const [display, setDisplay] = useState<number>(1);

  const handleClick = (e: React.MouseEvent, num: number) => {
    setDisplay(num);
    // grab the parent container for the select options, loop through and remove the class 'add border' from whichever currently has it
    const selectContainer = document.querySelector(
      '.select-container'
    ) as HTMLDivElement;
    const containerArray = Array.from(selectContainer.children);
    const [deSelect] = containerArray.filter((div) =>
      div.classList.contains('add-border')
    );
    deSelect.classList.remove('add-border');

    // add the class 'add-border' to the currently clicked element
    const currentDiv = e.target as HTMLDivElement;

    currentDiv.classList.add('add-border');
  };

  return (
    <>
      <Head>
        <title>Skills | MB</title>
      </Head>
      <div className="h-screen font-Montserrat z-10 overflow-x-hidden relative">
        <Nav top={home} middle1={code} middle2={about} bottom={contact} />
        <h1 className="text-4xl text-center p-4">Skills</h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 h-4/5">
          <div className="sm:w-1/2 w-full flex flex-col gap-6 sm:gap-0 justify-evenly items-center select-container">
            <div
              className="add-border cursor-pointer"
              onClick={(e) => handleClick(e, 1)}
            >
              Stack One
            </div>
            <div className="cursor-pointer" onClick={(e) => handleClick(e, 2)}>
              Stack Two
            </div>
            <div className="cursor-pointer" onClick={(e) => handleClick(e, 3)}>
              Libraries
            </div>
            <div className="cursor-pointer" onClick={(e) => handleClick(e, 4)}>
              Current Focus
            </div>
          </div>

          <AnimatePresence>
            <div className=" w-full h-4/5 sm:h-auto sm:w-1/2">
              {display === 1 && (
                <motion.div
                  variants={skillsVariants}
                  initial={'hidden'}
                  animate={'enter'}
                  exit={'exit'}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col justify-evenly items-center h-full px-4 sm:px-8 w-full"
                >
                  <div className="flex text-lg items-center justify-evenly gap-4 sm:gap-0 w-full flex-wrap">
                    <p>JavaScript</p>
                    <p>MongoDB</p>
                    <p>Express</p>
                    <p>React</p>
                    <p>Node.js</p>
                  </div>
                  <p className="text-center">
                    As JavaScript was the first language I learnt, this is the
                    first stack I learnt to develop with, leveraging it to build
                    full CRUD applications backed by a RESTful API.
                  </p>
                  <p className="text-center">
                    See London Parks & Kave.io on the{' '}
                    <span className="hover:text-green-700">
                      <Link href="/projects">PROJECTS</Link>
                    </span>{' '}
                    page for examples.
                  </p>
                </motion.div>
              )}

              {display === 2 && (
                <motion.div
                  variants={skillsVariants}
                  initial={'hidden'}
                  animate={'enter'}
                  exit={'exit'}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col justify-evenly items-center h-full px-2 sm:px-8 w-full"
                >
                  <div className="flex text-sm sm:text-lg items-center justify-evenly gap-4 sm:gap-0 w-3/4 flex-wrap">
                    <p>JavaScript</p>
                    <p>Python</p>
                    <p>PostgreSQL</p>
                    <p>Django</p>
                    <p>Django REST Framework</p>
                    <p>React</p>
                  </div>
                  <p className="text-center text-sm sm:text-base">
                    This stack was my first experience with a 'batteries
                    included' framework, as well as building a SQL database;
                    allowing me to compare & contrast approaches. I a developed
                    full CRUD application in this stack with an API structured
                    by RESTful principles
                  </p>
                  <p className="text-center">
                    See Household on the{' '}
                    <span className="hover:text-green-700">
                      <Link href="/projects">PROJECTS</Link>
                    </span>{' '}
                    page for examples.
                  </p>
                </motion.div>
              )}

              {display === 3 && (
                <motion.div
                  variants={skillsVariants}
                  initial={'hidden'}
                  animate={'enter'}
                  exit={'exit'}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col justify-evenly items-center h-full sm:px-8 w-full"
                >
                  <div className="flex flex-col items-center gap-2 w-full">
                    <h3 className="text-lg">CSS Frameworks</h3>
                    <div className="flex text-base items-center justify-evenly gap-4 sm:gap-0 w-3/4 flex-wrap">
                      <p>Tailwind CSS</p>
                      <p>Sematic UI</p>
                      <p>Bulma</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <h3 className="text-lg">Libraries</h3>
                    <div className="flex text-base items-center justify-evenly gap-4 sm:gap-0 w-3/4 flex-wrap">
                      <p>Axios</p>
                      <p>React Query</p>
                      <p>Framer Motion</p>
                      <p>Mongoose ODM</p>
                      <p>Bcrypt</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <h3 className="text-lg">DevOps</h3>
                    <div className="flex text-base items-center justify-evenly gap-4 sm:gap-0 w-3/4 flex-wrap">
                      <p>Git & GitHub</p>
                      <p>Pipenv</p>
                      <p>Heroku</p>
                      <p>Vercel</p>
                      <p>Netlify</p>
                    </div>
                  </div>
                </motion.div>
              )}
              {display === 4 && (
                <motion.div
                  variants={skillsVariants}
                  initial={'hidden'}
                  animate={'enter'}
                  exit={'exit'}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col justify-evenly items-center h-full px-8 w-full"
                >
                  <div className="flex text-lg items-center justify-evenly gap-4 sm:gap-0 w-full flex-wrap"></div>
                  <p className="text-center">
                    I'm excited to continue learning new technologies and look
                    forward to doing so for my next role. Right now my focus is
                    on cementing my existing knowledge & delving into
                    complementary technologies. For example, this portfolio was
                    built with NEXT.JS and TYPESCRIPT.
                  </p>
                  <p className="text-center">
                    I've been leveraging my JavaScript & React skills to dip
                    into developing on the Blockchain, picking up a small amount
                    of Rust along the way & using the Anchor framework. See The
                    Rick and Mortyverse on the{' '}
                    <span className="hover:text-green-700">
                      <Link href="/projects">PROJECTS</Link>
                    </span>{' '}
                    page for an example.
                  </p>
                </motion.div>
              )}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default skills;
