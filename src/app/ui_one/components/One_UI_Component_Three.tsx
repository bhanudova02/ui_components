import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaUserGroup } from "react-icons/fa6";
import { HiCursorClick } from "react-icons/hi";
import { TiArrowDown, TiArrowUp } from "react-icons/ti";

export function One_UI_Component_Three() {
    return (
        <div className="container mx-auto">
            <div>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                            <div className="absolute bg-indigo-500 rounded-md p-3">
                                <FaUserGroup className="text-white text-2xl" />
                            </div>
                            <p className="ml-16 text-sm font-medium text-gray-500 truncate">Total Subscribers</p>
                        </dt>
                        <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                            <p className="text-2xl font-semibold text-gray-900">71,897</p>
                            <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                                <TiArrowUp className="text-2xl" />
                                <span className="sr-only"> Increased by </span>
                                122
                            </p>
                            <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> View all<span className="sr-only"> Total Subscribers stats</span></a>
                                </div>
                            </div>
                        </dd>
                    </div>
                    <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                            <div className="absolute bg-indigo-500 rounded-md p-3">
                                <BiSolidMessageSquareDetail className="text-white text-2xl" />
                            </div>
                            <p className="ml-16 text-sm font-medium text-gray-500 truncate">Avg. Open Rate</p>
                        </dt>
                        <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                            <p className="text-2xl font-semibold text-gray-900">58.16%</p>
                            <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                                <TiArrowUp className="text-2xl" />
                                <span className="sr-only"> Increased by </span>
                                5.4%
                            </p>
                            <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> View all<span className="sr-only"> Avg. Open Rate stats</span></a>
                                </div>
                            </div>
                        </dd>
                    </div>
                    <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                            <div className="absolute bg-indigo-500 rounded-md p-3">
                                <HiCursorClick className="text-2xl text-white" />
                            </div>
                            <p className="ml-16 text-sm font-medium text-gray-500 truncate">Avg. Click Rate</p>
                        </dt>
                        <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                            <p className="text-2xl font-semibold text-gray-900">24.57%</p>
                            <p className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                                <TiArrowDown className="text-2xl" />
                                <span className="sr-only"> Decreased by </span>
                                3.2%
                            </p>
                            <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> View all<span className="sr-only"> Avg. Click Rate stats</span></a>
                                </div>
                            </div>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}