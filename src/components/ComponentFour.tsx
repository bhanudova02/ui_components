'use client'
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { GoDownload, GoPlus, GoShareAndroid } from "react-icons/go";
import { HiOutlineInbox } from "react-icons/hi";
import { DialogBox } from "./DialogBox";

export function ComponentFour() {
    function handelToCopy() {
        const codeToCopy = `
Image source
------------
	   https://www.mediafire.com/file/1eoeg7pvm20ig60/images-12.png/file,
	   https://www.mediafire.com/file/t2nn46ssb5g7xg9/images-14.png/file,
	   https://www.mediafire.com/file/0cx7tcj7m6cz0hm/images-5.png/file,
	   https://www.mediafire.com/file/8rutmv78tj2w293/images-10.png/file,
	   https://www.mediafire.com/file/fkip31w9dznqar7/images-9.png/file,
	   https://www.mediafire.com/file/8fq0py4p81b79v2/images-6.png/file,
	   https://www.mediafire.com/file/uzepfkdttuv7e51/images-15.png/file,
	   https://www.mediafire.com/file/mpt059o9w4it755/images-13.png/file,
	   https://www.mediafire.com/file/y79srk1eg2sceky/images-8.png/file,
	   https://www.mediafire.com/file/1g7rrb7qscdni05/images-7.png/file,
	   https://www.mediafire.com/file/wbggg9bwchqghqw/images-11.png/file,

React-Icons
-----------
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { GoDownload, GoPlus, GoShareAndroid } from "react-icons/go";
import { HiOutlineInbox } from "react-icons/hi";


Images List Data
 ----------------
 const [listImages] = useState([
        "images-5.png", "images-6.png", "images-7.png", "images-8.png",
        "images-9.png", "images-10.png", "images-11.png", "images-12.png",
        "images-13.png", "images-14.png", "images-15.png", "images-16.png"
    ])

Style.Css
---------
/* shows controls on hover */
.controls {
    opacity: 0;
}
.trigger:hover .controls {
    opacity: 1;
}
.trigger:hover .overlay {
    --bg-opacity: 0.75;
}
 
 <div className="container mx-auto">
            <div className="w-full bg-white py-3 sm:py-6 px-4 sm:px-8 shadow rounded mt-8">
                <div className="mb-6 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between px-8">
                    <h2 className=" text-gray-800 text-lg">Images</h2>
                    <div className="">
                        <div className="flex items-center">
                            <div className="text-gray-600 mx-2 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                <GoShareAndroid className="text-xl" />
                            </div>
                            <div className="text-gray-600 mr-2 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                <GoDownload className="text-xl" />
                            </div>
                            <div className="text-gray-600 mr-2 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                <HiOutlineInbox className="text-xl" />
                            </div>
                            <div className="text-red-500 mr-2 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                <AiOutlineDelete className="text-xl" />
                            </div>
                            <div className="text-white p-1 border-transparent border bg-blue-500 hover:bg-blue-600 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                <GoPlus className="text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6">
                    {listImages.map(imgSrc =>
                        <div key={imgSrc} className="h-56 rounded relative trigger cursor-pointer">
                            <img loading="lazy" className="w-full h-full absolute inset-0 rounded object-cover object-center" src={imgSrc} />
                            <div
                                className="controls transition duration-150 ease-in-out flex items-center absolute top-0 right-0 mr-4 mt-4">
                                <div className="text-white mr-3">
                                    <GoShareAndroid />
                                </div>
                                <div className="text-white mr-3">
                                    <GoDownload />
                                </div>
                                <div className="text-white mr-3">
                                    <HiOutlineInbox />
                                </div>
                                <div className="text-white">
                                    <AiOutlineDelete />
                                </div>
                            </div>
                            <div className=" controls transition duration-150 ease-in-out w-full bg-white py-4 px-3 absolute bottom-0 left-0 right-0 shadow rounded-b">
                                <h5 className="text-gray-700 text-sm font-normal">Boys will be boys.jpg</h5>
                                <div className="flex justify-between items-end text-gray-500">
                                    <p className="text-xs">2.8mb</p>
                                    <BsThreeDots />
                                </div>
                                <div className="flex items-center flex-no-wrap absolute top-0 right-0 -mt-2 mr-3">
                                    <div className="w-5 h-5 bg-cover rounded-md">
                                        <img loading="lazy"
                                            src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png"
                                            alt=""
                                            className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                    </div>
                                    <div className="w-5 h-5 bg-cover rounded-md -ml-2">
                                        <img loading="lazy"
                                            src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_3.png"
                                            alt=""
                                            className="h-full w-full overflow-hidden object-cover object-center rounded-full border-2 border-white shadow" />
                                    </div>
                                    <div className="w-5 h-5 bg-cover rounded-md -ml-2">
                                        <img loading="lazy"
                                            src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_4.png"
                                            alt=""
                                            className="h-full w-full overflow-hidden object-cover object-center rounded-full border-2 border-white shadow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        `
        navigator.clipboard.writeText(codeToCopy)
    }

    const [listImages] = useState([
        "images-5.png", "images-6.png", "images-7.png", "images-8.png",
        "images-9.png", "images-10.png", "images-11.png", "images-12.png",
        "images-13.png", "images-14.png", "images-15.png", "images-16.png"
    ])


    return (
        <div className="container mx-auto">
            <div className="w-full bg-white py-3 sm:py-6 px-4 sm:px-8 shadow rounded mt-8">
                <div className="mb-6 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between px-8">
                    <h2 className=" text-gray-800 text-lg">Images</h2>
                    <div className="">
                        <div className="flex items-center">
                            <div className="text-gray-600 mx-2 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                <GoShareAndroid className="text-xl" />
                            </div>
                            <div className="text-gray-600 mr-2 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                <GoDownload className="text-xl" />
                            </div>
                            <div className="text-gray-600 mr-2 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                <HiOutlineInbox className="text-xl" />
                            </div>
                            <div className="text-red-500 mr-2 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                <AiOutlineDelete className="text-xl" />
                            </div>
                            <div className="text-white p-1 border-transparent border bg-blue-500 hover:bg-blue-600 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                <GoPlus className="text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6">
                    {listImages.map(imgSrc =>
                        <div key={imgSrc} className="h-56 rounded relative trigger cursor-pointer">
                            <img loading="lazy" className="w-full h-full absolute inset-0 rounded object-cover object-center" src={imgSrc} />
                            <div
                                className="controls transition duration-150 ease-in-out flex items-center absolute top-0 right-0 mr-4 mt-4">
                                <div className="text-white mr-3">
                                    <GoShareAndroid />
                                </div>
                                <div className="text-white mr-3">
                                    <GoDownload />
                                </div>
                                <div className="text-white mr-3">
                                    <HiOutlineInbox />
                                </div>
                                <div className="text-white">
                                    <AiOutlineDelete />
                                </div>
                            </div>
                            <div className=" controls transition duration-150 ease-in-out w-full bg-white py-4 px-3 absolute bottom-0 left-0 right-0 shadow rounded-b">
                                <h5 className="text-gray-700 text-sm font-normal">Boys will be boys.jpg</h5>
                                <div className="flex justify-between items-end text-gray-500">
                                    <p className="text-xs">2.8mb</p>
                                    <BsThreeDots />
                                </div>
                                <div className="flex items-center flex-no-wrap absolute top-0 right-0 -mt-2 mr-3">
                                    <div className="w-5 h-5 bg-cover rounded-md">
                                        <img loading="lazy"
                                            src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png"
                                            alt=""
                                            className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                    </div>
                                    <div className="w-5 h-5 bg-cover rounded-md -ml-2">
                                        <img loading="lazy"
                                            src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_3.png"
                                            alt=""
                                            className="h-full w-full overflow-hidden object-cover object-center rounded-full border-2 border-white shadow" />
                                    </div>
                                    <div className="w-5 h-5 bg-cover rounded-md -ml-2">
                                        <img loading="lazy"
                                            src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_4.png"
                                            alt=""
                                            className="h-full w-full overflow-hidden object-cover object-center rounded-full border-2 border-white shadow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div onClick={handelToCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
                <DialogBox />
            </div>
        </div>
    )
}