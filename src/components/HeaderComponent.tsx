'use client'
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HeaderProfile } from "./HeaderProfile";
import { HeaderNotification } from "./HeaderNotification";

export function HeaderComponent() {
    return (
        <header className="top-0 fixed w-full z-50 py-2 bg-white shadow-md shadow-gray-600">
            <div className="flex justify-between items-center container mx-auto">
                <div>
                    <Image src={'/logo.png'} width={600} height={600} priority alt="Logo" className="w-16" />
                </div>
                <div>
                    <ul className="flex items-center gap-6 font-medium">
                        <li>Home</li>
                        <li>CompsOne</li>
                        <li>CompsTwo</li>
                        <li>CompsThree</li>
                        <li>CompsFour</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <HeaderNotification />
                    <HeaderProfile />
                </div>
            </div>
        </header>
    )
}