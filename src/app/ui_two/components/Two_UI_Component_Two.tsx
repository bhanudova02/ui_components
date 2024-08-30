"use client"
import { DialogBox } from "@/components/DialogBox";
import Image from "next/image"
import { useRouter } from "next/navigation";

const Two_UI_Component_Two = () => {
    const router = useRouter();
    const services = [
        { id: 1, link: '/heading_one', cardImage: '/two_card1.jpg', cardLogo: '/two_logo1.png', title: 'HeadingOne', description: 'PLPL specializes in pioneering both customers and farmers by integrating fertilizers for improved crop yields and fostering sustainability for a more environmentally-friendly future.' },
        { id: 2, link: '/heading_two', cardImage: '/two_card2.jpg', cardLogo: '/two_logo2.png', title: 'HeadingTwo', description: 'PLPL excels in providing innovative seed processing solutions for customers and farmers, optimizing crop yields and sustainability for a greener future.' },
        { id: 3, link: '/heading_three', cardImage: '/two_card3.jpg', cardLogo: '/two_logo3.png', title: 'HeadingThree', description: 'PLPL is a leading food processing company, transforming fresh ingredients into delicious and nutritious products that people love.' },
        { id: 4, link: '/heading_four', cardImage: '/two_card4.jpg', cardLogo: '/two_logo4.png', title: 'HeadingOne', description: ' PLPL is at the forefront of tissue culture technology, helping scientists cultivate new discoveries and improve human health with the development of hybrid plant varieties.' }
    ]
    const servicesHeader = [{ id: '1', logo: '/home_service_logo.png', title_one: 'OUR SERVICES LIST', title_two: 'What We’re Offering' }]


    function handelCodeCopy() {
        const copyToCode = `
        Image Source Link:
        ------------------
        https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images


           const services = [
                { id: 1, link: '/heading_one', cardImage: '/two_card1.jpg', cardLogo: '/two_logo1.png', title: 'HeadingOne', description: 'PLPL specializes in pioneering both customers and farmers by integrating fertilizers for improved crop yields and fostering sustainability for a more environmentally-friendly future.' },
                { id: 2, link: '/heading_two', cardImage: '/two_card2.jpg', cardLogo: '/two_logo2.png', title: 'HeadingTwo', description: 'PLPL excels in providing innovative seed processing solutions for customers and farmers, optimizing crop yields and sustainability for a greener future.' },
                { id: 3, link: '/heading_three', cardImage: '/two_card3.jpg', cardLogo: '/two_logo3.png', title: 'HeadingThree', description: 'PLPL is a leading food processing company, transforming fresh ingredients into delicious and nutritious products that people love.' },
                { id: 4, link: '/heading_four', cardImage: '/two_card4.jpg', cardLogo: '/two_logo4.png', title: 'HeadingOne', description: ' PLPL is at the forefront of tissue culture technology, helping scientists cultivate new discoveries and improve human health with the development of hybrid plant varieties.' }
            ]
            
            const servicesHeader = [{ id: '1', logo: '/home_service_logo.png', title_one: 'OUR SERVICES LIST', title_two: 'What We’re Offering' }]


            <div>
                <div className="flex justify-center items-center py-10 bg-white text-primary-content">
                    <div>
                        {
                            servicesHeader && servicesHeader.map(({ logo, title_two, id }: any) => (
                                <div key={id} className="text-center">
                                    <div className="flex justify-center">
                                        <Image width={1000} height={1000} src={logo} alt="Rice_Logo" className="w-10 border rounded-full" />
                                    </div>
                                    <h2 className="text-xl md:text-2xl lg:text-3xl uppercase font-bold text-[#255946]">{title_two}</h2>
                                </div>
                            ))
                        }
                        <div className="flex justify-center items-center mt-3 md:mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                                {
                                    services && services.map(({ id, link, cardImage, cardLogo, title, description }: any) => (
                                        <div onClick={() => { router.push(link) }} key={id} className="card w-72 md:w-72 lg:w-64 rounded-xl shadow-black shadow-md p-[1px] bg-white cursor-pointer transition-all hover:shadow-indigo-800 hover:shadow-md ">
                                            <figure><Image width={1000} height={1000} src={cardImage} alt={cardImage} className="rounded-t-xl h-44 object-cover" /></figure>
                                            <div className="text-center p-4 md:p-4 lg:p-3">
                                                <div className="flex justify-center items-center">
                                                    <div className="bg-blue-50 rounded-full border mt-[-50px] w-20 p-3">
                                                        <Image src={cardLogo} width={1000} height={1000} alt={cardLogo} />
                                                    </div>
                                                </div>
                                                <h2 className="text-base md:text-lg lg:text-xl font-semibold">{title}</h2>
                                                <p className="text-xs md:text-sm lg:text-base">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odio fugit pariatur quaerat. Doloribus commodi recusandae ratione, amet unde sit.
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    `;
        navigator.clipboard.writeText(copyToCode)
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div>
                <div className="flex justify-center items-center py-10 bg-[#E5E6E6] text-primary-content">
                    <div>
                        {
                            servicesHeader && servicesHeader.map(({ logo, title_two, id }: any) => (
                                <div key={id} className="text-center">
                                    <div className="flex justify-center">
                                        <Image width={1000} height={1000} src={logo} alt="Rice_Logo" className="w-10 border rounded-full" />
                                    </div>
                                    <h2 className="text-xl md:text-2xl lg:text-3xl uppercase font-bold text-[#255946]">{title_two}</h2>
                                </div>
                            ))
                        }
                        <div className="flex justify-center items-center mt-3 md:mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                                {
                                    services && services.map(({ id, link, cardImage, cardLogo, title, description }: any) => (
                                        <div onClick={() => { router.push(link) }} key={id} className="card w-72 md:w-72 lg:w-64 rounded-xl shadow-black shadow-md p-[1px] bg-white cursor-pointer transition-all hover:shadow-indigo-800 hover:shadow-md ">
                                            <figure><Image width={1000} height={1000} src={cardImage} alt={cardImage} className="rounded-t-xl h-44 object-cover" /></figure>
                                            <div className="text-center p-4 md:p-4 lg:p-3">
                                                <div className="flex justify-center items-center">
                                                    <div className="bg-blue-50 rounded-full border mt-[-50px] w-20 p-3">
                                                        <Image src={cardLogo} width={1000} height={1000} alt={cardLogo} />
                                                    </div>
                                                </div>
                                                <h2 className="text-base md:text-lg lg:text-xl font-semibold">{title}</h2>
                                                <p className="text-xs md:text-sm lg:text-base">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odio fugit pariatur quaerat. Doloribus commodi recusandae ratione, amet unde sit.
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-lg">
                <DialogBox />
            </div>
        </div>
    )
}

export default Two_UI_Component_Two