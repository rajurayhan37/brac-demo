import Link from "next/link";


function Navbar() {
    return (
        <div className="mx-auto mb-[130px] backdrop-blur-2xl shadow-md z-[100] fixed w-full ">
            <div className="px-12 py-4 flex justify-between">
                <div>
                    <img src="./brac-logo.png"/>
                </div>
                <ul className="flex gap-4 py-4">
                    <li className="text-md text-gray-800">
                        <Link href={'/home'}> Brac </Link>
                    </li>
                    <li className="text-md text-[#FF00FF]">
                        <Link href={'/about'}> About </Link>
                    </li>
                    <li className="text-md text-[#FF00FF]">
                        <Link href={'/help'}> Help</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;