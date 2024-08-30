"use client"
import React from 'react'
import Highlights from './Highlights'
import { DialogBox } from '@/components/DialogBox';

const Two_UI_Component_Twenty = () => {
  const HighlightCard = [
    {
      image: "/h1.jpg",
      title: "ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY",
      date: "21 March 2024"
    },
    {
      image: "/h2.jpg",
      title: "ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY",
      date: "21 March 2024"
    },
    {
      image: "/h3.jpg",
      title: "ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY",
      date: "21 March 2024"
    },
    {
      image: "/h4.jpg",
      title: "ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY",
      date: "21 March 2024"
    }
  ]

  function handelCodeCopy() {
    const codeToCopy = `
    Image Source Link: 
    ------------------
    https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

    RenderCode Component Link:
    --------------------------
    https://drive.google.com/file/d/1BWWXX_-0mqQAL4UHtc11IVietg0HyMtK/view?usp=drive_link
    

    `;
    navigator.clipboard.writeText(codeToCopy)
  }

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='pt-[5rem] pb-[3rem] bg-sky-50'>
        {/* Heading */}
        <h1 className='text-3xl font-bold w-[90%] mx-auto'>Match Highlights</h1>
        <div className='mt-[3rem] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]'>
          {/* Card */}

          {/* Highlights Card */}
          {
            HighlightCard.map((card, i: number) => (
              <div key={i}>
                <Highlights title={card.title} date={card.date} image={card.image} />
              </div>
            ))
          }
        </div>
      </div>

      <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
        <DialogBox />
      </div>
    </div>
  )
}

export default Two_UI_Component_Twenty