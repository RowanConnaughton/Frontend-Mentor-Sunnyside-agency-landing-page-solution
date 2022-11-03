import React from 'react';
import { ReactComponent as ArrowDown } from '../../assets/icon-arrow-down.svg';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:bg-hero-desk bg-hero-mob bg-cover bg-no-repeat bg-center h-[700px] justify-center items-center">
      <h1 className="text-white font-Fraunces md:text-6xl text-5xl text-center font-black  mb-28 tracking-widest">
        WE ARE CREATIVES
      </h1>
      <ArrowDown className=" animate-bounce" />
    </section>
  );
};

export default HeroSection;
