"use client"
import React from 'react'
import { BiPhone } from 'react-icons/bi';
import ReservationForm from './ReservationForm';
import { DialogBox } from '@/components/DialogBox';

const Two_UI_Component_Fifteen = () => {
  function handelCodeCopy() {
    const copyToCode = `
        Image Source Link: 
        ------------------
        https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

       
Render Components
-----------------

import React from 'react'
import { BiPhone } from 'react-icons/bi';
import ReservationForm from './ReservationForm';

const Two_UI_Component_Fifteen = () => {
  return (
    <div>
      <div className="pt-[5rem] bg-center bg-cover relative mt-[2rem] pb-[5rem] mb-[3rem] bg-[url('/bg-black.jpg')]">
        {/* Overlay */}
        <div className='absolute w-full h-full bg-[#000000a6] top-0 left-0 right-0 bottom-0' />
        <div className='w-[80%] relative z-[20] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]'>
          {/* Text Content */}
          <div>
            <h1 className='text-[30px] md:text-[40px] lg:text-[40px] text-white font-bold leading-[3rem] md:leading-[4rem]'>
              DO YOU HAVE ANY DINNER PLAN TODAY? RESERVE YOUR TABLE
            </h1>
            <p className='text-[17px] mt-[1rem] text-white text-opacity-50'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis illum veniam sed hic minus. Nam at qui eos nihil ipsum. Consequatur porro eligendi fuga aliquid.
            </p>
            <div className='flex mt-[2rem] items-center space-x-4'>
              <div className='w-[3rem] h-[3rem] bg-red-500 rounded-full flex justify-center items-center flex-col'>
                <BiPhone className='w-[1.7rem] h-[1.7rem] text-white' />
              </div>
              <div>
                <h1 className='text-[25px] text-white font-semibold'>Quick order 24/7</h1>
                <h1 className='text-yellow-300 text-[30px] font-bold'>+0123 456 789</h1>
              </div>
            </div>
          </div>
          {/* Reservation Form */}
          <ReservationForm />
        </div>
      </div>
    </div>
  )
}

export default Two_UI_Component_Fifteen









import React from 'react';
import { GrRestaurant } from 'react-icons/gr';

const ReservationForm = () => {
    return <div className='bg-green-700 p-6 rounded-lg'>
        <GrRestaurant className='w-[5rem] h-[5rem] text-white mt-[2rem] mx-auto' />
        <h1 className='text-center font-bold uppercase text-[30px] md:text-[40px] lg:text-[40px] mt-[0.5rem] text-white'>Reservation</h1>
        <p className='uppercase text-[20px] md:text-[25px] text-white font-semibold text-center'>
            Book your table
        </p>
        {/* input section */}
        <div className='mt-[2rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 lg:gap-2'>
                <div>
                    <input type="text" className='w-full rounded-lg p-2 outline-none font-medium' placeholder='Enter First Name'/>
                </div>
                <div className='mt-[0.5rem] md:mt-0'>
                    <input type="text" className='w-full rounded-lg p-2 outline-none font-medium' placeholder='Enter Last Name'/>
                </div>
            </div>
            <div className='my-[1rem]'>
                <input type="email" className='w-full rounded-lg p-2 outline-none font-medium' placeholder='Enter Email Address'/>
            </div>

            <button className='px-8 py-3 rounded-lg mb-[3rem] text-[16px] w-full bg-blue-950 transition-all duration-200 hover:bg-red-600 text-white'>Book Now</button>

        </div>
    </div>
}

export default ReservationForm;


    
    `
    navigator.clipboard.writeText(copyToCode)
  }
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className="pt-[5rem] bg-center bg-cover relative mt-[2rem] pb-[5rem] mb-[3rem] bg-[url('/bg-black.jpg')]">
        {/* Overlay */}
        <div className='absolute w-full h-full bg-[#000000a6] top-0 left-0 right-0 bottom-0' />
        <div className='w-[80%] relative z-[20] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]'>
          {/* Text Content */}
          <div>
            <h1 className='text-[30px] md:text-[40px] lg:text-[40px] text-white font-bold leading-[3rem] md:leading-[4rem]'>
              DO YOU HAVE ANY DINNER PLAN TODAY? RESERVE YOUR TABLE
            </h1>
            <p className='text-[17px] mt-[1rem] text-white text-opacity-50'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis illum veniam sed hic minus. Nam at qui eos nihil ipsum. Consequatur porro eligendi fuga aliquid.
            </p>
            <div className='flex mt-[2rem] items-center space-x-4'>
              <div className='w-[3rem] h-[3rem] bg-red-500 rounded-full flex justify-center items-center flex-col'>
                <BiPhone className='w-[1.7rem] h-[1.7rem] text-white' />
              </div>
              <div>
                <h1 className='text-[25px] text-white font-semibold'>Quick order 24/7</h1>
                <h1 className='text-yellow-300 text-[30px] font-bold'>+0123 456 789</h1>
              </div>
            </div>
          </div>
          {/* Reservation Form */}
          <ReservationForm />
        </div>
      </div>

      <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
        <DialogBox />
      </div>
    </div>
  )
}

export default Two_UI_Component_Fifteen