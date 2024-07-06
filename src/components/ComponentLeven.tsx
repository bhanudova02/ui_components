'use client';
import Image from "next/image";
import { DialogBox } from "./DialogBox";

export function ComponentLeven() {

    function handelCodeCopy() {
        const codeToCopy = `
        Image Source Link: 
        ------------------
        https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="w-full h-[400px]  shadow relative border">
                    <div className="relative w-full h-full">
                        <Image src={'/images-7.png'} width={500} height={500} alt="demo" className="w-full h-full object-cover" />
                        {/* Add overlay div */}
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                            <div className="w-full lg:w-[22rem]">
                                <h3 className="text-white font-bold text-5xl">Infrastructure</h3>
                                <p className="text-white font-semibold mt-2">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Method Two */}

                <div className="w-full h-[400px] border bg-[url('/images-6.png')]">
                    <div className="bg-[rgba(0,0,0,0.8)] h-full w-full flex justify-center items-center">
                        <div className="px-20    md:px-4 text-center">
                            <h3 className="text-white font-bold text-5xl">Infrastructure</h3>
                            <p className="text-white font-semibold mt-2">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        </div>
                    </div>
                </div>

            </div>
    `;
        navigator.clipboard.writeText(codeToCopy)
    }
    return (
        <div className="container mx-auto">

            {/* Method One */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="w-full h-[400px]  shadow relative border">
                    <div className="relative w-full h-full">
                        <Image src={'/images-7.png'} width={500} height={500} alt="demo" className="w-full h-full object-cover" />
                        {/* Add overlay div */}
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                            <div className="w-full lg:w-[22rem]">
                                <h3 className="text-white font-bold text-5xl">Infrastructure</h3>
                                <p className="text-white font-semibold mt-2">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Method Two */}

                <div className="w-full h-[400px] border bg-[url('/images-6.png')]">
                    <div className="bg-[rgba(0,0,0,0.8)] h-full w-full flex justify-center items-center">
                        <div className="px-20    md:px-4 text-center">
                            <h3 className="text-white font-bold text-5xl">Infrastructure</h3>
                            <p className="text-white font-semibold mt-2">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
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