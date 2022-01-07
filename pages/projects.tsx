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
        <div className="flex justify-center items-center w-screen h-[90%]">
          <div className="flex justify-evenly w-full h-3/4">
            <Card content={household} />
            <Card content={londonParks} />
          </div>
        </div>
      </div>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="flex justify-evenly w-full h-3/4">
          <Card content={rickMortyVerse} />
          <Card content={mineSweeper} />
        </div>
      </div>
    </>
  );
};

{
}

export default projects;
