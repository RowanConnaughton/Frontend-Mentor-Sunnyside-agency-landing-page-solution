import React from 'react';

const InfoSection = ({
  title,
  flexDirection,
  para,
  underlineColor,
  desktopImage,
  mobileImage,
}) => {
  return (
    <section
      className={`flex  lg:flex-row ${flexDirection}  flex-col-reverse `}
    >
      <div
        className="flex flex-col justify-center justify-items-center lg:px-28
       p-10 basis-1/2"
      >
        <h2 className="text-veryDarkDesaturatedBlue  font-Fraunces font-black text-5xl text-center lg:text-left mb-10 ">
          {title}
        </h2>

        <p className="text-darkGrayishBlue font-Barlow text-lg text-center lg:text-left mb-10 ">
          {para}
        </p>
        <button
          className={`lg:self-start self-center font-Fraunces font-bold underline ${underlineColor} decoration-4 hover:decoration-8 hover:underline-offset-0 hover:scale-105 transition ease-in-out cursor-pointer`}
        >
          LEARN MORE
        </button>
      </div>
      <img className="lx:w-full lg:w-1/2" src={desktopImage} alt="" />
    </section>
  );
};

export default InfoSection;
