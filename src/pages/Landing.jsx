import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection/InfoSection';
import { infoData } from '../components/InfoSection/data';
import ImageCard from '../components/ImageCard/ImageCard';
import Testimonial from '../components/Testimonial/Testimonial';
import Gallery from '../components/Gallery/Gallery';

const Landing = () => {
  return (
    <main>
      <HeroSection />
      {infoData.map((info, index) => (
        <InfoSection
          key={index}
          title={info.title}
          para={info.para}
          flexDirection={info.flexDirection}
          underlineColor={info.underlineColor}
          desktopImage={info.desktopImage}
        />
      ))}
      <ImageCard />
      <Testimonial />
      <Gallery />
    </main>
  );
};

export default Landing;
