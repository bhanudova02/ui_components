import React from 'react'
import NewsCard from './NewsCard'
import { DialogBox } from '@/components/DialogBox'

const Two_UI_Component_Sixteen = () => {
  const trendingNews = [
    {
      title: "Whats New In England Team",
      image: "/n1.jpg",
      date: "March 21 , 2024",
      height: "h-[300px]"
    },
    {
      title: "Whats New In England Team",
      image: "/n2.jpg",
      date: "March 21 , 2024",
      height: "h-[300px]"
    },
    {
      title: "Whats New In England Team",
      image: "/n3.jpg",
      date: "March 21 , 2024",
      height: "h-[300px]"
    },
    {
      title: "Whats New In England Team",
      image: "/n4.jpg",
      date: "March 21 , 2024",
      height: "h-[300px]"
    }
  ]


  function handelCodeCopy() {
    const codeToCopy = `
    Image Source Link: 
    ------------------
    https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

    RenderCode File Link:
    ---------------------
    https://drive.google.com/file/d/1ERNMajtMFDaEufHqiH8_HB0AC3T6KKL0/view?usp=drive_link

    `;
    navigator.clipboard.writeText(codeToCopy)
  }


  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='py-[3rem] bg-blue-100'>
        <h1 className=' w-[95%] mx-auto text-3xl font-bold'>Trending News</h1>
        <div className='pt-[1rem] w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem]'>
          {
            trendingNews.map((data: any, i: number) => (
              <NewsCard key={i} image={data.image}
                date={data.date} title={data.title} height={data.height}
              />
            ))
          }
        </div>
      </div>

      <div>

        <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
          <DialogBox />
        </div>
      </div>

    </div>
  )
}

export default Two_UI_Component_Sixteen