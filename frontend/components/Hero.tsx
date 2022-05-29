import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <section id='hero' className=''>
            <Navbar />
            <div className='absolute -left-20 top-42 opacity-50'>
                <Image width={180} height={180} alt='hero' src='/blobby.svg' />
            </div>
            <div className='absolute -bottom-28 -left-64 opacity-50'>
                <Image width={700} height={700} alt='hero' src='/blobby.svg' />
            </div>
            <div className='text-gray-300 body-font'>
                <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                    <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                        <h1 className='title-font sm:text-4xl xl:text-7xl text-3xl mb-4 font-medium text-white'>
                            <span className='text-secondary-color'>
                                Achieve your goals <br /> Make yourself
                                accountable
                            </span>{" "}
                        </h1>
                        <p className='mb-8 leading-relaxed'>
                            By making yourself accountable and pay real money
                            you will be able to achieve your goals.
                            Procrastination time is over. Take action.
                        </p>
                        <div className='flex justify-center'>
                            <button className='inline-flex text-white bg-secondary-color shadow-md shadow-glow border-0 py-2 px-6 focus:outline-none rounded text-lg z-10'>
                                Start
                            </button>
                            <button className='ml-4 inline-flex text-white border-2 border-secondary-color py-2 px-6 focus:outline-none hover:text-secondary-color rounded text-lg z-10'>
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                        <Image
                            className='object-cover object-center rounded'
                            width={500}
                            height={500}
                            alt='hero'
                            src='/hero_image.png'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
