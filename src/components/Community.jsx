import React from 'react'

const Community = () => {
  return (
    <div className='w-full py-12'>
        <div className="max-w-6xl mx-auto">
      <h2 className="text-dark-grey text-5xl text-center font-semibold mb-2">Manage your entire community <br />in a single system</h2>
      <p className='text-grey text-center mb-8'>Who is Nexcent suitable for?</p>

      <div className="flex justify-between items-center">
        <div className='w-1/4 text-center p-6 shadow-[0_2px_4px_rgba(171,190,209,0.2)]'>
            <img src="/Icon (1).png" alt="/" className='mx-auto'/>
            <h3 className='text-3xl text-dark-grey font-semibold'>Membership Organisations</h3>
            <p className='text-grey text-sm'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className='w-1/4 text-center p-6 shadow-[0_2px_4px_rgba(171,190,209,0.2)]'>
            <img src="/Icon (3).png" alt="/" className='mx-auto'/>
            <h3 className='text-3xl text-dark-grey font-semibold'>National Associations</h3>
            <p className='text-grey text-sm'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className='w-1/4 text-center p-6 shadow-[0_2px_4px_rgba(171,190,209,0.2)]'>
            <img src="/Icon (2).png" alt="/" className="mx-auto"/>
            <h3 className='text-3xl text-dark-grey font-semibold'>Clubs And <br />Groups</h3>
            <p className='text-grey text-sm'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Community
