import Image from 'next/image'


import React from 'react'

const Card = () => {
  return (
    <div className='p-3 mx-auto max-w-screen-2xl'>
        <div className='flex gap-4 justify-center'>
            <div>
              <a href="#" className="block">
                    <img
                        alt="red_wine"
                        src="/red.jpg"
                        className="h-64 w-full object-cover sm:h-80 lg:h-96 rounded-md"
                    />

                    <h3 className="mt-4 text-lg font-bold text-gray-400 sm:text-xl">Red Wine.</h3>

                    <p className="mt-2 max-w-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.
                    </p>
                </a>
            </div>
            <div>
                <a href="#" className="block">
                        <img
                            alt="white_wine"
                            src="/white.jpeg"
                            className="h-64 w-full object-cover sm:h-80 lg:h-96 rounded-md"
                        />

                        <h3 className="mt-4 text-lg font-bold text-gray-400 sm:text-xl">White Wine.</h3>

                        <p className="mt-2 max-w-sm text-gray-700">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.
                        </p>
                    </a>
            </div>
            <div>
                 <a href="#" className="block">
                        <img
                            alt="sparkling_wine"
                            src="/sparkling.jpg"
                            className="h-64 w-full object-cover sm:h-80 lg:h-96 rounded-md"
                        />

                        <h3 className="mt-4 text-lg font-bold text-gray-400 sm:text-xl">Sparkling.</h3>

                        <p className="mt-2 max-w-sm text-gray-700">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.
                        </p>
                    </a>
            </div>
        </div>
   </div>
  )
}

export default Card