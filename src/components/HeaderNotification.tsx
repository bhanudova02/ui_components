import { IoMdNotificationsOutline } from "react-icons/io";

export function HeaderNotification() {
    return (
        <div className="relative border-r px-2">
            <IoMdNotificationsOutline className="text-2xl" />
            <div
                className="animate-ping w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto">
            </div>
        </div>
    )
}