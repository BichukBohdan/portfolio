import Link from "next/link";
import Image from "next/image";
import Socials from "./Socials";

const Header = () => {
    return (
        <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] text-center'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-grow lg:flex-row justify-between items-center gap-y-6 py-8'>
                    <Link href='/'>
                        <p className='font-thin text-white text-3xl sm:text-4xl'><b>bichuk</b> bohdan<span className='text-accent font-light'>.</span></p>
                    </Link>
                    <Socials />
                </div>
            </div>
        </header>
    );
};

export default Header;
