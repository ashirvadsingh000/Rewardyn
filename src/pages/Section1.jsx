import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';

const Section1 = () => {
  const items = [
    <div className="w-full h-96  text-white text-5xl flex items-center justify-center rounded-lg border border-black ">
      <img
        className='rounded-lg size-full'
        src="https://images.pexels.com/photos/3324427/pexels-photo-3324427.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Image 1" // added descriptive alt text
      />
    </div>,
    <div className="w-full h-96  border rounded-lg border-black text-white text-5xl flex items-center justify-center">
      <img
        className=' size-full rounded-lg'
        src="https://images.pexels.com/photos/9973170/pexels-photo-9973170.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Image 2" // added descriptive alt text
      />
    </div>,
    <div className="w-full h-96  border rounded-lg border-black text-white text-5xl flex items-center justify-center">
      <img
        className=' size-full rounded-lg'
        src="https://images.pexels.com/photos/988952/pexels-photo-988952.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Image 3" // added descriptive alt text
      />
    </div>,
    <div className="w-full h-96  border rounded-lg border-black text-white text-5xl flex items-center justify-center">
      <img
        className=' size-full rounded-lg'
        src="https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Image 4" // added descriptive alt text
      />
    </div>,
    <div className="w-full h-96  border rounded-lg border-black text-white text-5xl flex items-center justify-center">
      <img
        className=' size-full rounded-lg'
        src="https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Image 5" // added descriptive alt text
      />
    </div>,
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <div className="container  mx-auto lg:pt-24 pt-20 ">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls={false}
        disableButtonsControls={true}
        dotsDisabled={false}
        autoPlay
        autoPlayInterval={3000} // autoplay interval in milliseconds
        infinite={true} // fixed infinite prop
        renderDotsItem={(e) => (
          <div
            className={`w-4 h-4 rounded-full mx-1 cursor-pointer ${
              e.isActive ? 'bg-blue-800' : 'bg-gray-200'
            }`}
          />
        )}
      />
    </div>
  );
};

export default Section1;