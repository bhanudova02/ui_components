"use client"
import { DialogBox } from '@/components/DialogBox'
import Image from 'next/image'
import React from 'react'

const Two_UI_Component_Twenty_Thirty = () => {

  const clientLogo = ["/client_1.png", "/client_2.png", "/client_3.png", "/client_4.png", "/client_5.png", "/client_6.png", "/client_7.png", "/client_8.png"]


  function handelCodeCopy() {
    const codeToCopy = `
  Image Source Link: 
  ------------------
  https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

  RenderCode:
  -----------
  
"use client"
import Image from 'next/image'
import React from 'react'

const Two_UI_Component_Twenty_Thirty = () => {

  const clientLogo = ["/client_1.png", "/client_2.png", "/client_3.png", "/client_4.png", "/client_5.png", "/client_6.png", "/client_7.png", "/client_8.png"]

  return (
    <div>
      <div className='bg-[#F2F2F2] text-black'>
        <div className='flex justify-center items-center pt-[5rem] pb-[14px] md:pt-[6.3rem] md:pb-[1.5rem] lg:pt-[7.9rem] lg:pb-[3rem]'>
          <div>
            <div className='text-center'>
              <h1 className='text-xl md:text-2xl lg:text-3xl font-bold uppercase'>Develop an improved global environment.</h1>
              <p className='text-xs md:text-sm lg:text-base font-medium mt-2'>Our firm's headquarters are situated in <b>Bangalore.</b></p>
              <p className='text-xs md:text-sm lg:text-base font-medium mt-1'>We are formulating a distinctive brand image.</p>
              <h2 className='text-lg md:text-xl lg:text-2xl font-semibold'>How do you feel about these ideas?</h2>
            </div>
            <div className='flex justify-center items-center'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-4 md:gap-10 lg:gap-4 mt-4'>
                {
                  clientLogo.map((data: any, i: number) => (
                    <div key={i} className='bg-white flex justify-center items-center w-full h-[6rem] md:w-[16rem] md:h-[10rem] lg:w-[14rem] lg:h-[10rem] px-4 rounded-3xl border-2' style={{ boxShadow: '0px 0px 6px blue' }}>
                      <Image src={data} width={500} height={500} alt="super_unlimited_logo" className='w-full h-full object-contain' />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Two_UI_Component_Twenty_Thirty

  `;
    navigator.clipboard.writeText(codeToCopy)
  }


  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='bg-[#F2F2F2] text-black'>
        <div className='flex justify-center items-center pt-[5rem] pb-[14px] md:pt-[6.3rem] md:pb-[1.5rem] lg:pt-[7.9rem] lg:pb-[3rem]'>
          <div>
            <div className='text-center'>
              <h1 className='text-xl md:text-2xl lg:text-3xl font-bold uppercase'>Develop an improved global environment.</h1>
              <p className='text-xs md:text-sm lg:text-base font-medium mt-2'>Our firm's headquarters are situated in <b>Bangalore.</b></p>
              <p className='text-xs md:text-sm lg:text-base font-medium mt-1'>We are formulating a distinctive brand image.</p>
              <h2 className='text-lg md:text-xl lg:text-2xl font-semibold'>How do you feel about these ideas?</h2>
            </div>
            <div className='flex justify-center items-center'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-4 md:gap-10 lg:gap-4 mt-4'>
                {
                  clientLogo.map((data: any, i: number) => (
                    <div key={i} className='bg-white flex justify-center items-center w-full h-[6rem] md:w-[16rem] md:h-[10rem] lg:w-[14rem] lg:h-[10rem] px-4 rounded-3xl border-2' style={{ boxShadow: '0px 0px 6px blue' }}>
                      <Image src={data} width={500} height={500} alt="super_unlimited_logo" className='w-full h-full object-contain' />
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

export default Two_UI_Component_Twenty_Thirty