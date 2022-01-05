import React from 'react' 
import Link from 'next/link'




function About() {
  return (
    <div className='snap-y snap-mandatory overflow-y-scroll h-screen'>
        <section className='h-screen w-screen flex flex-col justify-center items-center snap-start transition-opacity'>
          <h1>I'm Matthew Baxendale</h1>
          <p>I'm a junior full stack web developer</p>
          <p>I studied Software Engineering at General Assembly's Software Enginner Immersive Bootcamp</p>
          <p>I learnt lots of cool tech there and built full stack PROJECTS, <Link href='/projects'><a>check them out</a></Link></p>
          <p>Right now I'm learning Typescript, Next.js, and Flutter</p>
          <p></p>
          <p></p>
          <p>An Image</p>
        </section>  
        <section className='h-screen w-screen flex justify-center items-center snap-start transition-opacity ease-in-out delay-150'>
          <p>I like coffee, alot...</p>
          <p>I worked in coffee and even ran my own pop up coffee shop for a while called Kis Kave, which means 'little coffee' in Hungarian</p>
          <p>An Image</p>
        </section>  
        <section className='h-screen w-screen flex justify-center items-center snap-start'>
          <p>Some Text</p>
          <p>An Image</p>
        </section>  
    </div>
  )
}

export default About
