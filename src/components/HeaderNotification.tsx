'use client';
'use client';
import { IoMdNotificationsOutline } from "react-icons/io";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { TiMessageTyping } from "react-icons/ti";
import { useState } from "react";
import { notificationsData } from "@/lib/data";
export function HeaderNotification() {
    const [notificationCls, setNotificationCls] = useState('animate-ping w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto');
    function Msg1() {
        setNotificationCls('');
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <div className="relative border-r px-2 cursor-pointer">
                    <IoMdNotificationsOutline className="text-2xl" />
                    <div className={notificationCls}></div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-3 absolute -left-[13rem] md:-left-[24rem]">
                <div className="relative w-[320px] md:w-[420px] bg-white border">
                    <div className="absolute top-0 right-0 w-6 h-6 bg-white border overflow-hidden transform rotate-45 border-r-0 border-b-0 -translate-x-[98px] md:-translate-x-6 -translate-y-3"></div>
                    <div>
                        <div className="flex justify-between px-4 pt-4 pb-2 border-b">
                            <h4 className="font-bold">Notifications</h4>
                            <DropdownMenuItem>
                                <button className="text-blue-600 hover:underline text-sm font-medium hover:font-semibold" onClick={Msg1}>Mark all as read</button>
                            </DropdownMenuItem>
                        </div>
                        <div className="scroll-bar-border h-96" id="style-1">
                            {notificationsData.map((notification) => (
                                <DropdownMenuItem key={notification.id}>
                                    <div className="flex px-2 py-6 hover:bg-gray-300">
                                        <div className="w-[15%] flex justify-center">
                                            <img src={notification.imgSrc} alt='Logo' className='w-10 h-10 rounded-full object-contain' />
                                        </div>
                                        <div className="w-[70%]">
                                            <h4 className="font-bold">{notification.name}</h4>
                                            <p className="flex items-center"><TiMessageTyping className="text-xl" />{notification.message}. {notification.time}</p>
                                            <p className=""><span className="font-medium">{notification.date}</span></p>
                                        </div>
                                        <div className="w-[15%] flex justify-center items-center">
                                            <button className="text-center hover:border px-6 py-2 font-bold rounded-md">...</button>
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                            ))}
                        </div>
                    </div>
                    <div className="p-2 border-t text-center">
                        <button className="text-blue-800 font-semibold text-sm" onClick={Msg1}>Notification History</button>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
