"use client"
import { DialogBox } from '@/components/DialogBox';
import Image from 'next/image'
import React from 'react'

const Two_UI_Component_Nine = () => {
  function handelCodeCopy() {
    const codeToCopy = `
    Image Source Link: 
    ------------------
    https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

    Render Code:
    ------------
     <div className="flex justify-center pb-4 md:pb-2 bg-[#EEF7D4] text-primary-content">
        <div className="max-w-[90%] md:max-w-3xl lg:max-w-6xl mx-auto">
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold uppercase mt-6 md:mt-10 ">We have expertise in these areas</h2>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-6 lg:p-10 gap-4 md:gap-6 lg:gap-10 w-full">
              <div className="bg-green-900/20 rounded-lg">
                <div className="p-4 md:p-6">
                  <div>
                    <Image src="/food_box1.jpg" width={1000} height={1000} alt="food_box1" />
                  </div>
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold mt-2 md:mt-2">Harvesting Excellence</h2>
                  <p className="text-xs md:text-sm lg:text-base font-medium">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, officia numquam fugiat exercitationem quia iste consequuntur, accusantium ex hic dignissimos voluptas blanditiis accusamus aperiam sed tenetur saepe provident repellendus placeat.
                  </p>
                </div>
              </div>
              <div className="bg-green-900/20 rounded-lg">
                <div className="p-4 md:p-6">
                  <div>
                    <Image src="/food_box2.jpg" width={1000} height={1000} alt="food_box2" />
                  </div>
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold mt-2 md:mt-2">Precise Sorting and Grading</h2>
                  <p className="text-xs md:text-sm lg:text-base font-medium">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, officia numquam fugiat exercitationem quia iste consequuntur, accusantium ex hic dignissimos voluptas blanditiis accusamus aperiam sed tenetur saepe provident repellendus placeat.
                  </p>
                </div>
              </div>
              <div className="bg-green-900/20 rounded-lg">
                <div className="p-4 md:p-6">
                  <div>
                    <Image src="/food_box3.jpg" width={1000} height={1000} alt="food_box3" />
                  </div>
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold mt-2 md:mt-2">Impeccable Cleaning and Washing</h2>
                  <p className="text-xs md:text-sm lg:text-base font-medium">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, officia numquam fugiat exercitationem quia iste consequuntur, accusantium ex hic dignissimos voluptas blanditiis accusamus aperiam sed tenetur saepe provident repellendus placeat.
                  </p>
                </div>
              </div>
              <div className="bg-green-900/20 rounded-lg">
                <div className="p-4 md:p-6">
                  <div>
                    <Image src="/food_box4.jpg" width={1000} height={1000} alt="food_box4" />
                  </div>
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold mt-2 md:mt-2">Craftsmanship in Cutting and Peeling</h2>
                  <p className="text-xs md:text-sm lg:text-base font-medium">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, officia numquam fugiat exercitationem quia iste consequuntur, accusantium ex hic dignissimos voluptas blanditiis accusamus aperiam sed tenetur saepe provident repellendus placeat.
                  </p>
                </div>
              </div>
              <div className="bg-green-900/20 rounded-lg">
                <div className="p-4 md:p-6">
                  <div>
                    <Image src="/food_box5.jpg" width={1000} height={1000} alt="food_box5" />
                  </div>
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold mt-2 md:mt-2">Preservation and Processing Excellence</h2>
                  <p className="text-xs md:text-sm lg:text-base font-medium">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, officia numquam fugiat exercitationem quia iste consequuntur, accusantium ex hic dignissimos voluptas blanditiis accusamus aperiam sed tenetur saepe provident repellendus placeat.
                  </p>
                </div>
              </div>
              <div className="bg-green-900/20 rounded-lg">
                <div className="p-4 md:p-6">
                  <div>
                    <Image src="/food_box6.jpg" width={1000} height={1000} alt="food_box6" />
                  </div>
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold mt-2 md:mt-2">Packaging</h2>
                  <p className="text-xs md:text-sm lg:text-base font-medium">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, officia numquam fugiat exercitationem quia iste consequuntur, accusantium ex hic dignissimos voluptas blanditiis accusamus aperiam sed tenetur saepe provident repellendus placeat.
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
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className="flex justify-center pb-4 md:pb-2 bg-[#EEF7D4] text-primary-content">
        <div className="max-w-[90%] md:max-w-3xl lg:max-w-6xl mx-auto">
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold uppercase mt-6 md:mt-10 ">We have expertise in these areas</h2>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-6 lg:p-10 gap-4 md:gap-6 lg:gap-10 w-full">
              <div className="bg-green-900/20 rounded-lg">
                <div className="p-4 md:p-6">
                  <div>
                    <Image src="/food_box1.jpg" width={1000} height={1000} alt="food_box1" />
                  </div>
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold mt-2 md:mt-2">Harvesting Excellence</h2>
                  <p className="text-xs md:text-sm lg:text-base font-medium">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, officia numquam fugiat exercitationem quia iste consequuntur, accusantium ex hic dignissimos voluptas blanditiis accusamus aperiam sed tenetur saepe provident repellendus placeat.
                  </p>
                </div>
              </div>
              <div className="bg-green-900/20 rounded-lg">
                <div className="p-4 md:p-6">
                  <div>
                    <Image src="/food_box2.jpg" width={1000} height={1000} alt="food_box2" />
                  </div>
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold mt-2 md:mt-2">Precise Sorting and Grading</h2>
                  <p className="text-xs md:text-sm lg:text-base font-medium">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, officia numquam fugiat exercitationem quia iste consequuntur, accusantium ex hic dignissimos voluptas blanditiis accusamus aperiam sed tenetur saepe provident repellendus placeat.
                  </p>
                </div>
              </div>
              <div className="bg-green-900/20 rounded-lg">
                <div className="p-4 md:p-6">
                  <div>
                    <Image src="/food_box3.jpg" width={1000} height={1000} alt="food_box3" />
                  </div>
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold mt-2 md:mt-2">Impeccable Cleaning and Washing</h2>
                  <p className="text-xs md:text-sm lg:text-base font-medium">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, officia numquam fugiat exercitationem quia iste consequuntur, accusantium ex hic dignissimos voluptas blanditiis accusamus aperiam sed tenetur saepe provident repellendus placeat.
                  </p>
                </div>
              </div>
              <div className="bg-green-900/20 rounded-lg">
                <div className="p-4 md:p-6">
                  <div>
                    <Image src="/food_box4.jpg" width={1000} height={1000} alt="food_box4" />
                  </div>
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold mt-2 md:mt-2">Craftsmanship in Cutting and Peeling</h2>
                  <p className="text-xs md:text-sm lg:text-base font-medium">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, officia numquam fugiat exercitationem quia iste consequuntur, accusantium ex hic dignissimos voluptas blanditiis accusamus aperiam sed tenetur saepe provident repellendus placeat.
                  </p>
                </div>
              </div>
              <div className="bg-green-900/20 rounded-lg">
                <div className="p-4 md:p-6">
                  <div>
                    <Image src="/food_box5.jpg" width={1000} height={1000} alt="food_box5" />
                  </div>
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold mt-2 md:mt-2">Preservation and Processing Excellence</h2>
                  <p className="text-xs md:text-sm lg:text-base font-medium">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, officia numquam fugiat exercitationem quia iste consequuntur, accusantium ex hic dignissimos voluptas blanditiis accusamus aperiam sed tenetur saepe provident repellendus placeat.
                  </p>
                </div>
              </div>
              <div className="bg-green-900/20 rounded-lg">
                <div className="p-4 md:p-6">
                  <div>
                    <Image src="/food_box6.jpg" width={1000} height={1000} alt="food_box6" />
                  </div>
                  <h2 className="text-base md:text-lg lg:text-xl font-semibold mt-2 md:mt-2">Packaging</h2>
                  <p className="text-xs md:text-sm lg:text-base font-medium">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, officia numquam fugiat exercitationem quia iste consequuntur, accusantium ex hic dignissimos voluptas blanditiis accusamus aperiam sed tenetur saepe provident repellendus placeat.
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

export default Two_UI_Component_Nine