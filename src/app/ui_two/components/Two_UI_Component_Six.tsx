"use client"
import { DialogBox } from '@/components/DialogBox';
import Image from 'next/image';
import React from 'react'

const Two_UI_Component_Six = () => {

  const expertiseTitle = [{ id: 1, title: 'We have expertise in these areas' }]
  const expertiseBox = [
    { id: 1, image: '/fertilizer_card1.jpg', title: 'Heading One', paragraph: 'fertilizers are essential to modern agriculture, providing crops with the precise nutrients they need to thrive. Their manufacturing process is a marvel of engineering, ensuring that each batch is nutrient-rich and effective, ultimately contributing to the growth and prosperity of farmers and agricultural communities worldwide.' },
    { id: 2, image: '/fertilizer_card2.jpg', title: 'Heading Two', paragraph: 'The journey of crafting fertilizers lies in the meticulous procurement of essential raw materials. This crucial phase involves sourcing a variety of vital components, with common examples including ammonia, sulfur, phosphate rock, and potash, among others. The quality and availability of these raw materials form the foundation upon which the entire process of fertilizer production depends, ensuring the consistent and reliable supply of nutrients vital to modern agriculture.' },
    { id: 3, image: '/fertilizer_card3.jpg', title: 'Heading Three', paragraph: 'In this crucial stage of fertilizer production, precision is paramount. Mixing and blending operations combine the various nutrient compounds and raw materials to create homogeneous and balanced fertilizer formulations. This meticulous process ensures that each fertilizer batch delivers a harmonious blend of essential nutrients, tailored to provide crops with precisely what they need for optimal growth and yield.' },
    { id: 4, image: '/fertilizer_card4.jpg', title: 'Heading Four', paragraph: 'During the chemical processing phase, undergo intricate transformations to yield the desired nutrient compounds critical for synthetic fertilizers. For instance, ammonia can be harnessed to create urea, a prevalent nitrogen-based synthetic fertilizer. Additionally, phosphate rock can be subjected to sulfuric acid treatment, resulting in the formation of phosphate fertilizers, all pivotal steps in crafting fertilizers tailored to meet the precise nutrient needs of crops.' },
    { id: 5, image: '/fertilizer_card5.jpg', title: 'Heading Five', paragraph: ' Granulation is a crucial step in fertilizer production, where the homogeneous fertilizer mixture is transformed into manageable pellets or granules. These granules offer advantages like improved handling, controlled nutrient release, reduced dust, and uniform nutrient distribution, making them a preferred choice for farmers. Various techniques, such as rotary drum granulation and prilling, are employed to achieve this transformation, enhancing the convenience and effectiveness of delivering essential nutrients to crops.' },
    { id: 6, image: '/fertilizer_card6.jpg', title: 'Heading Six', paragraph: 'The fertilizer production process, the granulated fertilizer is meticulously dried to reduce moisture content, with precise temperature control being paramount to the success of the operation. Following drying, the fertilizer is then carefully cooled to a specific temperature, ensuring optimal product stability for storage and transportation. These temperature-controlled processes are essential to maintain the quality.' },
    { id: 7, image: '/fertilizer_card7.jpg', title: 'Heading Seven', paragraph: 'The processes of sorting and separating fertilizer particles into different sizes or grades. This is done to ensure that the fertilizer is uniform and meets specific quality standards. During sizing, larger and smaller particles are separated, and during screening, impurities or foreign materials are removed. This helps in producing fertilizers that can be evenly spread and absorbed by plants, ensuring effective and consistent nutrient delivery for better crop growth.' },
    { id: 8, image: '/fertilizer_card8.jpg', title: 'Heading Eight', paragraph: 'Our Packaging facilities and robust distribution network are unparalleled in the industry, allowing us to provide value to the community at every step of the way. The finished fertilizer is packaged into bags, containers, or bulk shipments and distributed to retailers, farmers, or end-users for application.' },
  ]


  function handelCodeCopy() {
    const codeToCopy = `
  Image Source Link: 
  ------------------
  https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

  const expertiseTitle = [{ id: 1, title: 'We have expertise in these areas' }]
  const expertiseBox = [
    { id: 1, image: '/fertilizer_card1.jpg', title: 'Heading One', paragraph: 'fertilizers are essential to modern agriculture, providing crops with the precise nutrients they need to thrive. Their manufacturing process is a marvel of engineering, ensuring that each batch is nutrient-rich and effective, ultimately contributing to the growth and prosperity of farmers and agricultural communities worldwide.' },
    { id: 2, image: '/fertilizer_card2.jpg', title: 'Heading Two', paragraph: 'The journey of crafting fertilizers lies in the meticulous procurement of essential raw materials. This crucial phase involves sourcing a variety of vital components, with common examples including ammonia, sulfur, phosphate rock, and potash, among others. The quality and availability of these raw materials form the foundation upon which the entire process of fertilizer production depends, ensuring the consistent and reliable supply of nutrients vital to modern agriculture.' },
    { id: 3, image: '/fertilizer_card3.jpg', title: 'Heading Three', paragraph: 'In this crucial stage of fertilizer production, precision is paramount. Mixing and blending operations combine the various nutrient compounds and raw materials to create homogeneous and balanced fertilizer formulations. This meticulous process ensures that each fertilizer batch delivers a harmonious blend of essential nutrients, tailored to provide crops with precisely what they need for optimal growth and yield.' },
    { id: 4, image: '/fertilizer_card4.jpg', title: 'Heading Four', paragraph: 'During the chemical processing phase, undergo intricate transformations to yield the desired nutrient compounds critical for synthetic fertilizers. For instance, ammonia can be harnessed to create urea, a prevalent nitrogen-based synthetic fertilizer. Additionally, phosphate rock can be subjected to sulfuric acid treatment, resulting in the formation of phosphate fertilizers, all pivotal steps in crafting fertilizers tailored to meet the precise nutrient needs of crops.' },
    { id: 5, image: '/fertilizer_card5.jpg', title: 'Heading Five', paragraph: ' Granulation is a crucial step in fertilizer production, where the homogeneous fertilizer mixture is transformed into manageable pellets or granules. These granules offer advantages like improved handling, controlled nutrient release, reduced dust, and uniform nutrient distribution, making them a preferred choice for farmers. Various techniques, such as rotary drum granulation and prilling, are employed to achieve this transformation, enhancing the convenience and effectiveness of delivering essential nutrients to crops.' },
    { id: 6, image: '/fertilizer_card6.jpg', title: 'Heading Six', paragraph: 'The fertilizer production process, the granulated fertilizer is meticulously dried to reduce moisture content, with precise temperature control being paramount to the success of the operation. Following drying, the fertilizer is then carefully cooled to a specific temperature, ensuring optimal product stability for storage and transportation. These temperature-controlled processes are essential to maintain the quality.' },
    { id: 7, image: '/fertilizer_card7.jpg', title: 'Heading Seven', paragraph: 'The processes of sorting and separating fertilizer particles into different sizes or grades. This is done to ensure that the fertilizer is uniform and meets specific quality standards. During sizing, larger and smaller particles are separated, and during screening, impurities or foreign materials are removed. This helps in producing fertilizers that can be evenly spread and absorbed by plants, ensuring effective and consistent nutrient delivery for better crop growth.' },
    { id: 8, image: '/fertilizer_card8.jpg', title: 'Heading Eight', paragraph: 'Our Packaging facilities and robust distribution network are unparalleled in the industry, allowing us to provide value to the community at every step of the way. The finished fertilizer is packaged into bags, containers, or bulk shipments and distributed to retailers, farmers, or end-users for application.' },
  ]

  Style.Css
  ---------
    .f-card {
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 1px 3px 4px black;
    position: relative;
  }
  
  .card-Image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .card-body {
    width: 100%;
    height: 100%;
    top: 0;
    right: -100%;
    position: absolute;
    background: #1f3d474d;
    backdrop-filter: blur(10px);
    border-radius: 5px;
    color: #fff;
    padding: 30px;
    transition: 0.9s;
  }
  
  .f-card:hover .card-body {
    right: 0;
  }
  
  .f-card:hover .card-body {
    right: 0;
  }
  


    <div className="bg-[#c3d6c27c] py-10 md:py-20 lg:py-16 ">
        {
          expertiseTitle && expertiseTitle.map(({ id, title }: any) => (
            <div key={id}>
              <h2 className="text-center text-primary-content font-bold text-xl md:text-2xl lg:text-3xl uppercase mb-5 md:mb-14 lg:mb-10 w-[90%] mx-auto">{title}</h2>
            </div>
          ))
        }
        <div className="flex justify-center mb-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {
              expertiseBox && expertiseBox.map(({ id, image, title }: any) => (
                <div key={id}>
                  <div className="f-card hover:cursor-pointer w-[320px] h-[250px] md:w-[350px] md:h-[330px] lg:w-[500px]">
                    <Image src={image} width={1000} height={1000} alt="Card" className="card-Image" />
                    <div className="card-body flex justify-center items-center">
                      <div>
                        <h1 className="card-title text-center text-base md:text-lg lg:text-xl font-extrabold text-white  uppercase mt-[-20px]">{title}</h1>
                        <p className="card-sub-title text-xs md:text-sm lg:md:text-base text-center">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam rem ad ipsum pariatur animi blanditiis cum laborum vel. Cumque quis beatae id maxime perferendis incidunt vero exercitationem earum est? Accusamus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

  `;
    navigator.clipboard.writeText(codeToCopy)
  }

  return (
    <div className='container mx-auto'>
      <div className="bg-[#c3d6c27c] py-10 md:py-20 lg:py-16 ">
        {
          expertiseTitle && expertiseTitle.map(({ id, title }: any) => (
            <div key={id}>
              <h2 className="text-center text-primary-content font-bold text-xl md:text-2xl lg:text-3xl uppercase mb-5 md:mb-14 lg:mb-10 w-[90%] mx-auto">{title}</h2>
            </div>
          ))
        }
        <div className="flex justify-center mb-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {
              expertiseBox && expertiseBox.map(({ id, image, title }: any) => (
                <div key={id}>
                  <div className="f-card hover:cursor-pointer w-[320px] h-[250px] md:w-[350px] md:h-[330px] lg:w-[500px]">
                    <Image src={image} width={1000} height={1000} alt="Card" className="card-Image" />
                    <div className="card-body flex justify-center items-center">
                      <div>
                        <h1 className="card-title text-center text-base md:text-lg lg:text-xl font-extrabold text-white  uppercase mt-[-20px]">{title}</h1>
                        <p className="card-sub-title text-xs md:text-sm lg:md:text-base text-center">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam rem ad ipsum pariatur animi blanditiis cum laborum vel. Cumque quis beatae id maxime perferendis incidunt vero exercitationem earum est? Accusamus.
                        </p>
                      </div>
                    </div>
                  </div>
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

export default Two_UI_Component_Six