'use client'

import { DialogBox } from "./DialogBox"

export function ComponentTen() {
    function handelCodeCopy() {
        const copyToCode = `
        <div className="bg-gradient-to-tl h-[200px] relative text-white pt-20 pb-16 rounded-md shadow-md  from-[#71df95] via-[#024922] to-black flex justify-center items-center">

        </div>
        `
        navigator.clipboard.writeText(copyToCode)
    }
    return (
        <div className="container mx-auto">
            <div className="bg-gradient-to-tl h-[200px] relative text-white pt-20 pb-16 rounded-md shadow-md  from-[#71df95] via-[#024922] to-black flex justify-center items-center">

            </div>
            <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
                <DialogBox />
            </div>
        </div>
    )
}