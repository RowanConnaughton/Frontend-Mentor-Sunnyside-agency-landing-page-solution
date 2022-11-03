import { imageCardData } from './data';

const ImageCard = () => {
  return (
    <section className="flex flex-row flex-wrap  ">
      {imageCardData.map((data) => (
        <div
          className={`flex flex-col lg:basis-1/2 h-[600px] justify-end items-center px-10 w-full ${data.image} bg-auto bg-center`}
        >
          <h2
            className={` text-center ${data.textColor}  font-Fraunces font-black text-5xl mb-10 `}
          >
            {data.title}
          </h2>

          <p
            className={`text-center ${data.textColor} font-Barlow text-lg mb-10 md:w-3/5 `}
          >
            {data.para}
          </p>
        </div>
      ))}
    </section>
  );
};

export default ImageCard;
