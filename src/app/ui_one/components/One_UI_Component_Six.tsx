'use client'
import { DialogBox } from "@/components/DialogBox";
import Link from "next/link";

const One_UI_Component_Six = () => {
    const NAV_LINKS = [
        { href: '/', key: 'home', label: 'Home' },
        { href: '/', key: 'how_hilink_work', label: 'How Hilink Work?' },
        { href: '/', key: 'services', label: 'Services' },
        { href: '/', key: 'pricing ', label: 'Pricing ' },
        { href: '/', key: 'contact_us', label: 'Contact Us' },
    ];


    function handelCodeCopy() {
        const codeToCopy = `
    Array Data
    ----------
    const NAV_LINKS = [
        { href: '/', key: 'home', label: 'Home' },
        { href: '/', key: 'how_hilink_work', label: 'How Hilink Work?' },
        { href: '/', key: 'services', label: 'Services' },
        { href: '/', key: 'pricing ', label: 'Pricing ' },
        { href: '/', key: 'contact_us', label: 'Contact Us' },
    ];

    Code:
    -----
                        <ul className="hidden h-full gap-6 lg:flex">
                            {NAV_LINKS.map((link) => (
                                <Link href={link.href} key={link.key} className="text-green-500 cursor-pointer  transition-all hover:font-bold">
                                    {link.label}
                                </Link>
                            ))}
                        </ul>

    `;
        navigator.clipboard.writeText(codeToCopy)
    }


    function handelCodeCopySecond() {
        const codeToCopy = `
    Image Source Link: 
    ------------------
    https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

    `;
        navigator.clipboard.writeText(codeToCopy)
    }





    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                <div>
                    <div className="bg-gray-100 rounded-md flex items-center justify-center p-4">
                        <ul className="hidden h-full gap-6 lg:flex">
                            {NAV_LINKS.map((link) => (
                                <Link href={link.href} key={link.key} className="text-green-500 cursor-pointer transition-all hover:font-bold">
                                    {link.label}
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
                        <DialogBox />
                    </div>
                </div>
                <div>
                    <div className="bg-gray-100 rounded-md flex items-center justify-center p-4">
                        <h2>Empty Place</h2>
                    </div>
                    <div onClick={handelCodeCopySecond} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
                        <DialogBox />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default One_UI_Component_Six