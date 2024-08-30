'use client'
import Image from "next/image";
import { DialogBox } from "./DialogBox";

export function ComponentSeven() {
    function handelCodeCopy() {
        const codeToCopy = `

        Image Source Link: 
        ------------------
        https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images


            <div className="bg-white flex justify-center items-center p-4 md:p-10">
                <div>
                    <h1 className="text-center text-black text-4xl">Our Products</h1>
                    <div className="flex justify-center items-center py-4">
                        <p className="w-full md:w-[40rem] text-center text-black">
                            With our great selection of dishes from all over the world you can feel yourself as a traveler and true gourmet! Image from
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                            <div className="hover:transform hover:scale-110 transition-transform hover:cursor-pointer duration-300 ease-in-out">
                                <Image src={"/images-5.png"} width={500} height={500} alt="dkl" className="md:w-full w-[14rem] object-cover" />
                            </div>
                            <div className="hover:transform hover:scale-110 transition-transform hover:cursor-pointer duration-300 ease-in-out">
                                <Image src={"/images-6.png"} width={500} height={500} alt="dkl" className="md:w-full w-[14rem] object-cover" />
                            </div>
                            <div className="hover:transform hover:scale-110 transition-transform hover:cursor-pointer duration-300 ease-in-out">
                                <Image src={"/images-7.png"} width={500} height={500} alt="dkl" className="md:w-full w-[14rem] object-cover" />
                            </div>
                            <div className="hover:transform hover:scale-110 transition-transform hover:cursor-pointer duration-300 ease-in-out">
                                <Image src={"/images-8.png"} width={500} height={500} alt="dkl" className="md:w-full w-[14rem] object-cover" />
                            </div>
                            <div className="hover:transform hover:scale-110 transition-transform hover:cursor-pointer duration-300 ease-in-out">
                                <Image src={"/images-9.png"} width={500} height={500} alt="dkl" className="md:w-full w-[14rem] object-cover" />
                            </div>
                            <div className="hover:transform hover:scale-110 transition-transform hover:cursor-pointer duration-300 ease-in-out">
                                <Image src={"/images-10.png"} width={500} height={500} alt="dkl" className="md:w-full w-[14rem] object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;
        navigator.clipboard.writeText(codeToCopy)
    }
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8" >
            <div className="bg-white flex justify-center items-center p-4 md:p-10">
                <div>
                    <h1 className="text-center text-black text-4xl">Our Products</h1>
                    <div className="flex justify-center items-center py-4">
                        <p className="w-full md:w-[40rem] text-center text-black">
                            With our great selection of dishes from all over the world you can feel yourself as a traveler and true gourmet! Image from
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                            <div className="hover:transform hover:scale-110 transition-transform hover:cursor-pointer duration-300 ease-in-out">
                                <Image src={"/images-5.png"} width={500} height={500} alt="dkl" className="md:w-full w-[14rem] object-cover" />
                            </div>
                            <div className="hover:transform hover:scale-110 transition-transform hover:cursor-pointer duration-300 ease-in-out">
                                <Image src={"/images-6.png"} width={500} height={500} alt="dkl" className="md:w-full w-[14rem] object-cover" />
                            </div>
                            <div className="hover:transform hover:scale-110 transition-transform hover:cursor-pointer duration-300 ease-in-out">
                                <Image src={"/images-7.png"} width={500} height={500} alt="dkl" className="md:w-full w-[14rem] object-cover" />
                            </div>
                            <div className="hover:transform hover:scale-110 transition-transform hover:cursor-pointer duration-300 ease-in-out">
                                <Image src={"/images-8.png"} width={500} height={500} alt="dkl" className="md:w-full w-[14rem] object-cover" />
                            </div>
                            <div className="hover:transform hover:scale-110 transition-transform hover:cursor-pointer duration-300 ease-in-out">
                                <Image src={"/images-9.png"} width={500} height={500} alt="dkl" className="md:w-full w-[14rem] object-cover" />
                            </div>
                            <div className="hover:transform hover:scale-110 transition-transform hover:cursor-pointer duration-300 ease-in-out">
                                <Image src={"/images-10.png"} width={500} height={500} alt="dkl" className="md:w-full w-[14rem] object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
                <DialogBox />
            </div>
        </div >
    )
}