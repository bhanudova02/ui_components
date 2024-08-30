"use client"
import { DialogBox } from '@/components/DialogBox';
import Image from 'next/image'
import React from 'react'

const Two_UI_Component_Twelve = () => {

  function handelCodeCopy() {
    const codeToCopy = `
    Image Source Link: 
    ------------------
    https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

    RenderCode:
    -----------
       <div className="bg-[#C4D7B2] py-12 text-primary-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[90%] md:max-w-3xl lg:max-w-6xl mx-auto">
          <div>
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">Who We Are</h2>
              <p className="text-xs md:text-sm lg:text-base font-medium">

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, deserunt in rem dicta porro libero amet. Aliquid quidem debitis natus eligendi! Quos rem provident tenetur suscipit ratione dolor, alias incidunt.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, deserunt in rem dicta porro libero amet. Aliquid quidem debitis natus eligendi! Quos rem provident tenetur suscipit ratione dolor, alias incidunt.
              </p>
            </div>
            <div>
              <hr className="my-4" />
              <h2 className="text-base md:text-lg lg:text-xl font-semibold">Our Strenghts</h2>
              <ul className="list-disc lg:leading-7 ms-6 text-xs md:text-sm lg:text-sm font-medium">
                <li>Lorem, ipsum dolor sit amet consectetur sit amet consectetur  adipisicing elit. Ipsam, dolorem.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolorem.</li>
                <li>Lorem, ipsum dolor sit amet sit amet consectetur consectetur adipisicing elit. Ipsam, dolorem.</li>
                <li>Lorem, ipsum dolor sit amet sit amet consectetursit amet consectetur consectetur adipisicing elit. Ipsam, dolorem.</li>
              </ul>
            </div>
          </div>
          <div>
            <Image src="/WhoWeAre_Bg.jpg" width={1000} height={1000} alt="whoweare" className="w-full h-full rounded-3xl shadow-md object-cover" />
          </div>
        </div>
      </div>

    `;
    navigator.clipboard.writeText(codeToCopy)
  }




  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className="bg-[#C4D7B2] py-12 text-primary-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[90%] md:max-w-3xl lg:max-w-6xl mx-auto">
          <div>
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">Who We Are</h2>
              <p className="text-xs md:text-sm lg:text-base font-medium">

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, deserunt in rem dicta porro libero amet. Aliquid quidem debitis natus eligendi! Quos rem provident tenetur suscipit ratione dolor, alias incidunt.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, deserunt in rem dicta porro libero amet. Aliquid quidem debitis natus eligendi! Quos rem provident tenetur suscipit ratione dolor, alias incidunt.
              </p>
            </div>
            <div>
              <hr className="my-4" />
              <h2 className="text-base md:text-lg lg:text-xl font-semibold">Our Strenghts</h2>
              <ul className="list-disc lg:leading-7 ms-6 text-xs md:text-sm lg:text-sm font-medium">
                <li>Lorem, ipsum dolor sit amet consectetur sit amet consectetur  adipisicing elit. Ipsam, dolorem.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolorem.</li>
                <li>Lorem, ipsum dolor sit amet sit amet consectetur consectetur adipisicing elit. Ipsam, dolorem.</li>
                <li>Lorem, ipsum dolor sit amet sit amet consectetursit amet consectetur consectetur adipisicing elit. Ipsam, dolorem.</li>
              </ul>
            </div>
          </div>
          <div>
            <Image src="/WhoWeAre_Bg.jpg" width={1000} height={1000} alt="whoweare" className="w-full h-full rounded-3xl shadow-md object-cover" />
          </div>
        </div>
      </div>

      <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
        <DialogBox />
      </div>
    </div>
  )
}

export default Two_UI_Component_Twelve