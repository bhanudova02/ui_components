'use client'
import { DialogBox } from "@/components/DialogBox"

export function One_UI_Component_One() {
    const CategoryBox = [
        {
            imgSrc: '/fruits_5473851_697e1a6cf9.png',
            title: 'Fruits'
        },
        {
            imgSrc: '/vegetables_e766fb60b9.png',
            title: 'Vegetables'
        },
        {
            imgSrc: '/Milk_Juice_bca431bc2d.png',
            title: 'Milk & Juice'
        },
        {
            imgSrc: '/baker_d1a89a80b9.png',
            title: 'Bakery'
        },
        {
            imgSrc: '/personal_care_d1904e74d2.png',
            title: 'Personal Care'
        },
        {
            imgSrc: '/grains_c0bfff8927.png',
            title: 'Grains'
        },
        {
            imgSrc: '/Chicken_and_Egg_4f7352d7ef.png',
            title: 'Chicken and Egg'
        },
    ]

    function handelCodeCopy() {
        const codeToCopy = `
        Image Source Link: 
        ------------------
        https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images




        const CategoryBox = [
        {
            imgSrc: '/fruits_5473851_697e1a6cf9.png',
            title: 'Fruits'
        },
        {
            imgSrc: '/vegetables_e766fb60b9.png',
            title: 'Vegetables'
        },
        {
            imgSrc: '/Milk_Juice_bca431bc2d.png',
            title: 'Milk & Juice'
        },
        {
            imgSrc: '/baker_d1a89a80b9.png',
            title: 'Bakery'
        },
        {
            imgSrc: '/personal_care_d1904e74d2.png',
            title: 'Personal Care'
        },
        {
            imgSrc: '/grains_c0bfff8927.png',
            title: 'Grains'
        },
        {
            imgSrc: '/Chicken_and_Egg_4f7352d7ef.png',
            title: 'Chicken and Egg'
        },
    ]

            <div className='mt-5'>
                <h2 className='text-white text-2xl font-bold'>Shop By Category</h2>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-5 mt-2'>
                    {CategoryBox.map((category: any, i: number) => (
                        <div key={i} className='flex flex-col items-center bg-green-50 gap-2 p-4 rounded-lg group cursor-pointer hover:bg-green-200'>
                            <img src={category.imgSrc}
                                className='w-10 h-10 group-hover:scale-125 transition-all ease-in-out'
                            />
                            <h2 className='text-green-800'>{category.title}</h2>
                        </div>
                    ))}
                </div>
            </div>

        `;
        navigator.clipboard.writeText(codeToCopy)
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className='mt-5'>
                <h2 className='text-white text-2xl font-bold'>Shop By Category</h2>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-5 mt-2'>
                    {CategoryBox.map((category: any, i: number) => (
                        <div key={i} className='flex flex-col items-center bg-green-50 gap-2 p-4 rounded-lg group cursor-pointer hover:bg-green-200'>
                            <img src={category.imgSrc}
                                className='w-10 h-10 group-hover:scale-125 transition-all ease-in-out'
                            />
                            <h2 className='text-green-800'>{category.title}</h2>
                        </div>
                    ))}
                </div>
            </div>

            <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
                <DialogBox />
            </div>
        </div>
    )
}