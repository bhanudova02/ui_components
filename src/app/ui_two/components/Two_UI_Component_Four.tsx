'use client';
import { DialogBox } from '@/components/DialogBox';
import Image from 'next/image';
import React from 'react'

const Two_UI_Component_Four = () => {
  const servicesMain = [{ id: 1, title: 'Our Services', paragraph: 'PLPL is Your Trusted Partner for All Fertilizer Needs and Services' }];
  const serviceBox = [
    { id: 1, image: '/two_card6.png', title: 'HeadingOne', paragraph: 'We offer a wide range of fertilizers, including nitrogen, phosphorus, and potassium-based to meet your agricultural needs.' },
    { id: 2, image: '/two_card7.png', title: 'HeadingTwo', paragraph: 'We invest in research and development to create new and improved fertilizer products that enhance crop yield.' },
    { id: 3, image: '/two_card8.png', title: 'HeadingThree', paragraph: 'We maintain rigorous quality control and testing processes to meet all regulatory standards' },
    { id: 4, image: '/two_card9.png', title: 'HeadingFour', paragraph: 'At PLPL, we are dedicated to promote sustainable and eco-friendly fertilizer usage through our services.' }
  ]

  function handelCodeCopy() {
    const copyToCode = `
      Image Source Link: 
        ------------------
        https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

  
        const servicesMain = [{ id: 1, title: 'Our Services', paragraph: 'PLPL is Your Trusted Partner for All Fertilizer Needs and Services' }];
        const serviceBox = [
          { id: 1, image: '/two_card6.png', title: 'HeadingOne', paragraph: 'We offer a wide range of fertilizers, including nitrogen, phosphorus, and potassium-based to meet your agricultural needs.' },
          { id: 2, image: '/two_card7.png', title: 'HeadingTwo', paragraph: 'We invest in research and development to create new and improved fertilizer products that enhance crop yield.' },
          { id: 3, image: '/two_card8.png', title: 'HeadingThree', paragraph: 'We maintain rigorous quality control and testing processes to meet all regulatory standards' },
          { id: 4, image: '/two_card9.png', title: 'HeadingFour', paragraph: 'At PLPL, we are dedicated to promote sustainable and eco-friendly fertilizer usage through our services.' }
        ]


        Render Code:
        ------------
         <div className="flex justify-center py-20 mt-[-5px] bg-[#e3eedd91] text-primary-content">
        <div className="text-center max-w-[90%] md:max-w-3xl lg:max-w-6xl ">
          {
            servicesMain && servicesMain.map(({ id, title, paragraph }: any) => (
              <div key={id}>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">{title}</h2>
                <p className="text-xs md:text-sm lg:text-base font-semibold ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nihil!
                </p>
              </div>
            ))
          }
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 mt-6">
            {
              serviceBox && serviceBox.map(({ id, image, title, paragraph }: any) => (
                <div key={id} className="flex justify-center items-center">
                  <div className="p-3 shadow-md rounded-md w-[70%] md:w-[90%] shadow-black bg-white hover:shadow-green-800 transition-all">
                    <div>
                      <div className="flex justify-center pb-2">
                        <Image src={image} width={1000} height={1000} alt={image} className="w-14 h-14" />
                      </div>
                      <div className='space-y-2'>
                        <h2 className="text-base md:text-lg lg:text-xl font-semibold  h-full">{title}</h2>
                        <p className="text-xs md:text-sm lg:text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nisi?</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>


    `;
    navigator.clipboard.writeText(copyToCode)
  }


  return (
    <div className='container mx-auto'>
      <div className="flex justify-center py-20 mt-[-5px] bg-[#e3eedd91] text-primary-content">
        <div className="text-center max-w-[90%] md:max-w-3xl lg:max-w-6xl ">
          {
            servicesMain && servicesMain.map(({ id, title, paragraph }: any) => (
              <div key={id}>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">{title}</h2>
                <p className="text-xs md:text-sm lg:text-base font-semibold ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nihil!
                </p>
              </div>
            ))
          }
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 mt-6">
            {
              serviceBox && serviceBox.map(({ id, image, title, paragraph }: any) => (
                <div key={id} className="flex justify-center items-center">
                  <div className="p-3 shadow-md rounded-md w-[70%] md:w-[90%] shadow-black bg-white hover:shadow-green-800 transition-all">
                    <div>
                      <div className="flex justify-center pb-2">
                        <Image src={image} width={1000} height={1000} alt={image} className="w-14 h-14" />
                      </div>
                      <div className='space-y-2'>
                        <h2 className="text-base md:text-lg lg:text-xl font-semibold  h-full">{title}</h2>
                        <p className="text-xs md:text-sm lg:text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nisi?</p>
                      </div>
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

export default Two_UI_Component_Four