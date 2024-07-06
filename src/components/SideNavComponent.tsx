'use client'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { LuMenu } from "react-icons/lu"

export function SideNavComponent() {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="flex items-center ">
          <LuMenu className="text-3xl" />
        </SheetTrigger>
        <SheetContent side={'left'} className="pt-20">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>

            </SheetDescription>
          </SheetHeader>
          <ul className="flex flex-col gap-8  text-2xl items-center font-bold">

            <li><SheetClose>Home </SheetClose> </li>
            <li><SheetClose>CompsOne </SheetClose> </li>
            <li><SheetClose>CompsTwo </SheetClose> </li>
            <li><SheetClose>CompsThree </SheetClose> </li>
            <li><SheetClose>CompsFour </SheetClose> </li>
            <li><SheetClose>Contact Us </SheetClose> </li>
          </ul>
          <div className="absolute -z-10 w-full bottom-6">
              <Image src="/cartoon.png" width={600} height={600} alt="" className="w-full opacity-5" />
          </div>
        </SheetContent>
      </Sheet>

    </div>
  )
}