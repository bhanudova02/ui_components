'use client'
import Image from "next/image";
import { HeaderProfile } from "./HeaderProfile";
import { HeaderNotification } from "./HeaderNotification";
import { SideNavComponent } from "./SideNavComponent";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function HeaderComponent() {
    const pathName = usePathname();
    return (
        <header className="top-0 fixed w-full z-50 py-2 bg-white shadow-md shadow-gray-600">
            <div className="flex justify-between items-center container mx-auto">
                <div className="flex items-center gap-2">
                    <div className="lg:hidden block">
                        <SideNavComponent />
                    </div>
                    <Link href="/">
                        <Image src={'/logo.png'} width={600} height={600} priority alt="Logo" className="w-12 md:w-16" />
                    </Link>
                </div>
                <div className="lg:block hidden">
                    <ul className="flex items-center gap-6 font-medium">
                        <li><Link className={`${pathName=="/"?'underline text-green-700 font-bold':''}`} href="/">Home</Link></li>
                        <li><Link className={`${pathName=="/ui_one"?'underline text-green-700 font-bold':''}`} href="/ui_one">CompsOne</Link></li>
                        <li><Link className={`${pathName=="/ui_two"?'underline text-green-700 font-bold':''}`} href="/ui_two">CompsTwo</Link></li>
                        <li><Link className={`${pathName=="/ui_three"?'underline text-green-700 font-bold':''}`} href="/ui_three">CompsThree</Link></li>
                        <li><Link className={`${pathName=="/ui_four"?'underline text-green-700 font-bold':''}`} href="/ui_four">CompsFour</Link></li>
                        <li><Link className={`${pathName=="/contact_us"?'underline text-green-700 font-bold':''}`} href="/contact_us">Contact Us</Link></li>
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