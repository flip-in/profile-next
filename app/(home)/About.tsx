'use client';

import Typewriter from 'typewriter-effect';
import React from 'react';
import Card from '../(shared)/Card';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section id='About' className='py-8'>
      {/* INTRO */}
      <div className='sm:flex mx-5 items-center '>
        <div className='basis-1/2'>
          <h1 className='text-4xl py-4'>
            <Typewriter
              options={{
                strings: ["Hi, I'm Will."],
                autoStart: true,
                loop: true,
                cursorClassName: 'text-wh-10',
              }}
            />
          </h1>
          <p className='text-lg pb-2'>
            Software Developer and Manager, <br></br> Engineering and Product
            Development
          </p>
          <p className='text-sm text-wh-500 mb-10 '>
            I build processes for the engineering team to grow and deliver
            high-quality products. I have over three years of experience in a
            technical leadership role, and I have a Full-Stack Web Developer
            certification from Le Wagon and two Javascript certifications from
            ui.dev and Epic React.
          </p>
          {/* TODO: Add a link to contact section */}
          <a href='#Contact' className='underline mb-5 sm:mb-0'>
            Let&apos;s Get in Touch
          </a>
        </div>
        <div className='sm:flex basis-1/2 flex-col gap-2 sm:mx-2'>
          <div>
            <p className='text-md'>Highlights</p>
          </div>
          <div className=' mb-2'>
            <Card
              jobTitle='MANAGER'
              description='Having held technical positions leading product, engineering, and QA, I am knowledgeable on the entire software development lifecycle. I provision teams, define and breakdown requirements, and ensure that the definition of done is met for all features.'
              link='https://www.dropbox.com/s/8z5a22m28e9gj11/William%20Price%20-%20CV-1.pdf?dl=0'
            />
          </div>
          <div className=' mb-2'>
            <Card
              jobTitle='FULL STACK DEVELOPER'
              description='As a full stack developer I have built apps in React, Express, and Ruby on Rails. I have working knowledge of both SQL and no-SQL databases. Recently my interests are in Next.js, Headless CMS, and OpenAI API. '
              link='https://www.dropbox.com/scl/fi/fdcg02uw4m15uocsmtdxm/William-Price-Fullstack-CV.pdf?rlkey=pnffsd08n3iefdhbdyq780jsv&dl=0'
            />
          </div>
        </div>
      </div>

      {/* TECHNOLOGIES */}
    </section>
  );
};

export default About;
