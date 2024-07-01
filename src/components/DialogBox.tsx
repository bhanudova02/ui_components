'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { IoCopyOutline } from "react-icons/io5";

export function DialogBox() {
    
    return (
        <Dialog>
            <DialogTrigger className="bg-green-600 hover:font-bold focus:outline-none px-4 py-1.5 rounded-full">
                <div className="flex items-center gap-1">
                    Copy Code
                    <IoCopyOutline />
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center mt-2 text-green-600 uppercase">Code Copied Successfully</DialogTitle>
                    <DialogDescription className="text-center mt-2 text-gray-600">
                        The code has been copied to your clipboard. You can now paste it wherever you need.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
