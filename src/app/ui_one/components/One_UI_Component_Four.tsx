import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

export function One_UI_Component_Four() {
    return (
        <div className="container mx-auto">


            <div>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">Total Subscribers</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">71,897</dd>
                    </div>

                    <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">Avg. Open Rate</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">58.16%</dd>
                    </div>

                    <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">Avg. Click Rate</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">24.57%</dd>
                    </div>
                </dl>
            </div>

            <div>
                <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
                    <div className="px-4 py-5 sm:p-6">
                        <dt className="text-base font-normal text-gray-900">Total Subscribers</dt>
                        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                71,897
                                <span className="ml-2 text-sm font-medium text-gray-500"> from 70,946 </span>
                            </div>
                            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                                <FaLongArrowAltUp />
                                <span className="sr-only"> Increased by </span>
                                12%
                            </div>
                        </dd>
                    </div>

                    <div className="px-4 py-5 sm:p-6">
                        <dt className="text-base font-normal text-gray-900">Avg. Open Rate</dt>
                        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                58.16%
                                <span className="ml-2 text-sm font-medium text-gray-500"> from 56.14% </span>
                            </div>

                            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                                <FaLongArrowAltUp />
                                <span className="sr-only"> Increased by </span>
                                2.02%
                            </div>
                        </dd>
                    </div>

                    <div className="px-4 py-5 sm:p-6">
                        <dt className="text-base font-normal text-gray-900">Avg. Click Rate</dt>
                        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                24.57%
                                <span className="ml-2 text-sm font-medium text-gray-500"> from 28.62% </span>
                            </div>

                            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
                                <FaLongArrowAltDown />
                                <span className="sr-only"> Decreased by </span>
                                4.05%
                            </div>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}