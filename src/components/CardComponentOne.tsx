'use client'
import { RiDiscountPercentLine } from "react-icons/ri";
import { DialogBox } from "./DialogBox";
import { LuMousePointerClick } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { GoBrowser } from "react-icons/go";
export function CardComponentOne() {

    function handelCodeCopy() {
        const codeToCopy = `
        
        react-icons import
        ------------------
        import { RiDiscountPercentLine } from "react-icons/ri";
        import { DialogBox } from "./DialogBox";
        import { LuMousePointerClick } from "react-icons/lu";
        import { CiUser } from "react-icons/ci";
        import { GoBrowser } from "react-icons/go";

        Copy Code
        ---------
        
        <div className="container mx-auto  w-full px-8">
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">
                <div className="bg-white rounded shadow pl-6 px-2  py-6 flex items-center">
                    <div className="p-4 bg-[#4299e1] rounded">
                        <RiDiscountPercentLine className="text-white text-3xl" />
                    </div>
                    <div className="ml-4">
                        <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">2,330</h3>
                        <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Posts Made</p>
                    </div>
                </div>
                <div className="bg-white rounded shadow pl-6 px-2  py-6 flex items-center">
                    <div className="p-4 bg-[#4299e1] rounded text-white">
                        <LuMousePointerClick className="text-2xl" />
                    </div>
                    <div className="ml-4">
                        <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">12%</h3>
                        <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Click Rate</p>
                    </div>
                </div>
                <div className="bg-white rounded shadow pl-6 px-2  py-6 flex items-center">
                    <div className="p-4 bg-[#4299e1] rounded text-white">
                        <CiUser className="text-white text-2xl" />
                    </div>
                    <div className="ml-4">
                        <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">3245</h3>
                        <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Subscribers</p>
                    </div>
                </div>
                <div className="bg-white rounded shadow pl-6 px-2  py-6 flex items-center">
                    <div className="p-4 bg-[#4299e1] rounded text-white">
                        <GoBrowser className="text-white text-[20px]"/>
                    </div>
                    <div className="ml-4">
                        <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">$1245</h3>
                        <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Profit Earned</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        navigator.clipboard.writeText(codeToCopy)
    }

    return (
        <div className="container mx-auto  w-full px-8">
            <div className=" p-4 rounded-md shadow shadow-white">
                <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">
                    <div className="bg-white rounded shadow pl-6 px-2  py-6 flex items-center">
                        <div className="p-4 bg-[#4299e1] rounded">
                            <RiDiscountPercentLine className="text-white text-3xl" />
                        </div>
                        <div className="ml-4">
                            <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">2,330</h3>
                            <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Posts Made</p>
                        </div>
                    </div>
                    <div className="bg-white rounded shadow pl-6 px-2  py-6 flex items-center">
                        <div className="p-4 bg-[#4299e1] rounded text-white">
                            <LuMousePointerClick className="text-2xl" />
                        </div>
                        <div className="ml-4">
                            <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">12%</h3>
                            <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Click Rate</p>
                        </div>
                    </div>
                    <div className="bg-white rounded shadow pl-6 px-2  py-6 flex items-center">
                        <div className="p-4 bg-[#4299e1] rounded text-white">
                            <CiUser className="text-white text-2xl" />
                        </div>
                        <div className="ml-4">
                            <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">3245</h3>
                            <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Subscribers</p>
                        </div>
                    </div>
                    <div className="bg-white rounded shadow pl-6 px-2  py-6 flex items-center">
                        <div className="p-4 bg-[#4299e1] rounded text-white">
                            <GoBrowser className="text-white text-[20px]" />
                        </div>
                        <div className="ml-4">
                            <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">$1245</h3>
                            <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Profit Earned</p>
                        </div>
                    </div>
                </div>
                <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
                    <DialogBox />
                </div>
            </div>
        </div>
    )
}