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
                    <ul className="flex items-center gap-4">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
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