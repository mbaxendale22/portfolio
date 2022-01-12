import React, { useState } from 'react';
import Card from '../components/Card';
import Nav from '../components/Nav';
import Head from 'next/head';
import {
  household,
  londonParks,
  home,
  about,
  contact,
  skills,
  rickMortyVerse,
  mineSweeper,
  Kave
} from '../helpers/propVariables';

const projects = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent, bool: boolean, id: string) => {
    setToggle(bool);
    const eventDiv = e.target as HTMLDivElement;
    eventDiv.classList.add('add-border');
    const element = document.getElementById(id) as HTMLDivElement;
    element.classList.remove('add-border');
  };

  return (
    <>
     <Head>
       <title>Projects | MB</title>
       <meta name='description' content='full stack javascript and python applications' />
    </Head>
      <div className="h-screen w-screen relative">
        <Nav top={home} middle1={about} middle2={skills} bottom={contact} />
        <h1 className="text-center font-Montserrat text-3xl pt-12">PROJECTS</h1>
        <div className="flex justify-evenly font-Montserrat text-xl">
          <div
            onClick={(e) => handleClick(e, false, 'dev')}
            id="deployed"
            className="cursor-pointer add-border"
          >
            Deployed
          </div>
          <div
            onClick={(e) => handleClick(e, true, 'deployed')}
            id="dev"
            className="cursor-pointer"
          >
            In Development
          </div>
        </div>
        {!toggle ? (
          <>
            <div className="md:hidden h-screen flex justify-center items-center mx-2 ">
              <Card content={household} />
            </div>
            <div className="md:hidden h-screen flex justify-center items-center mx-2">
              <Card content={londonParks} />
            </div>

            <div className=" hidden md:flex md:justify-center md:items-center md:w-screen md:h-[90%]">
              <div className="flex flex-row justify-evenly items-center w-full h-3/4">
                <Card content={household} />
                <Card content={londonParks} />
              </div>
            </div>
            <div className="md:hidden h-screen flex justify-center items-center mx-2 mt-8">
              <Card content={rickMortyVerse} />
            </div>

            <div className="md:hidden h-screen flex justify-center items-center mx-2 mb-4 mt-16">
              <Card content={mineSweeper} />
            </div>
            <div className=" hidden md:h-screen md:w-screen md:flex md:justify-center md:items-center">
              <div className="flex justify-evenly items-center w-full h-3/4">
                <Card content={rickMortyVerse} />
                <Card content={mineSweeper} />
              </div>
            </div>
          </>
        ) : (
          <div className="h-screen flex justify-center items-center mx-2 ">
            <Card content={Kave} />
          </div>
        )}
      </div>
    </>
  );
};

{
}

export default projects;
