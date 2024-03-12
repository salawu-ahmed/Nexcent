import React from 'react'

const Pana = () => {
  return (
    <div className='w-full py-12'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <div className='w-2/5'>
            <img src="/pana.png" alt="/" />
        </div>
        <div className='w-3/5'>
            <h1 className='text-dark-grey font-semibold text-[40px]'>How to design your site footer like we did</h1>
            <p className='text-sm text-grey mb-8'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <button className='py-2 px-4 rounded-sm bg-primary-color text-white'>Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default Pana
