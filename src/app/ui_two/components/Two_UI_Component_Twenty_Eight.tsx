"use client"
import { DialogBox } from '@/components/DialogBox'
import Image from 'next/image'
import React from 'react'

const Two_UI_Component_Twenty_Eight = () => {
  const boxData = [
    {
      name: "Transformative",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/process_one.png"
    },
    {
      name: "Investigation",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/process_two.png"
    },
    {
      name: "Contemplation",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/process_three.png"
    },
    {
      name: "Reconstruction",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/process_four.png"
    },
    {
      name: "Liberation",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/process_five.png"
    },
    {
      name: "Integration",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/process_six.png"
    }
  ]


  function handelCodeCopy() {
    const codeToCopy = `
  Image Source Link: 
  ------------------
  https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

  RenderCode:
  -----------
  
import Image from 'next/image'
import React from 'react'

const Two_UI_Component_Twenty_Eight = () => {
  const boxData = [
    {
      name: "Transformative",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/process_one.png"
    },
    {
      name: "Investigation",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/process_two.png"
    },
    {
      name: "Contemplation",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/process_three.png"
    },
    {
      name: "Reconstruction",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/process_four.png"
    },
    {
      name: "Liberation",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/process_five.png"
    },
    {
      name: "Integration",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/process_six.png"
    }
  ]

  return (
    <div >
      <div className='bg-blue-50'>
        <div className='pt-[3.5rem] pb-[0rem] md:pt-[5rem] md:pb-[1rem] lg:pt-[6.2rem] lg:pb-[2rem]'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-6">
            {
              boxData.map((data: any, i: number) => (
                <div key={i} className='py-6 px-2 rounded-xl shadow-lg bg-slate-50 text-accent-content'>
                  <div className='flex flex-row gap-3'>
                    <div className='w-[25%] flex justify-end items-center'>
                      <Image src={data.image} width={500} height={500} alt='The 5r' className='w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] shadow-2xl rounded-full p-2  ' style={{ boxShadow: '0px 0px 8px gray' }} />
                    </div>
                    <div className='w-[75%]'>
                      <h2 className='font-bold text-lg md:text-xl'>The 5R Process</h2>
                      <p className='font-normal md:font-medium text-sm'>
                        {data.dec}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Two_UI_Component_Twenty_Eight

  `;
    navigator.clipboard.writeText(codeToCopy)
  }
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='bg-blue-50'>
        <div className='pt-[3.5rem] pb-[0rem] md:pt-[5rem] md:pb-[1rem] lg:pt-[6.2rem] lg:pb-[2rem]'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-6">
            {
              boxData.map((data: any, i: number) => (
                <div key={i} className='py-6 px-2 rounded-xl shadow-lg bg-slate-50 text-accent-content'>
                  <div className='flex flex-row gap-3'>
                    <div className='w-[25%] flex justify-end items-center'>
                      <Image src={data.image} width={500} height={500} alt='The 5r' className='w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] shadow-2xl rounded-full p-2  ' style={{ boxShadow: '0px 0px 8px gray' }} />
                    </div>
                    <div className='w-[75%]'>
                      <h2 className='font-bold text-lg md:text-xl'>The 5R Process</h2>
                      <p className='font-normal md:font-medium text-sm'>
                        {data.dec}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
        <DialogBox />
      </div>
    </div>
  )
}

export default Two_UI_Component_Twenty_Eight