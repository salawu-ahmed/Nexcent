import React from 'react'

const Clients = () => {
  return (
    <div className='w-full py-12'>
        <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl font-semibold text-dark-grey text-center">Our Clients</h2>
    <p className='text-grey text-center mb-8'>We have been working with some Fortune 500+ clients</p>
    <ul className='list-none flex max-w-full justify-between items-center'>
        <li><img src="src/assets/Logo.png" alt="/" /></li>
        <li><img src="src/assets/Logo (1).png" alt="/" /></li>
        <li><img src="src/assets/Logo (2).png" alt="/" /></li>
        <li><img src="src/assets/Logo (3).png" alt="/" /></li>
        <li><img src="src/assets/Logo (4).png" alt="/" /></li>
        <li><img src="src/assets/Logo (5).png" alt="/" /></li>
        <li><img src="src/assets/Logo (6).png" alt="/" /></li>
    </ul>
        </div>
    </div>
  )
}

export default Clients
