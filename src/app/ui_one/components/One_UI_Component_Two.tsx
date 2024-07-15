import { IoDocuments, IoHome } from "react-icons/io5";
import { FaFire } from "react-icons/fa6";
import { IoMdSave } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { FaFolder, FaRegFolderOpen, FaUser } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { BsPeopleFill } from "react-icons/bs";
import { MdCalendarMonth } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
export function One_UI_Component_Two() {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-md p-4">
                    <div className="w-16">
                        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto bg-indigo-600">
                            <div className="flex-1">
                                <div className="bg-indigo-700 py-4 flex items-center justify-center">
                                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow" />
                                </div>
                                <nav aria-label="Sidebar" className="py-6 flex flex-col items-center space-y-3">
                                    <a href="#" className="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700">
                                        <IoHome className="text-xl" />
                                        <span className="sr-only">Home</span>
                                    </a>
                                    <a href="#" className="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700">
                                        <FaFire className="text-xl" />
                                        <span className="sr-only">Trending</span>
                                    </a>
                                    <a href="#" className="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700">
                                        <IoMdSave className="text-2xl" />
                                        <span className="sr-only">Bookmarks</span>
                                    </a>

                                    <a href="#" className="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700">
                                        <GrGallery className="text-lg" />
                                        <span className="sr-only">Messages</span>
                                    </a>

                                    <a href="#" className="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700">
                                        <FaUser className="text-lg" />
                                        <span className="sr-only">Profile</span>
                                    </a>
                                </nav>
                            </div>
                            <div className="flex-shrink-0 flex pb-5">
                                <a href="#" className="flex-shrink-0 w-full">
                                    <img className="block mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    <div className="sr-only">
                                        <p>Emily Selman</p>
                                        <p>Account settings</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="bg-white rounded-md p-4">
                    <div className=" bg-indigo-700 overflow-y-auto w-60 pt-4 pb-3 h-full">
                        <div className="flex items-center flex-shrink-0 px-4">
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg" alt="Workflow" />
                        </div>
                        <div className="mt-5 flex-1 flex flex-col">
                            <nav className="flex-1 px-2 space-y-3">
                                <a href="#"
                                    className="bg-indigo-800 text-white group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                    <HiHome className="text-2xl"/>
                                    Dashboard
                                </a>

                                <a href="#"
                                    className="text-indigo-100 hover:bg-indigo-600 group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                   <BsPeopleFill className="text-2xl"/>
                                    Team
                                </a>

                                <a href="#"
                                    className="text-indigo-100 hover:bg-indigo-600 group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                    <FaRegFolderOpen className="text-2xl"/>
                                    Projects
                                </a>

                                <a href="#"
                                    className="text-indigo-100 hover:bg-indigo-600 group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                    <MdCalendarMonth className="text-2xl"/>
                                    Calendar
                                </a>

                                <a href="#"
                                    className="text-indigo-100 hover:bg-indigo-600 group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                    <FaFolder className="text-2xl"/>
                                    Documents
                                </a>

                                <a href="#"
                                    className="text-indigo-100 hover:bg-indigo-600 group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                    <GiNetworkBars className="text-2xl"/>
                                    Reports
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div>

                </div>

            </div>
        </div>
    )
}