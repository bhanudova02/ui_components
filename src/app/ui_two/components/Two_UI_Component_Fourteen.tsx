"use client"
import React from 'react'
import Image from "next/image";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";
import { DialogBox } from '@/components/DialogBox';

const Two_UI_Component_Fourteen = () => {
  const deliveryInfo = {
    heading: "Your",
    spanHeading: "Favorite Burger",
    endHeading: "On The Way",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis optio repudiandae porro, suscipit explicabo distinctio molestias repellendus provident cumque illo, ea perspiciatis, iusto reiciendis. Doloribus suscipit nostrum voluptates odio animi.",
    imgSrc: "/delivery.2908e1b4.svg",
    services: [
      { icon: "RiEBike2Fill", text: "Delivery in 30 minutes", margin: 'flex items-center space-x-3 mt-[2rem]' },
      { icon: "IoFastFood", text: "Free shipping from 50$", margin: 'flex items-center space-x-3 mt-[1rem]' },
      { icon: "BsDoorOpen", text: "Delivery on your Doorstep", margin: 'flex items-center space-x-3 mt-[1rem]' },
    ]
  }


  function getIcon(iconName: any) {
    switch (iconName) {
      case "RiEBike2Fill":
        return <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />;
      case "IoFastFood":
        return <IoFastFood className="w-[2rem] h-[2rem] text-red-600" />;
      case "BsDoorOpen":
        return <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600" />;
      default:
        return null;
    }
  }


  function handelCodeCopy() {
    const codeToCopy = `
    Image Source Link: 
    ------------------
    https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

    Slide Create Code:
    ------------------
    Install Packages
-----------------
> npm i aos
> npm i --save-dev @types/aos



main page.tsx
-------------

'use client'
import { useEffect } from "react";
import Two_UI_Component_Fourteen from "./components/Two_UI_Component_Fourteen";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    const initAos = async () => {
      await import('aos')
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-center'
      })
    };
    initAos();
  }, [])

  return (
    <div className="pt-24 pb-14 bg-black/50 space-y-16" >
      <Two_UI_Component_Fourteen />
    </div>
  );
}



Two_UI_Component_Fourteen.tsx
------------------------------
import React from 'react'
import Image from "next/image";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";

const Two_UI_Component_Fourteen = () => {

  const deliveryInfo = {
    heading: "Your",
    spanHeading: "Favorite Burger",
    endHeading: "On The Way",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis optio repudiandae porro, suscipit explicabo distinctio molestias repellendus provident cumque illo, ea perspiciatis, iusto reiciendis. Doloribus suscipit nostrum voluptates odio animi.",
    imgSrc: "/delivery.2908e1b4.svg",
    services: [
      { icon: "RiEBike2Fill", text: "Delivery in 30 minutes", margin: 'flex items-center space-x-3 mt-[2rem]' },
      { icon: "IoFastFood", text: "Free shipping from 50$", margin: 'flex items-center space-x-3 mt-[1rem]' },
      { icon: "BsDoorOpen", text: "Delivery on your Doorstep", margin: 'flex items-center space-x-3 mt-[1rem]' },
    ]
  }



  function getIcon(iconName: any) {
    switch (iconName) {
      case "RiEBike2Fill":
        return <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />;
      case "IoFastFood":
        return <IoFastFood className="w-[2rem] h-[2rem] text-red-600" />;
      case "BsDoorOpen":
        return <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600" />;
      default:
        return null;
    }
  }

  return (
    <div>
      <div className="pt-[8rem] pb-[3rem] bg-[#EEEEEE]">
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem] items-center">
          <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <Image src={deliveryInfo.imgSrc} alt={deliveryInfo.imgSrc} width={1000} height={1000} />
          </div>
          <div data-aos="zoom-in" data-aso-delay="200" data-aos-anchor-placement="top-center">
            <h1 className="uppercase text-[30px] md:text-[40px] lg:text[30px] xl:text-[40px] font-bold leading-[3rem] md:leading-[4rem]">
              {deliveryInfo.heading} <span className="text-red-600">{deliveryInfo.spanHeading}</span> {deliveryInfo.endHeading}
            </h1>
            <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
              {deliveryInfo.description}
            </p>
            {
              deliveryInfo.services.map((service: any, index: number) => (
                <div key={index} className={service.margin}>
                  {getIcon(service.icon)}
                  <h1 className="text-[18px] text-black font-medium">{service.text}</h1>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Two_UI_Component_Fourteen




    `;
    navigator.clipboard.writeText(codeToCopy)
  }



  return (
    <div className="container mx-auto">
      <div className="pt-[8rem] pb-[3rem] bg-[#EEEEEE]">
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem] items-center">
          <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <Image src={deliveryInfo.imgSrc} alt={deliveryInfo.imgSrc} width={1000} height={1000} />
          </div>
          <div data-aos="zoom-in" data-aso-delay="200" data-aos-anchor-placement="top-center">
            <h1 className="uppercase text-[30px] md:text-[40px] lg:text[30px] xl:text-[40px] font-bold leading-[3rem] md:leading-[4rem]">
              {deliveryInfo.heading} <span className="text-red-600">{deliveryInfo.spanHeading}</span> {deliveryInfo.endHeading}
            </h1>
            <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
              {deliveryInfo.description}
            </p>
            {
              deliveryInfo.services.map((service: any, index: number) => (
                <div key={index} className={service.margin}>
                  {getIcon(service.icon)}
                  <h1 className="text-[18px] text-black font-medium">{service.text}</h1>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
        <DialogBox />
      </div>
    </div>
  )
}

export default Two_UI_Component_Fourteen


