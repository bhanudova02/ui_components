"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardComponent from './CardComponent';
import { DialogBox } from '@/components/DialogBox';

const Two_UI_Component_Thirteen = () => {

  const responsiveMultiCard = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      sidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      sidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      sidesToSlide: 1
    }
  }

  const cardGamesData = [
    { id: 1, title: "Title One", images: "/avatar-1.png", review: "6", price: "20.00$" },
    { id: 2, title: "Title Two", images: "/avatar-2.png", review: "6", price: "20.00$" },
    { id: 3, title: "Title Three", images: "/avatar-3.png", review: "6", price: "20.00$" },
    { id: 4, title: "Title Four", images: "/avatar-4.png", review: "6", price: "20.00$" },
    { id: 5, title: "Title Five", images: "/avatar-5.png", review: "6", price: "20.00$" },
    { id: 6, title: "Title Six", images: "/avatar-1.png", review: "6", price: "20.00$" },
    { id: 7, title: "Title Seven", images: "/avatar-2.png", review: "6", price: "20.00$" },
    { id: 8, title: "Title Eight", images: "/avatar-3.png", review: "6", price: "20.00$" }
  ];



  function handelCodeCopy() {
    const codeToCopy = `
  Image Source Link: 
  ------------------
  https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

  How To Create Card:
  -------------------
  install packages
----------------
> npm i react-multi-carousel

*After Installing Create One File 'CardComponent.tsx'

CardComponent.tsx
-----------------
import Image from "next/image";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

interface cardGamesDataTypes {
    id: number;
    title: string;
    images: string;
    price: string;
    review: string,
}

const CardComponent = ({ title, images, price, review }: cardGamesDataTypes) => {
    return <div className="bg-white p-6 rounded-lg m-3">
        {/* Image */}
        <div className="w-[200px] mx-auto h-[200px]">
            <Image
                src={images}
                width={200}
                height={200}
                alt={title}
                className="w-[100%] h-[100%] object-cover"
            />
        </div>
        <h1 className="mt-[1.3rem] text-[22px] text-black font-semibold">{title}</h1>
        <div className="flex items-center mt-[0.5rem] space-x-3">
            <div className="flex items-center">
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
            </div>
            <div className="text-black opacity-80">
                ({review})
            </div>
        </div>
        <p className="mt-[0.5rem] text-black opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex mt-[1.4rem] items-center justify-between">
            <h1 className="text-[25px] font-bold text-red-600">{price}</h1>
            <button className="px-4 py-2 hover:bg-green-700 transition-all duration-200 bg-orange-600 flex items-center rounded-md text-white">
                <BiShoppingBag className="w-[1.3rem] h-[1.3rem]" />
            </button>
        </div>
    </div>
}

export default CardComponent;




*Create One More Component 'Two_UI_Component_Thirteen.tsx'

Two_UI_Component_Thirteen.tsx
-----------------------------
"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardComponent from './CardComponent';

const Two_UI_Component_Thirteen = () => {

  const responsiveMultiCard = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      sidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      sidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      sidesToSlide: 1
    }
  }

  const cardGamesData = [
    { id: 1, title: "Title One", images: "/avatar-1.png", review: "6", price: "20.00$" },
    { id: 2, title: "Title Two", images: "/avatar-2.png", review: "6", price: "20.00$" },
    { id: 3, title: "Title Three", images: "/avatar-3.png", review: "6", price: "20.00$" },
    { id: 4, title: "Title Four", images: "/avatar-4.png", review: "6", price: "20.00$" },
    { id: 5, title: "Title Five", images: "/avatar-5.png", review: "6", price: "20.00$" },
    { id: 6, title: "Title Six", images: "/avatar-1.png", review: "6", price: "20.00$" },
    { id: 7, title: "Title Seven", images: "/avatar-2.png", review: "6", price: "20.00$" },
    { id: 8, title: "Title Eight", images: "/avatar-3.png", review: "6", price: "20.00$" }
  ];



  return (
    <div className='container mx-auto'>
      <div className='bg-green-100'>
        <div className="pt-[3rem] pb-[3rem]">
          <h1 className="text-center text-4xl font-bold">
            GIVE THE CARD <span className="text-red-600">RELATED TITLE</span>
          </h1>
          <div className='w-[90%] mt-[1rem] mx-auto'>
            <Carousel
              additionalTransfrom={0}
              arrows={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              centerMode={false}
              infinite
              responsive={responsiveMultiCard}
              itemClass='item'
              showDots={false}
            >
              {
                cardGamesData.map((game) => (
                  <CardComponent key={game.id} id={game.id} title={game.title} images={game.images} review={game.review} price={game.price} />
                ))
              }
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Two_UI_Component_Thirteen

  

  `;
    navigator.clipboard.writeText(codeToCopy)
  }


  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='bg-green-100'>
        <div className="pt-[3rem] pb-[3rem]">
          <h1 className="text-center text-4xl font-bold">
            GIVE THE CARD <span className="text-red-600">RELATED TITLE</span>
          </h1>
          <div className='w-[90%] mt-[1rem] mx-auto'>
            <Carousel
              additionalTransfrom={0}
              arrows={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              centerMode={false}
              infinite
              responsive={responsiveMultiCard}
              itemClass='item'
              showDots={false}
            >
              {
                cardGamesData.map((game) => (
                  <CardComponent key={game.id} id={game.id} title={game.title} images={game.images} review={game.review} price={game.price} />
                ))
              }
            </Carousel>
          </div>
        </div>
      </div>


      <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
        <DialogBox />
      </div>
    </div>
  )
}

export default Two_UI_Component_Thirteen