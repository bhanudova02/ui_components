'use client'

import { IoIosStar, IoIosStarHalf } from "react-icons/io"
import { DialogBox } from "./DialogBox"

export function ComponentSix() {
    function handelCodeCopy(){
        const copyToCode = `
                
    React-Icons
    -----------
    import { IoIosStar, IoIosStarHalf } from "react-icons/io"



     Cards Data
     ----------   
    const cardData = [
         { imgSrc: 'https://tuk-cdn.s3.amazonaws.com/assets/templates/Education-Portal/ep_9.png', subTitle: 'Marketing & Sales', title: 'Digital Marketing and Social Media', price: '$129' },
         { imgSrc: 'https://tuk-cdn.s3.amazonaws.com/assets/templates/Education-Portal/ep_10.png', subTitle: 'Development', title: 'Mobile App Development', price: '$199' },
         { imgSrc: 'https://tuk-cdn.s3.amazonaws.com/assets/templates/Education-Portal/ep_11.png', subTitle: 'Development', title: 'Introduction to ecommerce', price: '$49' },
         { imgSrc: 'https://tuk-cdn.s3.amazonaws.com/assets/templates/Education-Portal/ep_12.png', subTitle: 'Marketing & Sales', title: 'Complete Course on Digital Marketing', price: '$299' },
         { imgSrc: 'https://tuk-cdn.s3.amazonaws.com/assets/templates/Education-Portal/ep_13.png', subTitle: 'Development', title: 'Introduction to VR Development', price: '$198' },
         { imgSrc: 'https://tuk-cdn.s3.amazonaws.com/assets/templates/Education-Portal/ep_14.png', subTitle: 'Development', title: 'Build a Career in IOT', price: '$99' },
         { imgSrc: 'https://tuk-cdn.s3.amazonaws.com/assets/templates/Education-Portal/ep_15.png', subTitle: 'Marketing & Sales', title: 'Crash course on Big Data', price: '$79' },
         { imgSrc: 'https://tuk-cdn.s3.amazonaws.com/assets/templates/Education-Portal/ep_16.png', subTitle: 'Workplace', title: 'Emotional Intelligence at Work', price: '$102' },
     ]

        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4 px-8 bg-[#F3F4F6]">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-12 gap-8">
                    {cardData.map((card, index) =>
                        <div key={index}>
                            <div className="bg-white shadow border border-gray-200 rounded transition duration-150 ease-in-out hover:shadow-lg cursor-pointer">
                                <div className="relative w-full h-40">
                                    <img className="rounded-t z-0 w-full h-full absolute inset-0 object-cover" src={card.imgSrc} alt={card.imgSrc} />
                                </div>
                                <div className="pt-5 w-full h-full">
                                    <div className="px-5 items-center justify-between mb-4">
                                        <p className="text-yellow-400 leading-3 tracking-normal text-sm font-normal">
                                            {card.subTitle}
                                        </p>
                                    </div>
                                    <h4 className="px-5 text-lg leading-5 font-bold h-[60px] tracking-normal text-gray-800 mb-2">
                                        {card.title}
                                    </h4>
                                    <p className="px-5 text-gray-600 text-sm font-normal tracking-normal leading-5 mb-4">
                                        12 Modules by<a href="#" className="text-yellow-400"> Silene Cox</a>
                                    </p>
                                    <div className="py-4 px-5 flex justify-between border-t border-gray-300">
                                        <p className="text-yellow-400 text-lg font-bold leading-5 tracking-normal">
                                            {card.price}
                                        </p>
                                        <div className="flex items-center">
                                            <IoIosStar className="text-yellow-400" />
                                            <IoIosStar className="text-yellow-400" />
                                            <IoIosStar className="text-yellow-400" />
                                            <IoIosStar className="text-yellow-400" />
                                            <IoIosStarHalf className="text-gray-200"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        `;
        navigator.clipboard.writeText(copyToCode)
    }
    const cardData = [
        { imgSrc: 'https://tuk-cdn.s3.amazonaws.com/assets/templates/Education-Portal/ep_9.png', subTitle: 'Marketing & Sales', title: 'Digital Marketing and Social Media', price: '$129' },
        { imgSrc: 'https://tuk-cdn.s3.amazonaws.com/assets/templates/Education-Portal/ep_10.png', subTitle: 'Development', title: 'Mobile App Development', price: '$199' },
        { imgSrc: 'https://tuk-cdn.s3.amazonaws.com/assets/templates/Education-Portal/ep_11.png', subTitle: 'Development', title: 'Introduction to ecommerce', price: '$49' },
        { imgSrc: 'https://tuk-cdn.s3.amazonaws.com/assets/templates/Education-Portal/ep_12.png', subTitle: 'Marketing & Sales', title: 'Complete Course on Digital Marketing', price: '$299' },
        { imgSrc: 'https://tuk-cdn.s3.amazonaws.com/assets/templates/Education-Portal/ep_13.png', subTitle: 'Development', title: 'Introduction to VR Development', price: '$198' },
        { imgSrc: 'https://tuk-cdn.s3.amazonaws.com/assets/templates/Education-Portal/ep_14.png', subTitle: 'Development', title: 'Build a Career in IOT', price: '$99' },
        { imgSrc: 'https://tuk-cdn.s3.amazonaws.com/assets/templates/Education-Portal/ep_15.png', subTitle: 'Marketing & Sales', title: 'Crash course on Big Data', price: '$79' },
        { imgSrc: 'https://tuk-cdn.s3.amazonaws.com/assets/templates/Education-Portal/ep_16.png', subTitle: 'Workplace', title: 'Emotional Intelligence at Work', price: '$102' },
    ]
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4 px-8 bg-[#F3F4F6]">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-12 gap-8">
                    {cardData.map((card, index) =>
                        <div key={index}>
                            <div className="bg-white shadow border border-gray-200 rounded transition duration-150 ease-in-out hover:shadow-lg cursor-pointer">
                                <div className="relative w-full h-40">
                                    <img className="rounded-t z-0 w-full h-full absolute inset-0 object-cover" src={card.imgSrc} alt={card.imgSrc} />
                                </div>
                                <div className="pt-5 w-full h-full">
                                    <div className="px-5 items-center justify-between mb-4">
                                        <p className="text-yellow-400 leading-3 tracking-normal text-sm font-normal">
                                            {card.subTitle}
                                        </p>
                                    </div>
                                    <h4 className="px-5 text-lg leading-5 font-bold h-[60px] tracking-normal text-gray-800 mb-2">
                                        {card.title}
                                    </h4>
                                    <p className="px-5 text-gray-600 text-sm font-normal tracking-normal leading-5 mb-4">
                                        12 Modules by<a href="#" className="text-yellow-400"> Silene Cox</a>
                                    </p>
                                    <div className="py-4 px-5 flex justify-between border-t border-gray-300">
                                        <p className="text-yellow-400 text-lg font-bold leading-5 tracking-normal">
                                            {card.price}
                                        </p>
                                        <div className="flex items-center">
                                            <IoIosStar className="text-yellow-400" />
                                            <IoIosStar className="text-yellow-400" />
                                            <IoIosStar className="text-yellow-400" />
                                            <IoIosStar className="text-yellow-400" />
                                            <IoIosStarHalf className="text-gray-200" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
                <DialogBox />
            </div>
        </div>
    )
}