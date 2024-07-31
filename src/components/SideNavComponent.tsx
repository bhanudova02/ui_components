'use cLinkent'
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
import Link from "next/link"
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
            <Link href="/"><SheetClose>Home </SheetClose> </Link>
            <Link href="/ui_one"><SheetClose>CompsOne </SheetClose> </Link>
            <Link href="/ui_two"><SheetClose>CompsTwo </SheetClose> </Link>
            <Link href="/ui_three"><SheetClose>CompsThree </SheetClose> </Link>
            <Link href="/ui_four"><SheetClose>CompsFour </SheetClose> </Link>
            <Link href="/contact_us"><SheetClose>Contact Us </SheetClose> </Link>
          </ul>
          <div className="absolute -z-10 w-full bottom-6">
              <Image src="/cartoon.png" width={600} height={600} alt="" className="w-full opacity-5" />
          </div>
        </SheetContent>
      </Sheet>

    </div>
  )
}