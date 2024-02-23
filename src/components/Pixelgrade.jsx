import React from 'react'

const Pixelgrade = () => {
  return (
    <div className='py-12 w-full'>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className='w-2/2'>
            <img src="src/assets/rafiki.png" alt="/" className='text-5xl' />
        </div>
        <div className='w-3/5'>
            <h2 className='text-5xl font-semibold text-dark-grey mb-4'>The unseen of spending three <br />years at Pixelgrade</h2>
            <p className='text-sm text-grey mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique cum soluta obcaecati eaque, debitis officia magnam possimus nemo, veritatis placeat neque cumque. Error amet nobis corrupti, molestias, minima nulla sit neque odit libero unde, hic consequuntur obcaecati nostrum maxime perspiciatis quasi mollitia aliquid assumenda ab officiis explicabo quaerat itaque nam. Nulla quidem magni, dolores illo nisi aperiam eum similique.</p>
            <button className='bg-primary-color rounded-xl text-white p-3'>Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default Pixelgrade
