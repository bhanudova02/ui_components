'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

export function HeaderProfile() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger >
                <Image src={'/profile_logo.jpg'} width={600} height={600} alt="ProfileLogo" className="w-10 rounded-md object-contain" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="me-5 md:me-6 mt-3">
                <div className="relative w-[250px] rounded-md bg-white top-arrow-border ">
                    <div className="absolute top-[8px] right-0 w-4 h-4 bg-white top-arrow-border  overflow-hidden transform rotate-45 arrow-border-profile -translate-x-6 -translate-y-4"></div>
                    <div className="border-b p-2 pt-4 flex justify-between">
                        <div>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuLabel className="text-xs">bhanudova02@gmail.com</DropdownMenuLabel>

                        </div>
                        <div className="flex items-center">
                            <Image src={'/profile_logo.jpg'} width={600} height={600} alt="ProfileLogo" className="w-14 rounded-md object-contain" />
                        </div>
                    </div>
                    <div className="space-y-3 px-4 py-3.5">
                        <DropdownMenuItem className="hover:underline hover:text-blue-600 hover:font-medium">Profile</DropdownMenuItem>
                        <DropdownMenuItem className="hover:underline hover:text-blue-600 hover:font-medium">Billing</DropdownMenuItem>
                        <DropdownMenuItem className="hover:underline hover:text-blue-600 hover:font-medium">Team</DropdownMenuItem>
                        <DropdownMenuItem className="hover:underline hover:text-blue-600 hover:font-medium">Subscription</DropdownMenuItem>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}