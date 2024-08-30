"use client"
import { DialogBox } from '@/components/DialogBox';
import Image from 'next/image'
import React from 'react'

const Two_UI_Component_Seven = () => {
  function handelCodeCopy() {
    const codeToCopy = `
    Image Source Link: 
    ------------------
    https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

    RenderCode:
    -----------
    <div className="flex justify-center bg-[#DEE5CD] text-primary-content p-6 py-10">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-center uppercase font-bold text-green-500">Services We Offer</h2>
          <p className="text-center px-0 md:px-10 lg:px-32 text-xs md:text-sm lg:text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae earum expedita mollitia illum voluptatum repellat vel temporibus. Vero, distinctio maxime rem suscipit ipsam fugit officia nesciunt error. Quibusdam, sed cumque. Lorem ipsum dolor sit.
          </p>
          <div className="flex justify-center items-center mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-4 shadow border-2 border-secondary">
                <div>
                  <Image src="/two_card10.jpg" width={1000} height={1000} alt="hygiene_standards" className="w-full h-full md:w-64 md:h-52 lg:w-48 lg:h-48" />
                </div>
                <div className="text-center mt-2 text-sm md:text-sm lg:text-base">
                  <h2 className="font-bold">Cold Store</h2>
                </div>
              </div>
              <div className=" p-4 shadow border-2 border-secondary">
                <div>
                  <Image src="/two_card11.jpg" width={1000} height={1000} alt="quality_testing" className="w-full h-full md:w-64 md:h-52 lg:w-48 lg:h-48" />
                </div>
                <div className="text-center mt-2 text-sm md:text-sm lg:text-base">
                  <h2 className="font-bold">Frozen Store</h2>
                </div>
              </div>
              <div className=" p-4 shadow border-2 border-secondary">
                <div>
                  <Image src="/two_card12.jpg" width={1000} height={1000} alt="packaging_services" className="w-full h-full md:w-64 md:h-52 lg:w-48 lg:h-48" />
                </div>
                <div className="text-center mt-2 text-sm md:text-sm lg:text-base">
                  <h2 className="font-bold">Logistics</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    `;
    navigator.clipboard.writeText(codeToCopy)
  }

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className="flex justify-center bg-[#DEE5CD] text-primary-content p-6 py-10">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-center uppercase font-bold text-green-500">Services We Offer</h2>
          <p className="text-center px-0 md:px-10 lg:px-32 text-xs md:text-sm lg:text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae earum expedita mollitia illum voluptatum repellat vel temporibus. Vero, distinctio maxime rem suscipit ipsam fugit officia nesciunt error. Quibusdam, sed cumque. Lorem ipsum dolor sit.
          </p>
          <div className="flex justify-center items-center mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-4 shadow border-2 border-secondary">
                <div>
                  <Image src="/two_card10.jpg" width={1000} height={1000} alt="hygiene_standards" className="w-full h-full md:w-64 md:h-52 lg:w-48 lg:h-48" />
                </div>
                <div className="text-center mt-2 text-sm md:text-sm lg:text-base">
                  <h2 className="font-bold">Cold Store</h2>
                </div>
              </div>
              <div className=" p-4 shadow border-2 border-secondary">
                <div>
                  <Image src="/two_card11.jpg" width={1000} height={1000} alt="quality_testing" className="w-full h-full md:w-64 md:h-52 lg:w-48 lg:h-48" />
                </div>
                <div className="text-center mt-2 text-sm md:text-sm lg:text-base">
                  <h2 className="font-bold">Frozen Store</h2>
                </div>
              </div>
              <div className=" p-4 shadow border-2 border-secondary">
                <div>
                  <Image src="/two_card12.jpg" width={1000} height={1000} alt="packaging_services" className="w-full h-full md:w-64 md:h-52 lg:w-48 lg:h-48" />
                </div>
                <div className="text-center mt-2 text-sm md:text-sm lg:text-base">
                  <h2 className="font-bold">Logistics</h2>
                </div>
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

export default Two_UI_Component_Seven