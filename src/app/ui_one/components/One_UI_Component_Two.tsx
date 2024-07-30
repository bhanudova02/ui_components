'use client'
import { IoHome } from "react-icons/io5";
import { FaFire } from "react-icons/fa6";
import { IoIosBookmark, IoMdSave } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { FaFolder, FaRegFolderOpen, FaUser } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight, HiHome } from "react-icons/hi";
import { BsPeopleFill } from "react-icons/bs";
import { MdCalendarMonth } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { DialogBox } from "@/components/DialogBox";
export function One_UI_Component_Two() {



    function handelCodeCopy() {
        const codeToCopy = `
    React Icons: 
    ------------------
    import { IoHome } from "react-icons/io5";
    import { FaFire } from "react-icons/fa6";
    import { IoIosBookmark, IoMdSave } from "react-icons/io";
    import { GrGallery } from "react-icons/gr";
    import { FaFolder, FaRegFolderOpen, FaUser } from "react-icons/fa";
    import { HiChevronLeft, HiChevronRight, HiHome } from "react-icons/hi";
    import { BsPeopleFill } from "react-icons/bs";
    import { MdCalendarMonth } from "react-icons/md";
    import { GiNetworkBars } from "react-icons/gi";

    Code Link:
    ----------
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

    `;
        navigator.clipboard.writeText(codeToCopy)
    }



    function handelCodeCopySecond() {
        const codeToCopy = `
        import { IoHome } from "react-icons/io5";
        import { FaFire } from "react-icons/fa6";
        import { IoIosBookmark, IoMdSave } from "react-icons/io";
        import { GrGallery } from "react-icons/gr";
        import { FaFolder, FaRegFolderOpen, FaUser } from "react-icons/fa";
        import { HiChevronLeft, HiChevronRight, HiHome } from "react-icons/hi";
        import { BsPeopleFill } from "react-icons/bs";
        import { MdCalendarMonth } from "react-icons/md";
        import { GiNetworkBars } from "react-icons/gi";

        Code 
        -----
        <div className="bg-white rounded-md p-4">
                        <div className=" bg-indigo-700 overflow-y-auto w-60 pt-4 pb-3 h-full">
                            <div className="flex items-center flex-shrink-0 px-4">
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg" alt="Workflow" />
                            </div>
                            <div className="mt-5 flex-1 flex flex-col">
                                <nav className="flex-1 px-2 space-y-3">
                                    <a href="#"
                                        className="bg-indigo-800 text-white group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                        <HiHome className="text-2xl" />
                                        Dashboard
                                    </a>

                                    <a href="#"
                                        className="text-indigo-100 hover:bg-indigo-600 group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                        <BsPeopleFill className="text-2xl" />
                                        Team
                                    </a>

                                    <a href="#"
                                        className="text-indigo-100 hover:bg-indigo-600 group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                        <FaRegFolderOpen className="text-2xl" />
                                        Projects
                                    </a>

                                    <a href="#"
                                        className="text-indigo-100 hover:bg-indigo-600 group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                        <MdCalendarMonth className="text-2xl" />
                                        Calendar
                                    </a>

                                    <a href="#"
                                        className="text-indigo-100 hover:bg-indigo-600 group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                        <FaFolder className="text-2xl" />
                                        Documents
                                    </a>

                                    <a href="#"
                                        className="text-indigo-100 hover:bg-indigo-600 group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                        <GiNetworkBars className="text-2xl" />
                                        Reports
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>

        `;
        navigator.clipboard.writeText(codeToCopy)
    }


    function handelCodeCopyThird() {
        const codeToCopy = `
        import { IoHome } from "react-icons/io5";
        import { FaFire } from "react-icons/fa6";
        import { IoIosBookmark, IoMdSave } from "react-icons/io";
        import { GrGallery } from "react-icons/gr";
        import { FaFolder, FaRegFolderOpen, FaUser } from "react-icons/fa";
        import { HiChevronLeft, HiChevronRight, HiHome } from "react-icons/hi";
        import { BsPeopleFill } from "react-icons/bs";
        import { MdCalendarMonth } from "react-icons/md";
        import { GiNetworkBars } from "react-icons/gi";

        Code 
        -----
           <div className="bg-sky-50 p-4 rounded-md space-y-10">
                        <div>
                            <span className="relative z-0 inline-flex shadow-sm rounded-md">
                                <button type="button" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">Years</button>
                                <button type="button" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">Months</button>
                                <button type="button" className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">Days</button>
                            </span>
                        </div>

                        <div>
                            <span className="relative z-0 inline-flex shadow-sm rounded-md">
                                <button type="button" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                    <span className="sr-only">Previous</span>
                                    <HiChevronLeft className="text-xl" />
                                </button>
                                <button type="button" className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                    <span className="sr-only">Next</span>
                                    <HiChevronRight className="text-xl" />
                                </button>
                            </span>
                        </div>
                        <div>
                            <span className="relative z-0 inline-flex shadow-sm rounded-md">
                                <span className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white">
                                    <label className="sr-only">Select all</label>
                                    <input id="select-all" type="checkbox" name="select-all" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                </span>
                                <label className="sr-only">Select message type</label>
                                <select id="message-type" name="message-type"
                                    className="-ml-px block w-full pl-3 pr-9 py-2 rounded-l-none rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                    <option>Unread messages</option>
                                    <option>Sent messages</option>
                                    <option>All messages</option>
                                </select>
                            </span>
                        </div>
                        <div>
                            <span className="relative z-0 inline-flex shadow-sm rounded-md">
                                <button type="button" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                    <IoIosBookmark className="text-2xl text-gray-600" />
                                    Bookmark
                                </button>
                                <button type="button" className="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">12k</button>
                            </span>
                        </div>
                        <div>
                            <div className="grid grid-cols-4 gap-4">
                                <span className="w-fit inline-flex items-center p-2 rounded-md text-sm shadow shadow-black font-semibold bg-gray-100 text-gray-800"> Badge </span>
                                <span className="w-fit inline-flex items-center p-2 rounded-md text-sm shadow shadow-black font-semibold bg-red-100 text-red-800"> Badge </span>
                                <span className="w-fit inline-flex items-center p-2 rounded-md text-sm shadow shadow-black font-semibold bg-yellow-100 text-yellow-800"> Badge </span>
                                <span className="w-fit inline-flex items-center p-2 rounded-md text-sm shadow shadow-black font-semibold bg-green-100 text-green-800"> Badge </span>
                                <span className="w-fit inline-flex items-center p-2 rounded-md text-sm shadow shadow-black font-semibold bg-blue-100 text-blue-800"> Badge </span>
                                <span className="w-fit inline-flex items-center p-2 rounded-md text-sm shadow shadow-black font-semibold bg-indigo-100 text-indigo-800"> Badge </span>
                                <span className="w-fit inline-flex items-center p-2 rounded-md text-sm shadow shadow-black font-semibold bg-purple-100 text-purple-800"> Badge </span>
                                <span className="w-fit inline-flex items-center p-2 rounded-md text-sm shadow shadow-black font-semibold bg-pink-100 text-pink-800"> Badge </span>
                            </div>
                        </div>
                    </div>

        `;
        navigator.clipboard.writeText(codeToCopy)
    }





    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
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
                    <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
                        <DialogBox />
                    </div>
                </div>

                <div>
                    <div className="bg-white rounded-md p-4">
                        <div className=" bg-indigo-700 overflow-y-auto w-60 pt-4 pb-3 h-full">
                            <div className="flex items-center flex-shrink-0 px-4">
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg" alt="Workflow" />
                            </div>
                            <div className="mt-5 flex-1 flex flex-col">
                                <nav className="flex-1 px-2 space-y-3">
                                    <a href="#"
                                        className="bg-indigo-800 text-white group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                        <HiHome className="text-2xl" />
                                        Dashboard
                                    </a>

                                    <a href="#"
                                        className="text-indigo-100 hover:bg-indigo-600 group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                        <BsPeopleFill className="text-2xl" />
                                        Team
                                    </a>

                                    <a href="#"
                                        className="text-indigo-100 hover:bg-indigo-600 group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                        <FaRegFolderOpen className="text-2xl" />
                                        Projects
                                    </a>

                                    <a href="#"
                                        className="text-indigo-100 hover:bg-indigo-600 group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                        <MdCalendarMonth className="text-2xl" />
                                        Calendar
                                    </a>

                                    <a href="#"
                                        className="text-indigo-100 hover:bg-indigo-600 group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                        <FaFolder className="text-2xl" />
                                        Documents
                                    </a>

                                    <a href="#"
                                        className="text-indigo-100 hover:bg-indigo-600 group flex items-center gap-1 py-2 px-2 text-sm font-medium rounded-md">
                                        <GiNetworkBars className="text-2xl" />
                                        Reports
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div onClick={handelCodeCopySecond} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
                        <DialogBox />
                    </div>
                </div>

                <div>
                    <div className="bg-sky-50 p-4 rounded-md space-y-10">
                        <div>
                            <span className="relative z-0 inline-flex shadow-sm rounded-md">
                                <button type="button" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">Years</button>
                                <button type="button" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">Months</button>
                                <button type="button" className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">Days</button>
                            </span>
                        </div>

                        <div>
                            <span className="relative z-0 inline-flex shadow-sm rounded-md">
                                <button type="button" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                    <span className="sr-only">Previous</span>
                                    <HiChevronLeft className="text-xl" />
                                </button>
                                <button type="button" className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                    <span className="sr-only">Next</span>
                                    <HiChevronRight className="text-xl" />
                                </button>
                            </span>
                        </div>
                        <div>
                            <span className="relative z-0 inline-flex shadow-sm rounded-md">
                                <span className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white">
                                    <label className="sr-only">Select all</label>
                                    <input id="select-all" type="checkbox" name="select-all" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                </span>
                                <label className="sr-only">Select message type</label>
                                <select id="message-type" name="message-type"
                                    className="-ml-px block w-full pl-3 pr-9 py-2 rounded-l-none rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                    <option>Unread messages</option>
                                    <option>Sent messages</option>
                                    <option>All messages</option>
                                </select>
                            </span>
                        </div>
                        <div>
                            <span className="relative z-0 inline-flex shadow-sm rounded-md">
                                <button type="button" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                    <IoIosBookmark className="text-2xl text-gray-600" />
                                    Bookmark
                                </button>
                                <button type="button" className="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">12k</button>
                            </span>
                        </div>
                        <div>
                            <div className="grid grid-cols-4 gap-4">
                                <span className="w-fit inline-flex items-center p-2 rounded-md text-sm shadow shadow-black font-semibold bg-gray-100 text-gray-800"> Badge </span>
                                <span className="w-fit inline-flex items-center p-2 rounded-md text-sm shadow shadow-black font-semibold bg-red-100 text-red-800"> Badge </span>
                                <span className="w-fit inline-flex items-center p-2 rounded-md text-sm shadow shadow-black font-semibold bg-yellow-100 text-yellow-800"> Badge </span>
                                <span className="w-fit inline-flex items-center p-2 rounded-md text-sm shadow shadow-black font-semibold bg-green-100 text-green-800"> Badge </span>
                                <span className="w-fit inline-flex items-center p-2 rounded-md text-sm shadow shadow-black font-semibold bg-blue-100 text-blue-800"> Badge </span>
                                <span className="w-fit inline-flex items-center p-2 rounded-md text-sm shadow shadow-black font-semibold bg-indigo-100 text-indigo-800"> Badge </span>
                                <span className="w-fit inline-flex items-center p-2 rounded-md text-sm shadow shadow-black font-semibold bg-purple-100 text-purple-800"> Badge </span>
                                <span className="w-fit inline-flex items-center p-2 rounded-md text-sm shadow shadow-black font-semibold bg-pink-100 text-pink-800"> Badge </span>
                            </div>
                        </div>
                    </div>
                    <div onClick={handelCodeCopyThird} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
                        <DialogBox />
                    </div>
                </div>
            </div>
        </div>
    )
}