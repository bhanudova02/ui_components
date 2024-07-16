import { FaPlus } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export function One_UI_Component_Five() {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                <div className="bg-white p-4 rounded-md space-x-1">
                    <button type="button" className="inline-flex items-center gap-[1px] px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <HiOutlineMail className="text-sm" />
                        Button text
                    </button>
                    <button type="button" className="inline-flex items-center gap-[1px] px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <HiOutlineMail className="text-lg" />
                        Button text
                    </button>
                    <button type="button" className="inline-flex items-center gap-[1px] px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <HiOutlineMail className="text-xl" />
                        Button text
                    </button>
                    <button type="button" className="inline-flex items-center gap-[1px] px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <HiOutlineMail className="text-2xl" />
                        Button text
                    </button>
                </div>

                <div className="bg-white p-4 rounded-md grid grid-cols-2">
                    <div className="space-x-1">
                        <button type="button" className="inline-flex items-center gap-[1px] p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <FaPlus className="text-sm"/>
                        </button>
                        <button type="button" className="inline-flex items-center gap-[1px] p-1.5 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <FaPlus className="text-base"/>
                        </button>
                        <button type="button" className="inline-flex items-center gap-[1px] p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <FaPlus className="text-lg"/>
                        </button>
                        <button type="button" className="inline-flex items-center gap-[1px] p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <FaPlus className="text-xl"/>
                        </button>
                        <button type="button" className="inline-flex items-center gap-[1px] p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <FaPlus className="text-2xl"/>
                        </button>
                    </div>
                    <div>
                        mt space
                    </div>
                </div>

            </div>
        </div>
    )
}