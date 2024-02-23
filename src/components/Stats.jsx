import React from 'react'

const Stats = () => {
  return (
    <div className='w-full bg-silver py-12'>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className='w-3/6'>
            <h2 className='text-dark-grey text-5xl font-semibold mb-2'>Helping a local <br /> <span className="text-primary-color">business reinvent itself</span></h2>
            <p className='text-grey'>We reached here with our hard work and dedication</p>
        </div>

        <div className="grid grid-cols-2 gap-12 w-2/5">
            <div className='flex items-center gap-4'>
                <div>
                <img src="src/assets/Vector.png" alt="" />
                </div>
                <p className='text-3xl leading-6 text-dark-grey'>2,345,453 <br /><span className='text-grey text-sm'>Members</span></p>
            </div>

            <div className='flex items-center gap-4'>
                <div>
                <img src="src/assets/Icon (4).png" alt="" />
                </div>
                <p className='text-3xl leading-6 text-dark-grey'>46,326 <br /><span className='text-grey text-sm'>Clubs</span></p>
            </div>

            <div className='flex items-center gap-4'>
                <div>
                <img src="src/assets/Vector (2).png" alt="" />
                </div>
                <p className='text-3xl leading-6 text-dark-grey'>828,867 <br /><span className='text-grey text-sm'>Event Bookings</span></p>
            </div>

            <div className='flex items-center gap-4'>
                <div>
                <img src="src/assets/Vector (1).png" alt="" />
                </div>
                <p className='text-3xl leading-6 text-dark-grey'>1,926,436<br /><span className='text-grey text-sm'>Payments</span></p>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Stats
