'use client'
import { DialogBox } from "./DialogBox";
export function ComponentOne() {
    function handelCodeCopy() {
        const codeToCopy =
            `
            Copy Code
            ---------

            <div className="w-full rounded shadow bg-white py-8 px-6">
                    <h2 className="text-[#4A5568] text-lg font-bold">Task progress</h2>
                    <div className="my-4 flex items-center">
                        <p className="mr-3 text-gray-600 font-normal tracking-normal">W2</p>
                        <div className="w-full h-[0.313rem] bg-gray-200 rounded relative">
                            <div className="w-11/12 bg-green-400 h-[0.313rem] rounded">
                                <div className="absolute right-0 bottom-0 mb-2">
                                    <div className="relative py-1 rounded">
                                        <p className="text-green-400 text-xs font-bold">98%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-4 flex items-center">
                        <p className="mr-3 text-gray-600 font-normal tracking-normal">W2</p>
                        <div className="w-full h-[0.313rem] bg-gray-200 rounded relative">
                            <div className="w-1/2 bg-blue-500 h-[0.313rem] rounded">
                                <div className="absolute right-0 bottom-0 mb-2">
                                    <div className="relative py-1 rounded">
                                        <p className="text-blue-500 text-xs font-bold">55%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-4 flex items-center">
                        <p className="mr-3 text-gray-600 font-normal tracking-normal">W2</p>
                        <div className="w-full h-[0.313rem] bg-gray-200 rounded relative">
                            <div className="w-1/5 bg-red-400 h-[0.313rem] rounded">
                                <div className="absolute right-0 bottom-0 mb-2">
                                    <div className="relative py-1 rounded">
                                        <p className="text-red-400 text-xs font-bold">17%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-4 flex items-center">
                        <p className="mr-3 text-gray-600 font-normal tracking-normal">W2</p>
                        <div className="w-full h-[0.313rem] bg-gray-200 rounded relative">
                            <div className="w-10/12 bg-blue-500 h-[0.313rem] rounded">
                                <div className="absolute right-0 bottom-0 mb-2">
                                    <div className="relative py-1 rounded">
                                        <p className="text-blue-500 text-xs font-bold">89%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-4 flex items-center">
                        <p className="mr-3 text-gray-600 font-normal tracking-normal">W2</p>
                        <div className="w-full h-[0.313rem] bg-gray-200 rounded relative">
                            <div className="w-1/4 bg-orange-400 h-[0.313rem] rounded">
                                <div className="absolute right-0 bottom-0 mb-2">
                                    <div className="relative py-1 rounded">
                                        <p className="text-orange-400 text-xs font-bold">25%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        navigator.clipboard.writeText(codeToCopy)
    }

    return (
        <div className="container mx-auto">

            <div className="w-full rounded shadow bg-white py-8 px-6">
                <h2 className="text-[#4A5568] text-lg font-bold">Task progress</h2>
                <div className="my-4 flex items-center">
                    <p className="mr-3 text-gray-600 font-normal tracking-normal">W2</p>
                    <div className="w-full h-[0.313rem] bg-gray-200 rounded relative">
                        <div className="w-11/12 bg-green-400 h-[0.313rem] rounded">
                            <div className="absolute right-0 bottom-0 mb-2">
                                <div className="relative py-1 rounded">
                                    <p className="text-green-400 text-xs font-bold">98%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4 flex items-center">
                    <p className="mr-3 text-gray-600 font-normal tracking-normal">W2</p>
                    <div className="w-full h-[0.313rem] bg-gray-200 rounded relative">
                        <div className="w-1/2 bg-blue-500 h-[0.313rem] rounded">
                            <div className="absolute right-0 bottom-0 mb-2">
                                <div className="relative py-1 rounded">
                                    <p className="text-blue-500 text-xs font-bold">55%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4 flex items-center">
                    <p className="mr-3 text-gray-600 font-normal tracking-normal">W2</p>
                    <div className="w-full h-[0.313rem] bg-gray-200 rounded relative">
                        <div className="w-1/5 bg-red-400 h-[0.313rem] rounded">
                            <div className="absolute right-0 bottom-0 mb-2">
                                <div className="relative py-1 rounded">
                                    <p className="text-red-400 text-xs font-bold">17%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4 flex items-center">
                    <p className="mr-3 text-gray-600 font-normal tracking-normal">W2</p>
                    <div className="w-full h-[0.313rem] bg-gray-200 rounded relative">
                        <div className="w-10/12 bg-blue-500 h-[0.313rem] rounded">
                            <div className="absolute right-0 bottom-0 mb-2">
                                <div className="relative py-1 rounded">
                                    <p className="text-blue-500 text-xs font-bold">89%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4 flex items-center">
                    <p className="mr-3 text-gray-600 font-normal tracking-normal">W2</p>
                    <div className="w-full h-[0.313rem] bg-gray-200 rounded relative">
                        <div className="w-1/4 bg-orange-400 h-[0.313rem] rounded">
                            <div className="absolute right-0 bottom-0 mb-2">
                                <div className="relative py-1 rounded">
                                    <p className="text-orange-400 text-xs font-bold">25%</p>
                                </div>
                            </div>
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