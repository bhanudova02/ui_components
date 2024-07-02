'use client'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { DialogBox } from "./DialogBox";

export function ComponentFive() {
    function handelCodeCopy() {
        const copyToCode = `
        React-Icons
-----------
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

Image source
------------
	   https://www.mediafire.com/file/1eoeg7pvm20ig60/images-12.png/file,
	   https://www.mediafire.com/file/t2nn46ssb5g7xg9/images-14.png/file,
	   https://www.mediafire.com/file/0cx7tcj7m6cz0hm/images-5.png/file,
	   https://www.mediafire.com/file/8rutmv78tj2w293/images-10.png/file,
	   https://www.mediafire.com/file/fkip31w9dznqar7/images-9.png/file,
	   https://www.mediafire.com/file/8fq0py4p81b79v2/images-6.png/file,
	   https://www.mediafire.com/file/uzepfkdttuv7e51/images-15.png/file,
	   https://www.mediafire.com/file/mpt059o9w4it755/images-13.png/file,
	   https://www.mediafire.com/file/y79srk1eg2sceky/images-8.png/file,
	   https://www.mediafire.com/file/1g7rrb7qscdni05/images-7.png/file,
	   https://www.mediafire.com/file/wbggg9bwchqghqw/images-11.png/file,


const tableData = [
    {
        tableHeadData: [
            { title: 'Post Title', titleStyle: 'pl-8 text-gray-700 font-normal pr-6 text-left text-sm tracking-normal leading-4' },
            { title: 'Created\u00A0On', titleStyle: 'text-gray-700 font-normal pr-6 text-left text-sm tracking-normal leading-4' },
            { title: 'Engagement', titleStyle: 'text-gray-700 font-normal pr-6 text-left text-sm tracking-normal leading-4' },
            { title: 'Images', titleStyle: 'text-gray-700 font-normal pr-6 text-left text-sm tracking-normal leading-4' },
            { title: 'Actions', titleStyle: 'text-gray-700 font-normal pr-6 text-left text-sm tracking-normal leading-4' },
        ],
        tableBodyData: [
            {
                PostTitleData: {
                    title: 'How to train your dragon for noobs',
                    postListData: [
                        { list: 'Life', clsStyle: 'bg-gray-400 w-1 h-1 rounded-full mx-1' },
                        { list: 'Habits', clsStyle: 'bg-gray-400 w-1 h-1 rounded-full mx-1' },
                        { list: 'Productivity', clsStyle: '' },
                    ],
                },
                CreatedData: { createdData: '21 Jan 2020', author: 'James Doe' },
                EngagementData: { viewCount: '256 views', comments: '92 comments' },
                ImagesData: ["images-5.png", "images-6.png", "images-7.png"],
            },
            {
                PostTitleData: {
                    title: 'Mastering React',
                    postListData: [
                        { list: 'Life', clsStyle: 'bg-gray-400 w-1 h-1 rounded-full mx-1' },
                        { list: 'Habits', clsStyle: 'bg-gray-400 w-1 h-1 rounded-full mx-1' },
                        { list: 'Productivity', clsStyle: '' },
                    ],
                },
                CreatedData: { createdData: '21 Jan 2020', author: 'James Doe' },
                EngagementData: { viewCount: '256 views', comments: '92 comments' },
                ImagesData: ["images-8.png", "images-9.png", "images-10.png"],
            },
            {
                PostTitleData: {
                    title: 'Mastering React',
                    postListData: [
                        { list: 'Life', clsStyle: 'bg-gray-400 w-1 h-1 rounded-full mx-1' },
                        { list: 'Habits', clsStyle: 'bg-gray-400 w-1 h-1 rounded-full mx-1' },
                        { list: 'Productivity', clsStyle: '' },
                    ],
                },
                CreatedData: { createdData: '21 Jan 2020', author: 'James Doe' },
                EngagementData: { viewCount: '256 views', comments: '92 comments' },
                ImagesData: ["images-8.png", "images-9.png", "images-10.png"],
            },
            {
                PostTitleData: {
                    title: 'Advanced JavaScript Techniques',
                    postListData: [
                        { list: 'Programming', clsStyle: 'bg-gray-400 w-1 h-1 rounded-full mx-1' },
                        { list: 'JavaScript', clsStyle: 'bg-gray-400 w-1 h-1 rounded-full mx-1' },
                        { list: 'Web Development', clsStyle: '' },
                    ],
                },
                CreatedData: { createdData: '15 Feb 2021', author: 'Jane Smith' },
                EngagementData: { viewCount: '300 views', comments: '120 comments' },
                ImagesData: ["images-11.png", "images-12.png", "images-13.png"],
            }
        ]
    }
]


<div className="container mx-auto">
    <div className="shadow border border-gray-300 rounded mt-8 w-full overflow-x-scroll lg:overflow-hidden">
        <table className="min-w-full bg-white rounded">
            <thead>
                <tr className="w-full h-16 border-gray-300 border-b py-8">

                    {
                        tableData[0].tableHeadData.map(theadList =>
                            <th key={theadList.title} className={theadList.titleStyle}>
                                {theadList.title}
                            </th>
                        )
                    }

                </tr>
            </thead>
            <tbody>
                {tableData[0].tableBodyData.map((tableBody, index) =>
                    <tr key={index}
                        className="h-24 border-gray-300 border-t border-b hover:bg-gray-100 transition duration-150 ease-in-out">
                        <td className="pl-8 pr-6 text-left whitespace-no-wrap">
                            <h4 className="text-sm text-gray-700 tracking-normal leading-4">{tableBody.PostTitleData.title}</h4>
                            <div className="flex items-center mt-1">
                                <ul className="flex gap-2 text-xs">
                                    {tableBody.PostTitleData.postListData.map(data =>
                                        <li key={data.list} className="flex items-center text-gray-600">{data.list} <span className={data.clsStyle}></span></li>
                                    )}
                                </ul>
                            </div>
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                            <p className="text-sm text-gray-700 tracking-normal leading-4">{tableBody.CreatedData.author}</p>
                            <p className="text-xs text-gray-600 tracking-normal leading-4">{tableBody.CreatedData.createdData}</p>
                        </td>
                        <td className="pr-6">
                            <p className="text-sm text-gray-700 tracking-normal leading-4">{tableBody.EngagementData.viewCount}</p>
                            <p className="text-xs text-gray-600 tracking-normal leading-4">{tableBody.EngagementData.comments}</p>
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                            <div className="flex items-center flex-no-wrap">
                                {
                                    tableBody.ImagesData.map(imgSrc =>
                                        <div key={imgSrc} className="w-12 h-12 bg-cover bg-center rounded-md">
                                            <img src={imgSrc} alt={imgSrc}
                                                className="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow" />
                                        </div>
                                    )
                                }

                            </div>
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                            <div className="flex items-center text-gray-600">
                                <div className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                    <div className="cursor-pointer text-gray-600 flex items-center">
                                        <FaRegEdit className="text-base" />
                                        <p className="ml-2">Edit</p>
                                    </div>
                                </div>
                                <p className="mx-3">|</p>
                                <div className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                    <div className="cursor-pointer text-red-500 flex items-center ">
                                        <RiDeleteBin6Line className="text-xl" />
                                        <p className="ml-2 text-gray-600">Delete</p>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
</div>
        `
        navigator.clipboard.writeText(copyToCode)
    }

    const tableData = [
        {
            tableHeadData: [
                { title: 'Post Title', titleStyle: 'pl-8 text-gray-700 font-normal pr-6 text-left text-sm tracking-normal leading-4' },
                { title: 'Created\u00A0On', titleStyle: 'text-gray-700 font-normal pr-6 text-left text-sm tracking-normal leading-4' },
                { title: 'Engagement', titleStyle: 'text-gray-700 font-normal pr-6 text-left text-sm tracking-normal leading-4' },
                { title: 'Images', titleStyle: 'text-gray-700 font-normal pr-6 text-left text-sm tracking-normal leading-4' },
                { title: 'Actions', titleStyle: 'text-gray-700 font-normal pr-6 text-left text-sm tracking-normal leading-4' },
            ],
            tableBodyData: [
                {
                    PostTitleData: {
                        title: 'How to train your dragon for noobs',
                        postListData: [
                            { list: 'Life', clsStyle: 'bg-gray-400 w-1 h-1 rounded-full mx-1' },
                            { list: 'Habits', clsStyle: 'bg-gray-400 w-1 h-1 rounded-full mx-1' },
                            { list: 'Productivity', clsStyle: '' },
                        ],
                    },
                    CreatedData: { createdData: '21 Jan 2020', author: 'James Doe' },
                    EngagementData: { viewCount: '256 views', comments: '92 comments' },
                    ImagesData: ["images-5.png", "images-6.png", "images-7.png"],
                },
                {
                    PostTitleData: {
                        title: 'Mastering React',
                        postListData: [
                            { list: 'Life', clsStyle: 'bg-gray-400 w-1 h-1 rounded-full mx-1' },
                            { list: 'Habits', clsStyle: 'bg-gray-400 w-1 h-1 rounded-full mx-1' },
                            { list: 'Productivity', clsStyle: '' },
                        ],
                    },
                    CreatedData: { createdData: '21 Jan 2020', author: 'James Doe' },
                    EngagementData: { viewCount: '256 views', comments: '92 comments' },
                    ImagesData: ["images-8.png", "images-9.png", "images-10.png"],
                },
                {
                    PostTitleData: {
                        title: 'Mastering React',
                        postListData: [
                            { list: 'Life', clsStyle: 'bg-gray-400 w-1 h-1 rounded-full mx-1' },
                            { list: 'Habits', clsStyle: 'bg-gray-400 w-1 h-1 rounded-full mx-1' },
                            { list: 'Productivity', clsStyle: '' },
                        ],
                    },
                    CreatedData: { createdData: '21 Jan 2020', author: 'James Doe' },
                    EngagementData: { viewCount: '256 views', comments: '92 comments' },
                    ImagesData: ["images-8.png", "images-9.png", "images-10.png"],
                },
                {
                    PostTitleData: {
                        title: 'Advanced JavaScript Techniques',
                        postListData: [
                            { list: 'Programming', clsStyle: 'bg-gray-400 w-1 h-1 rounded-full mx-1' },
                            { list: 'JavaScript', clsStyle: 'bg-gray-400 w-1 h-1 rounded-full mx-1' },
                            { list: 'Web Development', clsStyle: '' },
                        ],
                    },
                    CreatedData: { createdData: '15 Feb 2021', author: 'Jane Smith' },
                    EngagementData: { viewCount: '300 views', comments: '120 comments' },
                    ImagesData: ["images-11.png", "images-12.png", "images-13.png"],
                }
            ]
        }
    ]
    return (
        <div className="container mx-auto">
            <div className="shadow border border-gray-300 rounded mt-8 w-full overflow-x-scroll lg:overflow-hidden">
                <table className="min-w-full bg-white rounded">
                    <thead>
                        <tr className="w-full h-16 border-gray-300 border-b py-8">

                            {
                                tableData[0].tableHeadData.map(theadList =>
                                    <th key={theadList.title} className={theadList.titleStyle}>
                                        {theadList.title}
                                    </th>
                                )
                            }

                        </tr>
                    </thead>
                    <tbody>
                        {tableData[0].tableBodyData.map((tableBody, index) =>
                            <tr key={index}
                                className="h-24 border-gray-300 border-t border-b hover:bg-gray-100 transition duration-150 ease-in-out">
                                <td className="pl-8 pr-6 text-left whitespace-no-wrap">
                                    <h4 className="text-sm text-gray-700 tracking-normal leading-4">{tableBody.PostTitleData.title}</h4>
                                    <div className="flex items-center mt-1">
                                        <ul className="flex gap-2 text-xs">
                                            {tableBody.PostTitleData.postListData.map(data =>
                                                <li key={data.list} className="flex items-center text-gray-600">{data.list} <span className={data.clsStyle}></span></li>
                                            )}
                                        </ul>
                                    </div>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <p className="text-sm text-gray-700 tracking-normal leading-4">{tableBody.CreatedData.author}</p>
                                    <p className="text-xs text-gray-600 tracking-normal leading-4">{tableBody.CreatedData.createdData}</p>
                                </td>
                                <td className="pr-6">
                                    <p className="text-sm text-gray-700 tracking-normal leading-4">{tableBody.EngagementData.viewCount}</p>
                                    <p className="text-xs text-gray-600 tracking-normal leading-4">{tableBody.EngagementData.comments}</p>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <div className="flex items-center flex-no-wrap">
                                        {
                                            tableBody.ImagesData.map(imgSrc =>
                                                <div key={imgSrc} className="w-12 h-12 bg-cover bg-center rounded-md">
                                                    <img src={imgSrc} alt={imgSrc}
                                                        className="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow" />
                                                </div>
                                            )
                                        }

                                    </div>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                                    <div className="flex items-center text-gray-600">
                                        <div className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                            <div className="cursor-pointer text-gray-600 flex items-center">
                                                <FaRegEdit className="text-base" />
                                                <p className="ml-2">Edit</p>
                                            </div>
                                        </div>
                                        <p className="mx-3">|</p>
                                        <div className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                            <div className="cursor-pointer text-red-500 flex items-center ">
                                                <RiDeleteBin6Line className="text-xl" />
                                                <p className="ml-2 text-gray-600">Delete</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
                <DialogBox />
            </div>
        </div>
    )
}