import React from 'react'
import NewsCard from './NewsCard'
import SmallNewsCard from './SmallNewsCard'
import { DialogBox } from '@/components/DialogBox'

const Two_UI_Component_Eighteen = () => {
  function handelCodeCopy() {
    const codeToCopy = `
  Image Source Link:
  ------------------
  https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

  RenderCode Component Link:
  --------------------------
  https://drive.google.com/file/d/1tPtWS3JYoVEDxWk-Ln0TVJFshn1s_ahZ/view?usp=drive_link
  
  `;
    navigator.clipboard.writeText(codeToCopy)
  }

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='py-[3rem] bg-blue-50'>
        {/* Heading */}
        <h1 className='w-[80%] mx-auto font-bold text-3xl'>Latest News</h1>
        <div className='w-[80%] mx-auto pt-[2rem] flex flex-col md:flex-row gap-[2rem]'>
          {/* Big Card */}
          <div className='w-full md:w-[65%] lg:w-[60%]'>
            <NewsCard image="/n1.jpg" date="March 23, 2024" title="Whats new in team England" height="h-[400px] sm:h-full" />
          </div>
          {/* Small Card */}
          <div className='w-full md:w-[35%] lg:w-[40%] space-y-4'>
            <div>
              <SmallNewsCard image="/n2.jpg" date="March 23, 2024" title="Whats new in team England" />
            </div>
            <div className=''>
              <SmallNewsCard image="/n3.jpg" date="March 23, 2024" title="Whats new in team England" />
            </div>
            <div>
              <SmallNewsCard image="/n4.jpg" date="March 23, 2024" title="Whats new in team England" />
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

export default Two_UI_Component_Eighteen