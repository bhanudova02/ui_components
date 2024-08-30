'use client'
import { DialogBox } from "./DialogBox";
export function ComponentThree() {
    function handelCodeCopy() {
        const codeToCopy = `
        
Image Source[
https://www.mediafire.com/file/wven9dinvr97gy3/post_1.png/file
https://www.mediafire.com/file/069jb9x6kdwkuzj/post_4.png/file
https://www.mediafire.com/file/3kps77ztfh109e2/post_3.png/file
https://www.mediafire.com/file/3fj8rfzciamujbu/post_2.png/file
]

<div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" bg-blue-50 h-full flex justify-center items-center">
            <h2 className="text-center font-semibold text-5xl">Demo Box</h2>
        </div>
        <div className="w-full h-full rounded shadow bg-white p-8 mb-8">
            <h2 className="text-color text-lg font-bold mb-4">Trending Posts</h2>
            <div className="flex flex-col sm:flex-row sm:items-center py-4">
                <img className="flex-shrink-0 rounded" src="/post_1.png" />
                <div className="mt-4 sm:mt-0 sm:ml-6">
                    <h4 className="text-blue-500 text-sm font-normal uppercase mb-2">Food</h4>
                    <p className="text-gray-800 text-base font-normal mb-1">One of Saturn’s largest rings may be
                        newer than anyone</p>
                    <p className="text-gray-600 text-sm">May 13, 2019 by Allison Fox</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center py-4">
                <img className="flex-shrink-0 rounded" src="/post_2.png" />
                <div className="mt-4 sm:mt-0 sm:ml-6">
                    <h4 className="text-blue-500 text-sm font-normal uppercase mb-2">Galaxy</h4>
                    <p className="text-gray-800 text-base font-normal mb-1">One of Saturn’s largest rings may be
                        newer than anyone</p>
                    <p className="text-gray-600 text-sm">May 13, 2019 by Allison Fox</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center py-4">
                <img className="flex-shrink-0 rounded" src="/post_3.png" />
                <div className="mt-4 sm:mt-0 sm:ml-6">
                    <h4 className="text-blue-500 text-sm font-normal uppercase mb-2">Google</h4>
                    <p className="text-gray-800 text-base font-normal mb-1">One of Saturn’s largest rings may be
                        newer than anyone</p>
                    <p className="text-gray-600 text-sm">May 13, 2019 by Allison Fox</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center py-4">
                <img className="flex-shrink-0 rounded" src="/post_4.png" />
                <div className="mt-4 sm:mt-0 sm:ml-6">
                    <h4 className="text-blue-500 text-sm font-normal uppercase mb-2">Apple</h4>
                    <p className="text-gray-800 text-base font-normal mb-1">One of Saturn’s largest rings may be
                        newer than anyone</p>
                    <p className="text-gray-600 text-sm">May 13, 2019 by Allison Fox</p>
                </div>
            </div>
        </div>
    </div>
</div>
        `
        navigator.clipboard.writeText(codeToCopy)
    }
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className=" bg-blue-50 h-full flex justify-center items-center">
                    <h2 className="text-center font-semibold text-5xl">Demo Box</h2>
                </div>
                <div className="w-full h-full rounded shadow bg-white p-8 mb-8">
                    <h2 className="text-color text-lg font-bold mb-4">Trending Posts</h2>
                    <div className="flex flex-col sm:flex-row sm:items-center py-4">
                        <img className="flex-shrink-0 rounded" src="/post_1.png" />
                        <div className="mt-4 sm:mt-0 sm:ml-6">
                            <h4 className="text-blue-500 text-sm font-normal uppercase mb-2">Food</h4>
                            <p className="text-gray-800 text-base font-normal mb-1">One of Saturn’s largest rings may be
                                newer than anyone</p>
                            <p className="text-gray-600 text-sm">May 13, 2019 by Allison Fox</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center py-4">
                        <img className="flex-shrink-0 rounded" src="/post_2.png" />
                        <div className="mt-4 sm:mt-0 sm:ml-6">
                            <h4 className="text-blue-500 text-sm font-normal uppercase mb-2">Galaxy</h4>
                            <p className="text-gray-800 text-base font-normal mb-1">One of Saturn’s largest rings may be
                                newer than anyone</p>
                            <p className="text-gray-600 text-sm">May 13, 2019 by Allison Fox</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center py-4">
                        <img className="flex-shrink-0 rounded" src="/post_3.png" />
                        <div className="mt-4 sm:mt-0 sm:ml-6">
                            <h4 className="text-blue-500 text-sm font-normal uppercase mb-2">Google</h4>
                            <p className="text-gray-800 text-base font-normal mb-1">One of Saturn’s largest rings may be
                                newer than anyone</p>
                            <p className="text-gray-600 text-sm">May 13, 2019 by Allison Fox</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center py-4">
                        <img className="flex-shrink-0 rounded" src="/post_4.png" />
                        <div className="mt-4 sm:mt-0 sm:ml-6">
                            <h4 className="text-blue-500 text-sm font-normal uppercase mb-2">Apple</h4>
                            <p className="text-gray-800 text-base font-normal mb-1">One of Saturn’s largest rings may be
                                newer than anyone</p>
                            <p className="text-gray-600 text-sm">May 13, 2019 by Allison Fox</p>
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
                <DialogBox />
            </div>
        </div>
    )
}