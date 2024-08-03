'use client'
import { DialogBox } from '@/components/DialogBox'
import Image from 'next/image'
import React from 'react'

const Two_UI_Component_Three = () => {
  function handelCodeCopy() {
    const codeToCopy = `
      Image Source Link: 
        ------------------
        https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images


    Render Code:
    ------------
     <div className="bg-[#F2F2F2] text-primary-content p-1  md:p-4 lg:p-0">
        <div className="flex flex-col lg:flex-row gap-4 md:max-w-3xl max-w-[90%] lg:max-w-6xl mx-auto py-6 md:py-12">
          <div className="w-full lg:w-[60%] relative">
            <div className='space-y-2'>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase text-center lg:text-start">Why <span className="text-green-600">Choose Us</span></h2>
              <p className="text-xs md:text-sm lg:text-base font-medium w-full lg:w-[80%] text-center lg:text-start ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nostrum officia ab enim beatae obcaecati laudantium dolorum. Accusantium perspiciatis eveniet numquam placeat voluptas laborum optio possimus consequatur, natus illo repellendus!
              </p>
            </div>
            <div className='lg:absolute lg:bottom-0'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-primary p-4">
                  <div className="flex flex-row gap-2">
                    <div className="w-[20%]">
                      <Image src={'/two_logo5.png'} width={1000} height={1000} alt={'two_logo5'} className="w-20 rounded-full" />
                    </div>
                    <div className="w-[80%]">
                      <h2 className="text-base md:text-lg lg:text-xl font-semibold">High-quality</h2>
                      <p className="text-xs md:text-sm lg:text-sm font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, odio.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary p-4">
                  <div className="flex flex-row gap-2">
                    <div className="w-[20%]">
                      <Image src={'/two_logo7.png'} width={1000} height={1000} alt={'two_logo6'} className="w-20 rounded-full " />
                    </div>
                    <div className="w-[80%]">
                      <h2 className="text-base md:text-lg lg:text-xl font-semibold">Expertise</h2>
                      <p className="text-xs md:text-sm lg:text-sm font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, odio.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary p-4">
                  <div className="flex flex-row gap-2">
                    <div className="w-[20%]">
                      <Image src={'/two_logo6.png'} width={1000} height={1000} alt={'two_logo7'} className="w-20 rounded-full" />
                    </div>
                    <div className="w-[80%]">
                      <h2 className="text-base md:text-lg lg:text-xl font-semibold">Customer focus</h2>
                      <p className="text-xs md:text-sm lg:text-sm font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, odio.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary p-4">
                  <div className="flex flex-row gap-2">
                    <div className="w-[20%]">
                      <Image src={'/two_logo8.jpg'} width={1000} height={1000} alt={'two_logo8'} className="w-20 rounded-full" />
                    </div>
                    <div className="w-[80%]">
                      <h2 className="text-base md:text-lg lg:text-xl font-semibold">Global reach</h2>
                      <p className="text-xs md:text-sm lg:text-sm font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, odio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[40%]">
            <Image src={'/two_card5.jpg'} width={600} height={600} alt="why choose us" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    `;

    navigator.clipboard.writeText(codeToCopy)
  }
  return (
    <div className='container mx-auto'>
      <div className="bg-[#F2F2F2] text-primary-content p-1  md:p-4 lg:p-0">
        <div className="flex flex-col lg:flex-row gap-4 md:max-w-3xl max-w-[90%] lg:max-w-6xl mx-auto py-6 md:py-12">
          <div className="w-full lg:w-[60%] relative">
            <div className='space-y-2'>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase text-center lg:text-start">Why <span className="text-green-600">Choose Us</span></h2>
              <p className="text-xs md:text-sm lg:text-base font-medium w-full lg:w-[80%] text-center lg:text-start ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nostrum officia ab enim beatae obcaecati laudantium dolorum. Accusantium perspiciatis eveniet numquam placeat voluptas laborum optio possimus consequatur, natus illo repellendus!
              </p>
            </div>
            <div className='lg:absolute lg:bottom-0'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-primary p-4">
                  <div className="flex flex-row gap-2">
                    <div className="w-[20%]">
                      <Image src={'/two_logo5.png'} width={1000} height={1000} alt={'two_logo5'} className="w-20 rounded-full" />
                    </div>
                    <div className="w-[80%]">
                      <h2 className="text-base md:text-lg lg:text-xl font-semibold">High-quality</h2>
                      <p className="text-xs md:text-sm lg:text-sm font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, odio.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary p-4">
                  <div className="flex flex-row gap-2">
                    <div className="w-[20%]">
                      <Image src={'/two_logo7.png'} width={1000} height={1000} alt={'two_logo6'} className="w-20 rounded-full " />
                    </div>
                    <div className="w-[80%]">
                      <h2 className="text-base md:text-lg lg:text-xl font-semibold">Expertise</h2>
                      <p className="text-xs md:text-sm lg:text-sm font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, odio.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary p-4">
                  <div className="flex flex-row gap-2">
                    <div className="w-[20%]">
                      <Image src={'/two_logo6.png'} width={1000} height={1000} alt={'two_logo7'} className="w-20 rounded-full" />
                    </div>
                    <div className="w-[80%]">
                      <h2 className="text-base md:text-lg lg:text-xl font-semibold">Customer focus</h2>
                      <p className="text-xs md:text-sm lg:text-sm font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, odio.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary p-4">
                  <div className="flex flex-row gap-2">
                    <div className="w-[20%]">
                      <Image src={'/two_logo8.jpg'} width={1000} height={1000} alt={'two_logo8'} className="w-20 rounded-full" />
                    </div>
                    <div className="w-[80%]">
                      <h2 className="text-base md:text-lg lg:text-xl font-semibold">Global reach</h2>
                      <p className="text-xs md:text-sm lg:text-sm font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, odio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[40%]">
            <Image src={'/two_card5.jpg'} width={600} height={600} alt="why choose us" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
        <DialogBox />
      </div>
    </div>
  )
}

export default Two_UI_Component_Three