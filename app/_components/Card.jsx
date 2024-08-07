import Image from 'next/image'


import React from 'react'

const Card = () => {
  return (
    <div className='p-3'>
        <div className='flex gap-3 justify-center'>
            <div>
                <Image src="/red.jpg" width={500} height={250} alt='red_wine' />
            </div>
            <div>
                <Image src="/white.jpeg" width={500} height={250} alt='red_wine' />
            </div>
            <div>
                <Image src="/sparkling.jpg" width={500} height={250} alt='red_wine' />
            </div>
        </div>
   </div>
  )
}

export default Card