'use client'
import Image from "next/image";
import { DialogBox } from "./DialogBox";
export function ComponentTwelve() {
    function handelCodeCopy() {
        const codeToCopy = `
        Image Source Link:
        ------------------
        https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images



            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Box One */}
                <div>
                    <Image src={"/CM8One.jpg"} width={500} height={500} alt="CM8One" className="w-full h-[25rem] object-cover" />
                </div>
                <div className="flex justify-center items-center p-10 bg-white text-black">
                    <div>
                        <h2 className="text-3xl font-normal my-10">Reduce your carbon footprint</h2>
                        <p className="text-lg">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                {/* Box Two */}
                <div className="flex justify-center items-center p-10 bg-[#F97C37] text-white">
                    <div>
                        <h2 className="text-3xl font-normal my-10">Reduce your carbon footprint</h2>
                        <p className="text-lg">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div>
                    <Image src={"/CM8Two.jpg"} width={500} height={500} alt="CM8One" className="w-full h-[25rem] object-cover" />
                </div>
                {/* Box Three */}
                <div>
                    <Image src={"/CM8Three.jpg"} width={500} height={500} alt="CM8One" className="w-full h-[25rem] object-cover" />
                </div>
                <div className="flex justify-center items-center p-10 bg-black text-white">
                    <div>
                        <h2 className="text-3xl font-normal my-10">Reduce your carbon footprint</h2>
                        <p className="text-lg">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>

      `;
        navigator.clipboard.writeText(codeToCopy)
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Box One */}
                <div>
                    <Image src={"/CM8One.jpg"} width={500} height={500} alt="CM8One" className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-center items-center p-10 bg-white text-black">
                    <div>
                        <h2 className="text-3xl font-normal my-10">Reduce your carbon footprint</h2>
                        <p className="text-lg">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                {/* Box Two */}
                <div className="flex justify-center items-center p-10 bg-[#F97C37] text-white">
                    <div>
                        <h2 className="text-3xl font-normal my-10">Reduce your carbon footprint</h2>
                        <p className="text-lg">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div>
                    <Image src={"/CM8Two.jpg"} width={500} height={500} alt="CM8One" className="w-full h-full object-cover" />
                </div>
                {/* Box Three */}
                <div>
                    <Image src={"/CM8Three.jpg"} width={500} height={500} alt="CM8One" className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-center items-center p-10 bg-black text-white">
                    <div>
                        <h2 className="text-3xl font-normal my-10">Reduce your carbon footprint</h2>
                        <p className="text-lg">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
            <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
                <DialogBox />
            </div>
        </div>
    )
}