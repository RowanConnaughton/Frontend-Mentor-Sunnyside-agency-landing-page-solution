import React from 'react';

import { images } from './data';

const Gallery = () => {
  return (
    <div className="flex flex-row flex-wrap ">
      {images.map((img) => (
        <div className="basis-1/2 md:basis-1/4">
          <img className="w-full h-full " src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
