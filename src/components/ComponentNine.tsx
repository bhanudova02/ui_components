'use client'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { GiCupcake } from "react-icons/gi";
import { GiCoffeeCup } from "react-icons/gi";
import { DialogBox } from "./DialogBox";
export function ComponentNine() {
    function handelCodeCopy() {
        const codeToCopy = `
        React Icons
        -----------
        import { FaFacebookF } from "react-icons/fa";
        import { FaInstagram } from "react-icons/fa6";
        import { FaTwitter } from "react-icons/fa";
        import { FaWhatsapp } from "react-icons/fa6";
        import { IoFastFoodOutline } from "react-icons/io5";
        import { FaTelegram } from "react-icons/fa";
        import { GiCupcake } from "react-icons/gi";
        import { GiCoffeeCup } from "react-icons/gi";
        import { DialogBox } from "./DialogBox";

         <div className="bg-[#292930] flex justify-center items-center px-4 md:px-20 lg:px-20  pt-20 pb-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <div className="block md:hidden lg:block">
                            <div className="text-white text-center md:text-start">
                                <h2 className="text-5xl font-bold">Fresh Food Cafe</h2>
                                <p className="w-full md:w-[30rem] text-xl py-6">
                                    Our Cafe is a family-owned restaurant that has been proudly serving around the 1940s located on the corner of Broadway and West 112th Street in New York.
                                </p>
                            </div>
                            <div className="flex justify-center items-center md:justify-start md:items-start">
                                <div className="flex gap-4x gap-4 text-yellow-500">
                                    <FaFacebookF size={30} />
                                    <FaInstagram size={30} />
                                    <FaTwitter size={30} />
                                    <FaWhatsapp size={30} />
                                    <FaTelegram size={30} />
                                </div>
                            </div>
                        </div>
                        {/* Tab View */}
                        <div className="hidden md:block lg:hidden">
                            <div className="grid grid-cols-2">
                                <div>
                                    <div className="text-white">
                                        <h2 className="text-5xl font-bold">Fresh Food Cafe</h2>
                                        <p className="w-[23rem] text-xl py-6">
                                            Our Cafe is a family-owned restaurant that has been proudly serving around the 1940s located on the corner of Broadway and West 112th Street in New York.
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <div className="flex gap-4x gap-4 text-yellow-500">
                                            <FaFacebookF size={30} />
                                            <FaInstagram size={30} />
                                            <FaTwitter size={30} />
                                            <FaWhatsapp size={30} />
                                            <FaTelegram size={30} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div>
                                        <div className="flex justify-center items-center text-yellow-500">
                                            <IoFastFoodOutline size={70} />
                                        </div>
                                        <h2 className="font-bold text-2xl text-center text-white mt-4">Our Menu</h2>
                                    </div>
                                </div>

                                <div className="mt-16">
                                    <div className="flex justify-center items-center text-yellow-500">
                                        <GiCupcake size={70} />
                                    </div>
                                    <h2 className="font-bold text-2xl text-center text-white mt-4">SPECIALS</h2>
                                </div>
                                <div className="mt-16">
                                    <div className="flex justify-center items-center text-yellow-500">
                                        <GiCoffeeCup size={70} />
                                    </div>
                                    <h2 className="font-bold text-2xl text-center text-white mt-4">DRINKS</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center md:justify-normal mt-10 md:mt-0">
                        <div className="block md:hidden lg:block">
                            <div className="flex md:flex-row flex-col gap-10 md:gap-20">
                                <div className="block md:hidden lg:block">
                                    <div className="flex justify-center items-center text-yellow-500">
                                        <IoFastFoodOutline size={60} />
                                    </div>
                                    <h2 className="font-bold text-2xl text-center text-white mt-4">Our Menu</h2>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center text-yellow-500">
                                        <GiCupcake size={60} />
                                    </div>
                                    <h2 className="font-bold text-2xl text-center text-white mt-4">SPECIALS</h2>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center text-yellow-500">
                                        <GiCoffeeCup size={60} />
                                    </div>
                                    <h2 className="font-bold text-2xl text-center text-white mt-4">DRINKS</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        `;
        navigator.clipboard.writeText(codeToCopy)
    }
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#292930] flex justify-center items-center px-4 md:px-20 lg:px-20  pt-20 pb-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <div className="block md:hidden lg:block">
                            <div className="text-white text-center md:text-start">
                                <h2 className="text-5xl font-bold">Fresh Food Cafe</h2>
                                <p className="w-full md:w-[30rem] text-xl py-6">
                                    Our Cafe is a family-owned restaurant that has been proudly serving around the 1940s located on the corner of Broadway and West 112th Street in New York.
                                </p>
                            </div>
                            <div className="flex justify-center items-center md:justify-start md:items-start">
                                <div className="flex gap-4x gap-4 text-yellow-500">
                                    <FaFacebookF size={30} />
                                    <FaInstagram size={30} />
                                    <FaTwitter size={30} />
                                    <FaWhatsapp size={30} />
                                    <FaTelegram size={30} />
                                </div>
                            </div>
                        </div>
                        {/* Tab View */}
                        <div className="hidden md:block lg:hidden">
                            <div className="grid grid-cols-2">
                                <div>
                                    <div className="text-white">
                                        <h2 className="text-5xl font-bold">Fresh Food Cafe</h2>
                                        <p className="w-[23rem] text-xl py-6">
                                            Our Cafe is a family-owned restaurant that has been proudly serving around the 1940s located on the corner of Broadway and West 112th Street in New York.
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <div className="flex gap-4x gap-4 text-yellow-500">
                                            <FaFacebookF size={30} />
                                            <FaInstagram size={30} />
                                            <FaTwitter size={30} />
                                            <FaWhatsapp size={30} />
                                            <FaTelegram size={30} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div>
                                        <div className="flex justify-center items-center text-yellow-500">
                                            <IoFastFoodOutline size={70} />
                                        </div>
                                        <h2 className="font-bold text-2xl text-center text-white mt-4">Our Menu</h2>
                                    </div>
                                </div>

                                <div className="mt-16">
                                    <div className="flex justify-center items-center text-yellow-500">
                                        <GiCupcake size={70} />
                                    </div>
                                    <h2 className="font-bold text-2xl text-center text-white mt-4">SPECIALS</h2>
                                </div>
                                <div className="mt-16">
                                    <div className="flex justify-center items-center text-yellow-500">
                                        <GiCoffeeCup size={70} />
                                    </div>
                                    <h2 className="font-bold text-2xl text-center text-white mt-4">DRINKS</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center md:justify-normal mt-10 md:mt-0">
                        <div className="block md:hidden lg:block">
                            <div className="flex md:flex-row flex-col gap-10 md:gap-20">
                                <div className="block md:hidden lg:block">
                                    <div className="flex justify-center items-center text-yellow-500">
                                        <IoFastFoodOutline size={60} />
                                    </div>
                                    <h2 className="font-bold text-2xl text-center text-white mt-4">Our Menu</h2>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center text-yellow-500">
                                        <GiCupcake size={60} />
                                    </div>
                                    <h2 className="font-bold text-2xl text-center text-white mt-4">SPECIALS</h2>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center text-yellow-500">
                                        <GiCoffeeCup size={60} />
                                    </div>
                                    <h2 className="font-bold text-2xl text-center text-white mt-4">DRINKS</h2>
                                </div>
                            </div>
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