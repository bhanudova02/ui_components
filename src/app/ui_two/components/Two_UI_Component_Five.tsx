'use client'
import { DialogBox } from '@/components/DialogBox';
import Image from 'next/image'
import React from 'react'

const Two_UI_Component_Five = () => {
  const whyChooseUs = [{ id: 1, title: 'WHY CHOOSE US', paragraph: 'We prioritize sustainable practices, contributing to a greener future for agriculture, making us the eco-friendly choice for your fertilizer needs.' }];
  const whyChooseUsBox = [
    { id: 1, image: '/two_logo9.png', title: 'HeadingOne', paragraph: 'We provide high-quality fertilizers for sustained, healthy plant growth.' },
    { id: 2, image: '/two_logo10.png', title: 'HeadingTwo', paragraph: 'Competitive pricing without compromising quality ensures enduring benefits for your crops.' },
    { id: 3, image: '/two_logo11.png', title: 'HeadingThree', paragraph: 'Absolutely, trust in our unwavering commitment to provide reliable product availability, even during peak seasons.' },
    { id: 4, image: '/two_logo12.png', title: 'HeadingFour', paragraph: 'We are dedicated to helping you achieve long-term success in cultivation.' }
  ]


  function handelCodeCopy() {
    const codeToCopy = `
  Image Source Link: 
  ------------------
  https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

   const whyChooseUs = [{ id: 1, title: 'WHY CHOOSE US', paragraph: 'We prioritize sustainable practices, contributing to a greener future for agriculture, making us the eco-friendly choice for your fertilizer needs.' }];
  const whyChooseUsBox = [
    { id: 1, image: '/two_logo9.png', title: 'HeadingOne', paragraph: 'We provide high-quality fertilizers for sustained, healthy plant growth.' },
    { id: 2, image: '/two_logo10.png', title: 'HeadingTwo', paragraph: 'Competitive pricing without compromising quality ensures enduring benefits for your crops.' },
    { id: 3, image: '/two_logo11.png', title: 'HeadingThree', paragraph: 'Absolutely, trust in our unwavering commitment to provide reliable product availability, even during peak seasons.' },
    { id: 4, image: '/two_logo12.png', title: 'HeadingFour', paragraph: 'We are dedicated to helping you achieve long-term success in cultivation.' }
  ]

  Render Code:
  ------------
    <div className="bg-white text-primary-content mt-[-8px] py-16">
        <div className="flex justify-center items-center max-w-[90%] md:max-w-3xl lg:max-w-6xl mx-auto">
          <div>
            {
              whyChooseUs && whyChooseUs.map(({ id, title, paragraph }: any) => (
                <div key={id}>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase text-center">{title}</h2>
                  <p className="text-center mt-1 md:mt-3 text-xs md:text-sm lg:text-base px-5 md:px-10 lg:px-72 font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid possimus quo, eius praesentium suscipit voluptates amet!
                  </p>
                </div>
              ))
            }
            <div className="flex justify-center mt-5 md:mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-2">
                {
                  whyChooseUsBox && whyChooseUsBox.map(({ id, image, title, paragraph }: any) => (
                    <div key={id} className="text-center">
                      <div className="flex justify-center">
                        <Image src={image} width={1000} height={1000} alt="quality" className="w-24 h-24 md:w-24 md:h-24 lg:w-32 lg:h-32 p-4 md:p-4 lg:p-1 rounded-full border-[8px] border-[#BAC543]" />
                      </div>
                      <h2 className="text-base md:text-lg lg:text-xl font-semibold my-2">{title}</h2>
                      <p className="px-12 md:px-5 text-xs md:text-sm lg:text-sm font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus fuga animi molestiae minima quibusdam omnis cum saepe obcaecati suscipit aut!
                      </p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>


  `;
    navigator.clipboard.writeText(codeToCopy)
  }


  return (
    <div className='container mx-auto'>
      <div className="bg-white text-primary-content mt-[-8px] py-16">
        <div className="flex justify-center items-center max-w-[90%] md:max-w-3xl lg:max-w-6xl mx-auto">
          <div>
            {
              whyChooseUs && whyChooseUs.map(({ id, title, paragraph }: any) => (
                <div key={id}>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase text-center">{title}</h2>
                  <p className="text-center mt-1 md:mt-3 text-xs md:text-sm lg:text-base px-5 md:px-10 lg:px-72 font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid possimus quo, eius praesentium suscipit voluptates amet!
                  </p>
                </div>
              ))
            }
            <div className="flex justify-center mt-5 md:mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-2">
                {
                  whyChooseUsBox && whyChooseUsBox.map(({ id, image, title, paragraph }: any) => (
                    <div key={id} className="text-center">
                      <div className="flex justify-center">
                        <Image src={image} width={1000} height={1000} alt="quality" className="w-24 h-24 md:w-24 md:h-24 lg:w-32 lg:h-32 p-4 md:p-4 lg:p-1 rounded-full border-[8px] border-[#BAC543]" />
                      </div>
                      <h2 className="text-base md:text-lg lg:text-xl font-semibold my-2">{title}</h2>
                      <p className="px-12 md:px-5 text-xs md:text-sm lg:text-sm font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus fuga animi molestiae minima quibusdam omnis cum saepe obcaecati suscipit aut!
                      </p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
        <DialogBox />
      </div>
    </div>
  )
}

export default Two_UI_Component_Five