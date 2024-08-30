'use client'

import { DialogBox } from "./DialogBox"

export function ComponentEight() {
    function handelCodeCopy() {
        const codeToCopy = `
          <div className="bg-black py-16 px-14">
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-l md:grid-cols-2 gap-10">
                        <div className='flex justify-center items-center'>
                            <div>
                                <h2 className="text-5xl font-bold text-white">Healthy Food</h2>
                                <h1 className="font-bold text-5xl text-yellow-500 py-2">01</h1>
                                <h4 className="text-2xl text-white">Easy to <b>Use Tools</b></h4>
                                <p className="py-4 text-white">
                                    Our new hybrids  made significant impact on the farm yield. Besides, a strong pipeline of hybrids is ready to be launched, which are tailored to yield in different environmental 	conditions.
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-white">
                                Strategic planning is an organization’s process for defining their strategy so that they can accomplish specific goals and objectives. We offer affordable custom website design done by professionals.
                            </p>
                            <div className="mt-10 md:mt-20">
                                <h1 className="font-bold text-5xl text-yellow-500 py-2">02</h1>
                                <h2 className="text-2xl text-white">Special <b>Discounts</b></h2>
                                <p className='text-white'>
                                    We can help you to boost engagement with your visitors by ensuring that people have access to the information that they. A business concept is a statement that describes the reach and reason of existence of a given business idea.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        navigator.clipboard.writeText(codeToCopy)
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black py-16 px-14">
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-l md:grid-cols-2 gap-10">
                        <div className='flex justify-center items-center'>
                            <div>
                                <h2 className="text-5xl font-bold text-white">Healthy Food</h2>
                                <h1 className="font-bold text-5xl text-yellow-500 py-2">01</h1>
                                <h4 className="text-2xl text-white">Easy to <b>Use Tools</b></h4>
                                <p className="py-4 text-white">
                                    Our new hybrids  made significant impact on the farm yield. Besides, a strong pipeline of hybrids is ready to be launched, which are tailored to yield in different environmental 	conditions.
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-white">
                                Strategic planning is an organization’s process for defining their strategy so that they can accomplish specific goals and objectives. We offer affordable custom website design done by professionals.
                            </p>
                            <div className="mt-10 md:mt-20">
                                <h1 className="font-bold text-5xl text-yellow-500 py-2">02</h1>
                                <h2 className="text-2xl text-white">Special <b>Discounts</b></h2>
                                <p className='text-white'>
                                    We can help you to boost engagement with your visitors by ensuring that people have access to the information that they. A business concept is a statement that describes the reach and reason of existence of a given business idea.
                                </p>
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