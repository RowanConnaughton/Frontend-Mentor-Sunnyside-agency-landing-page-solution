import React from 'react';
import { testimonials } from './data';

const Testimonial = () => {
  return (
    <section className="bg-white md:py-36   py-20">
      <h1 className="font-Fraunces font-bold text-2xl text-center text-darkGrayishBlue mb-20  uppercase tracking-widest">
        Client Testimonials
      </h1>
      <div className="flex flex-col md:flex-row ">
        {testimonials.map((item) => (
          <div className="flex flex-col basis-1/3 justify-center items-center">
            <img
              src={item.image}
              alt=""
              className="rounded-full w-20 h-20 mb-10"
            />
            <p className=" w-3/4 text-center text-veryDarkGrayishBlue font-semibold font-Barlow leading-6 mb-10">
              {item.content}
            </p>

            <h2 className=" text-veryDarkDesaturatedBlue font-black font-Fraunces">
              {item.name}
            </h2>
            <p className=" font-Barlow font-extralight text-darkGrayishBlue text-sm mb-14">
              {item.postition}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
