import Image from "next/image";

export function HeaderComponent() {
    return (
        <header className="top-0 fixed w-full z-50 py-2 bg-blue-50">
            <div className="flex justify-between items-center container mx-auto">
                <div>
                    <Image src={'/logo.png'} width={600}  height={600} priority alt="Logo" className="w-16" />
                </div>
                <div>
                    <input type="text" className="border focus:outline-none p-1 rounded-full px-4" />
                </div>
                <div>
                    <ul className="flex items-center gap-4">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}