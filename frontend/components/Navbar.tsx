import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarProps {
    connectWallet: () => any;
}

const Navbar = ({ connectWallet }: NavbarProps): JSX.Element => {
    const router = useRouter();

    return (
        <header className='text-gray-400 bg-main body-font sticky top-0 z-50'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <a className='flex font-medium items-center text-white mb-4 md:mb-0 pl-20'>
                    <Image
                        className='object-cover object-center rounded'
                        width={30}
                        height={30}
                        alt='hero'
                        src='/logo.svg'
                    ></Image>
                    <span className='ml-3 text-xl'>Decetable</span>
                </a>
                <nav className='md:ml-auto md:mr-auto flex flex-wrap md:gap-6 items-center justify-center cursor-pointer text-lg'>
                    <Link href={"/"}>
                        <a
                            className={
                                router.asPath == "/"
                                    ? "mr-5 hover:text-secondary-color text-secondary-color"
                                    : "mr-5 hover:text-secondary-color"
                            }
                        >
                            Home
                        </a>
                    </Link>
                    <Link href={"#about"}>
                        <a
                            href='#about'
                            className={
                                router.asPath == "/#about"
                                    ? "mr-5 hover:text-secondary-color text-secondary-color"
                                    : "mr-5 hover:text-secondary-color"
                            }
                        >
                            About
                        </a>
                    </Link>
                    <Link href={"#challenge"}>
                        <a
                            href='#challenge'
                            className={
                                router.asPath == "/#challenge"
                                    ? "mr-5 hover:text-secondary-color text-secondary-color"
                                    : "mr-5 hover:text-secondary-color"
                            }
                        >
                            Challenge yourself
                        </a>
                    </Link>
                    <Link href={"#halloffame"}>
                        <a
                            href='#halloffame'
                            className={
                                router.asPath == "/#halloffame"
                                    ? "mr-5 hover:text-secondary-color text-secondary-color"
                                    : "mr-5 hover:text-secondary-color"
                            }
                        >
                            Hall of fame
                        </a>
                    </Link>
                </nav>
                <button
                    className='inline-flex text-white items-center bg-gradient-to-l bg-secondary-color border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110'
                    onClick={() => connectWallet()}
                >
                    Connect Wallet
                    <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-4 h-4 ml-1'
                        viewBox='0 0 24 24'
                    >
                        <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
