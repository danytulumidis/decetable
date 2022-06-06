import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <section id='hero' className='mb-28'>
            <Navbar />
            <div className='text-gray-300 body-font'>
                <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                    <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:pl-20 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                        <h1 className='title-font sm:text-4xl xl:text-7xl text-3xl mb-4 font-medium text-white xl:leading-tight'>
                            <span className='text-secondary-color'>
                                Achieve your goals
                            </span>
                            <br />
                            Make yourself accountable
                        </h1>
                        <p className='mb-8 leading-relaxed text-gray-400 w-10/12'>
                            By making yourself accountable and pay real money
                            you will be able to achieve your goals.
                            Procrastination time is over. Take action.
                        </p>
                        <div className='flex justify-center'>
                            <button className='inline-flex text-white bg-secondary-color shadow-md shadow-glow border-0 py-2 px-6 focus:outline-none rounded text-lg z-10 transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110'>
                                Start
                            </button>
                            <button className='ml-4 inline-flex text-white border-2 border-secondary-color py-2 px-6 focus:outline-none hover:text-secondary-color rounded text-lg z-10 transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110'>
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className='lg:max-w-2xl lg:w-full md:w-1/2 w-5/6'>
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
