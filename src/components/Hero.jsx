import React from 'react'

const Hero = () => {
  return (
    <div className="bg-silver w-full">
    <div className='flex justify-between items-center max-w-6xl mx-auto py-12 bg-silver'>
        <div>
      <h1 className='text-dark-grey text-6xl font-semibold leading-normal'>Lessons and insights <br /><span className='text-primary-color'> from 8 years</span></h1>
      <p className='text-light-grey mb-7'>Where to grow your business as a photographer: sites or media?</p>
      <button className='bg-primary-color text-white py-2 px-4 rounded-sm'>Register</button>
        </div>
      <img src="src/assets/Illustration.png" alt="/" />
    </div>
    </div>
  )
}

export default Hero
