import React from 'react';

const Intro = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center mt-20'>
      <div className='lg:w-1/2 lg:pr-8'>
        <h1 className='text-red-600 font-thin'>Etape1 - page 1 </h1>
        <h1 className='font-extrabold text-3xl lg:text-4xl mb-6 border-b-2 border-gray-300 pb-2'>Bienvenue dans la famille Blassi</h1>
        <p className='text-lg text-center lg:text-left mb-6'>Ouvrez les portes de votre garage et rejoignez une famille de passionnés, de pionniers et de collaborateurs dédiés à simplifier la vie urbaine.</p>
      </div>
    </div>
  );
};
 
export default Intro;
