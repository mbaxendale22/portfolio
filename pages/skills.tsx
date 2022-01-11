import React, { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import { home, code, contact, about } from '../helpers/propVariables';


const skills = () => {


  const [display, setDisplay] = useState<number>(3);

  const handleClick = (e:  React.MouseEvent, num: number) => {
    setDisplay(num);    
    // grab the parent container for the select options, loop through and remove the class 'add border' from whichever currently has it
    const selectContainer = document.querySelector('.select-container') as HTMLDivElement
    const containerArray = Array.from(selectContainer.children)
    const [deSelect] = containerArray.filter(div => div.classList.contains('add-border'))
    deSelect.classList.remove('add-border')

    // add the class 'add-border' to the currently clicked element
    const currentDiv = e.target as HTMLDivElement
    currentDiv.classList.add('add-border')
    

  };
  return (
    <div className="h-screen font-Montserrat z-10 overflow-x-hidden relative">
      <Nav top={home} middle1={code} middle2={about} bottom={contact} />
      <h1 className="text-4xl text-center p-4">Skills</h1>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 h-4/5 px-8">
        <div className="sm:w-1/2 w-full flex flex-col justify-evenly items-center border select-container">
          <div className='add-border cursor-pointer' onClick={(e) => handleClick(e, 1)}>Stack One</div>
          <div className='cursor-pointer' onClick={(e) => handleClick(e, 2)}>Stack Two</div>
          <div className='cursor-pointer' onClick={(e) => handleClick(e, 3)}>Libraries</div>
          <div className='cursor-pointer' onClick={(e) => handleClick(e, 4)}>Current Focus</div>
        </div>

        <div className=" w-full sm:w-1/2 border">
          {display === 1 && (
            <div className="flex flex-col justify-evenly items-center border h-full px-8 w-full">
              <div className="flex text-lg items-center justify-evenly gap-4 sm:gap-0 w-full flex-wrap">
                <p>JavaScript</p>
                <p>MongoDB</p>
                <p>Express</p>
                <p>React</p>
                <p>Node.js</p>
              </div>
              <p className="text-center">
                As JavaScript was the first language I learnt, this is the first
                stack I learnt to develop with, leveraging it to build full CRUD
                applications backed by a RESTful API.
              </p>
              <p className="text-center">
                See London Parks & Kave.io on the{' '}
                <span className="hover:text-green-700">
                  <Link href="/projects">PROJECTS</Link>
                </span>{' '}
                page for examples.
              </p>
            </div>
          )}
          {display === 2 && (
            <div className="flex flex-col justify-evenly items-center border h-full px-8 w-full">
              <div className="flex text-sm sm:text-lg items-center justify-evenly gap-4 sm:gap-0 w-3/4 flex-wrap">
                <p>JavaScript</p>
                <p>Python</p>
                <p>PostgreSQL</p>
                <p>Django</p>
                <p>Django REST Framework</p>
                <p>React</p>
              </div>
              <p className="text-center">
                This stack was my first experience with a 'batteries included'
                framework, as well as building a SQL database; allowing me to
                compare & contrast approaches. I a developed full CRUD
                application in this stack with an API structured by RESTful
                principles
              </p>
              <p className="text-center">
                See Household on the{' '}
                <span className="hover:text-green-700">
                  <Link href="/projects">PROJECTS</Link>
                </span>{' '}
                page for examples.
              </p>
            </div>
          )}
          {display === 3 && (
            <div className="flex flex-col justify-evenly items-center border h-full px-8 w-full">
              <div className='flex flex-col items-center gap-2 w-full'>
              <h3 className='text-lg'>CSS Frameworks</h3>
              <div className="flex text-base items-center justify-evenly gap-4 sm:gap-0 w-3/4 flex-wrap">
                <p>Tailwind CSS</p>
                <p>Sematic UI</p>
                <p>Bulma</p>
              </div>
              </div>
              <div className='flex flex-col items-center gap-2 w-full'>
              <h3 className='text-lg'>Libraries</h3>
              <div className="flex text-base items-center justify-evenly gap-4 sm:gap-0 w-3/4 flex-wrap">
                <p>Axios</p>
                <p>React Query</p>
                <p>Framer Motion</p>
                <p>Mongoose ODM</p>
                <p>Bcrypt</p>
              </div>
              </div>
              <div className='flex flex-col items-center gap-2 w-full'>
              <h3 className='text-lg'>DevOps</h3>
              <div className="flex text-base items-center justify-evenly gap-4 sm:gap-0 w-3/4 flex-wrap">
                <p>Git & GitHub</p>
                <p>Pipenv</p>
                <p>Heroku</p>
                <p>Vercel</p>
                <p>Netlify</p>
              </div>
              </div>
              </div>
          )}
          {display === 4 && (
            <div className="flex flex-col justify-evenly items-center border h-full px-8 w-full">
              <div className="flex text-lg items-center justify-evenly gap-4 sm:gap-0 w-full flex-wrap">
              </div>
              <p className="text-center">
                I'm excited to continue learning new technologies and look
                forward to doing so for my next role. Right now my focus is on
                cementing my existing knowledge & delving into complementary
                technologies. For example, this portfolio was built with Next.js
                and Typescript.
              </p>
              <p className="text-center">
                I've been leveraging my JavaScript & React skills to dip into
                developing on the Blockchain, picking up a small amount of Rust
                along the way & using the Anchor framework.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default skills;
