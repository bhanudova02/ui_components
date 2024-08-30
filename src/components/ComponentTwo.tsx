'use client'
import { FaRegEdit } from "react-icons/fa";
import { DialogBox } from "./DialogBox";
export function ComponentTwo() {


    function handelCodeCopy() {
        const codeToCopy = `
        react-icons import
        ------------------
        import { FaRegEdit } from "react-icons/fa";

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow rounded mx-auto pb-4 lg:pb-8 w-full">
                <h2 className="p-4 lg:p-8 text-lg leading-4 font-bold text-color">Approved Payment Modes</h2>
                <div className="relative bg-gray-100 flex  rounded mx-4 lg:mx-8 mb-4">
                    <div className="border-r border-gray-200 flex items-center justify-center">
                        <div className="w-20 h-20 px-4 py-5">
                            <img className="w-full h-full object-contain"
                                src="https://cdn-icons-png.freepik.com/512/3938/3938041.png?uid=R135282445&ga=GA1.1.1797024347.1693472375" alt="master-card" />
                        </div>
                    </div>
                    <div className="flex pl-4 py-4 lg:py-3 justify-between w-full">
                        <div className="flex flex-col h-full justify-center">
                            <h4 className="mb-2 lg:mb-1 text-sm leading-3 font-bold text-gray-800">Ending with 4242
                            </h4>
                            <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                <p className="text-xs leading-5 font-normal text-gray-800">Expires 06/21 -</p>
                                <p className="text-xs leading-5 font-normal text-gray-800">Last updated on 14 March
                                    2020</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-5 h-5 absolute inset-0 m-auto mt-3 lg:mt-4 mr-2 lg:mr-4 text-gray-600 hover:text-indigo-600 cursor-pointer">
                        <FaRegEdit />
                    </div>
                </div>
                <div className="relative bg-gray-100 flex rounded mx-4 lg:mx-8 mb-4">
                    <div className="border-r border-gray-200 flex items-center justify-center">
                        <div className="w-20 h-20 px-4 py-5">
                            <img className="w-full h-full object-contain"
                                src="https://cdn-icons-png.freepik.com/512/356/356066.png?uid=R135282445&ga=GA1.1.1797024347.1693472375" alt="master-card" />
                        </div>
                    </div>
                    <div className="flex pl-4 py-4 lg:py-3 justify-between w-full">
                        <div className="flex flex-col h-full justify-center">
                            <h4 className="mb-2 lg:mb-1 text-sm leading-3 font-bold text-gray-800">Ending with 4242
                            </h4>
                            <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                <p className="text-xs leading-5 font-normal text-gray-800">Expires 06/21 -</p>
                                <p className="text-xs leading-5 font-normal text-gray-800">Last updated on 14 March
                                    2020</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-5 h-5 absolute inset-0 m-auto mt-3 lg:mt-4 mr-2 lg:mr-4 text-gray-600 hover:text-indigo-600 cursor-pointer">
                        <FaRegEdit />
                    </div>
                </div>
                <div className="relative bg-gray-100 flex rounded mx-4 lg:mx-8">
                    <div className="border-r border-gray-200 flex items-center justify-center">
                        <div className="w-20 h-20 px-4 py-5">
                            <img className="w-full h-full obcon"
                                src="https://cdn-icons-png.freepik.com/512/889/889179.png?uid=R135282445&ga=GA1.1.1797024347.1693472375" alt="master-card" />
                        </div>
                    </div>
                    <div className="flex pl-4 py-4 lg:py-3 justify-between w-full">
                        <div className="flex flex-col h-full justify-center">
                            <h4 className="mb-2 lg:mb-1 text-sm leading-3 font-bold text-gray-800">Ending with 4242
                            </h4>
                            <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                <p className="text-xs leading-5 font-normal text-gray-800">Expires 06/21 -</p>
                                <p className="text-xs leading-5 font-normal text-gray-800">Last updated on 14 March
                                    2020</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-5 h-5 absolute inset-0 m-auto mt-3 lg:mt-4 mr-2 lg:mr-4 text-gray-600 hover:text-indigo-600 cursor-pointer">
                        <FaRegEdit />
                    </div>
                </div>
            </div>
        </div>`;
        navigator.clipboard.writeText(codeToCopy)
    }


    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow rounded pb-4 lg:pb-8 w-full">
                <h2 className="p-4 lg:p-8 text-lg leading-4 font-bold text-color">Approved Payment Modes</h2>
                <div className="relative bg-gray-100 flex  rounded mx-4 lg:mx-8 mb-4">
                    <div className="border-r border-gray-200 flex items-center justify-center">
                        <div className="w-20 h-20 px-4 py-5">
                            <img className="w-full h-full object-contain"
                                src="https://cdn-icons-png.freepik.com/512/3938/3938041.png?uid=R135282445&ga=GA1.1.1797024347.1693472375" alt="master-card" />
                        </div>
                    </div>
                    <div className="flex pl-4 py-4 lg:py-3 justify-between w-full">
                        <div className="flex flex-col h-full justify-center">
                            <h4 className="mb-2 lg:mb-1 text-sm leading-3 font-bold text-gray-800">Ending with 4242
                            </h4>
                            <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                <p className="text-xs leading-5 font-normal text-gray-800">Expires 06/21 -</p>
                                <p className="text-xs leading-5 font-normal text-gray-800">Last updated on 14 March
                                    2020</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-5 h-5 absolute inset-0 m-auto mt-3 lg:mt-4 mr-2 lg:mr-4 text-gray-600 hover:text-indigo-600 cursor-pointer">
                        <FaRegEdit />
                    </div>
                </div>
                <div className="relative bg-gray-100 flex rounded mx-4 lg:mx-8 mb-4">
                    <div className="border-r border-gray-200 flex items-center justify-center">
                        <div className="w-20 h-20 px-4 py-5">
                            <img className="w-full h-full object-contain"
                                src="https://cdn-icons-png.freepik.com/512/356/356066.png?uid=R135282445&ga=GA1.1.1797024347.1693472375" alt="master-card" />
                        </div>
                    </div>
                    <div className="flex pl-4 py-4 lg:py-3 justify-between w-full">
                        <div className="flex flex-col h-full justify-center">
                            <h4 className="mb-2 lg:mb-1 text-sm leading-3 font-bold text-gray-800">Ending with 4242
                            </h4>
                            <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                <p className="text-xs leading-5 font-normal text-gray-800">Expires 06/21 -</p>
                                <p className="text-xs leading-5 font-normal text-gray-800">Last updated on 14 March
                                    2020</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-5 h-5 absolute inset-0 m-auto mt-3 lg:mt-4 mr-2 lg:mr-4 text-gray-600 hover:text-indigo-600 cursor-pointer">
                        <FaRegEdit />
                    </div>
                </div>
                <div className="relative bg-gray-100 flex rounded mx-4 lg:mx-8">
                    <div className="border-r border-gray-200 flex items-center justify-center">
                        <div className="w-20 h-20 px-4 py-5">
                            <img className="w-full h-full object-contain"
                                src="https://cdn-icons-png.freepik.com/512/889/889179.png?uid=R135282445&ga=GA1.1.1797024347.1693472375" alt="master-card" />
                        </div>
                    </div>
                    <div className="flex pl-4 py-4 lg:py-3 justify-between w-full">
                        <div className="flex flex-col h-full justify-center">
                            <h4 className="mb-2 lg:mb-1 text-sm leading-3 font-bold text-gray-800">Ending with 4242
                            </h4>
                            <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                <p className="text-xs leading-5 font-normal text-gray-800">Expires 06/21 -</p>
                                <p className="text-xs leading-5 font-normal text-gray-800">Last updated on 14 March
                                    2020</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-5 h-5 absolute inset-0 m-auto mt-3 lg:mt-4 mr-2 lg:mr-4 text-gray-600 hover:text-indigo-600 cursor-pointer">
                        <FaRegEdit />
                    </div>
                </div>
            </div>

            <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-90 w-fit font-medium text-white rounded-md">
                <DialogBox />
            </div>
        </div>
    )
}