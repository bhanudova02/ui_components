"use client"
import { DialogBox } from '@/components/DialogBox';
import Image from 'next/image'
import React from 'react'

const Two_UI_Component_Eight = () => {
  function handelCodeCopy() {
    const codeToCopy = `
    Image Source Link: 
    ------------------
    https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

    RenderCode:
    -----------
      <div className="flex justify-center items-center text-primary-content bg-[#eef7d467]">
        <div className="p-6 pb-10">
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold uppercase  text-lime-900">Why Choose Us</h2>
          <p className="text-center mb-6 md:mb-6 lg:mb-6 mt-0 md:mt-1 px-0 md:px-4 lg:px-20  text-xs md:text-sm lg:text-base font-medium">
            Lorem ipsum dolor sit amet consectetur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam earum repellat laudantium est itaque ut esse culpa doloremque hic omnis eligendi delectus rerum, nobis excepturi fugit facilis? Sit, velit magnam?
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
              <div className="flex justify-center">
                <div className="border shadow-xl w-[250px] md:w-[230px] lg:w-[350px]">
                  <div>
                    <Image src="/two_card13.jpg" width={1000} height={1000} alt="food_why_logo1" className="h-[180px] md:h-[180px] lg:h-[250px] object-cover" />
                  </div>
                  <div className="w-full md:w-full lg:w-80 p-2 md:p-3">
                    <h2 className="text-base md:text-xl font-semibold">Quality</h2>
                    <p className="text-xs md:text-sm lg:text-sm font-medium my-1 md:my-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rem facere eligendi veritatis cupiditate error ea!
                    </p>
                  </div>
                </div>
              </div>
              <div className="border shadow-xl w-[250px] md:w-[230px] lg:w-[350px]">
                <div>
                  <Image src="/two_card14.jpg" width={1000} height={1000} alt="food_why_logo2" className="h-[180px] md:h-[180px] lg:h-[250px] object-cover" />
                </div>
                <div className="w-full md:w-full lg:w-80 p-2 md:p-3">
                  <h2 className="text-base md:text-xl font-semibold">Nutrient</h2>
                  <p className="text-xs md:text-sm lg:text-sm font-medium my-1 md:my-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rem facere eligendi veritatis cupiditate error ea!
                  </p>
                </div>
              </div>
              <div className="border shadow-xl w-[250px] md:w-[230px] lg:w-[350px]">
                <div>
                  <Image src="/two_card15.jpg" width={1000} height={1000} alt="food_why_logo3" className="h-[180px] md:h-[180px] lg:h-[250px] object-cover" />
                </div>
                <div className="w-full md:w-full lg:w-80 p-2 md:p-3">
                  <h2 className="text-base md:text-xl font-semibold">Freshness Maximization</h2>
                  <p className="text-xs md:text-sm lg:text-sm font-medium my-1 md:my-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rem facere eligendi veritatis cupiditate error ea!
                  </p>
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
    <div className='container mx-auto'>
      <div className="flex justify-center items-center text-primary-content bg-[#eef7d467]">
        <div className="p-6 pb-10">
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold uppercase  text-lime-900">Why Choose Us</h2>
          <p className="text-center mb-6 md:mb-6 lg:mb-6 mt-0 md:mt-1 px-0 md:px-4 lg:px-20  text-xs md:text-sm lg:text-base font-medium">
            Lorem ipsum dolor sit amet consectetur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam earum repellat laudantium est itaque ut esse culpa doloremque hic omnis eligendi delectus rerum, nobis excepturi fugit facilis? Sit, velit magnam?
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
              <div className="flex justify-center">
                <div className="border shadow-xl w-[250px] md:w-[230px] lg:w-[350px]">
                  <div>
                    <Image src="/two_card13.jpg" width={1000} height={1000} alt="food_why_logo1" className="h-[180px] md:h-[180px] lg:h-[250px] object-cover" />
                  </div>
                  <div className="w-full md:w-full lg:w-80 p-2 md:p-3">
                    <h2 className="text-base md:text-xl font-semibold">Quality</h2>
                    <p className="text-xs md:text-sm lg:text-sm font-medium my-1 md:my-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rem facere eligendi veritatis cupiditate error ea!
                    </p>
                  </div>
                </div>
              </div>
              <div className="border shadow-xl w-[250px] md:w-[230px] lg:w-[350px]">
                <div>
                  <Image src="/two_card14.jpg" width={1000} height={1000} alt="food_why_logo2" className="h-[180px] md:h-[180px] lg:h-[250px] object-cover" />
                </div>
                <div className="w-full md:w-full lg:w-80 p-2 md:p-3">
                  <h2 className="text-base md:text-xl font-semibold">Nutrient</h2>
                  <p className="text-xs md:text-sm lg:text-sm font-medium my-1 md:my-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rem facere eligendi veritatis cupiditate error ea!
                  </p>
                </div>
              </div>
              <div className="border shadow-xl w-[250px] md:w-[230px] lg:w-[350px]">
                <div>
                  <Image src="/two_card15.jpg" width={1000} height={1000} alt="food_why_logo3" className="h-[180px] md:h-[180px] lg:h-[250px] object-cover" />
                </div>
                <div className="w-full md:w-full lg:w-80 p-2 md:p-3">
                  <h2 className="text-base md:text-xl font-semibold">Freshness Maximization</h2>
                  <p className="text-xs md:text-sm lg:text-sm font-medium my-1 md:my-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rem facere eligendi veritatis cupiditate error ea!
                  </p>
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

export default Two_UI_Component_Eight