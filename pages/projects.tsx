import React from 'react';
import Card from '../components/Card';
import Nav from '../components/Nav';
import {
  household,
  londonParks,
  home,
  about,
  contact,
  rickMortyVerse,
  mineSweeper
} from '../helpers/propVariables';

const projects = () => {
  return (
    <>
      <div className="h-screen w-screen relative">
        <Nav top={home} middle={about} bottom={contact} />
        <h1 className="text-center font-Montserrat text-3xl pt-12">PROJECTS</h1>
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
      </div>
    </>
  );
};

{
}

export default projects;
