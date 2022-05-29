import Image from "next/image";

const About = () => {
    return (
        <section id='about' className='text-white body-font'>
            <div className='container mx-auto flex px-5 pt-24 items-center justify-center flex-col'>
                <Image
                    className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'
                    width={500}
                    height={500}
                    alt='hero'
                    src='/about_image.png'
                ></Image>
                <div className='text-center lg:w-2/3 w-full'>
                    <h1 className='title-font sm:text-5xl text-3xl mb-4 font-medium text-white'>
                        How Decetable works?
                    </h1>
                    <div className='border-2 mx-52 border-secondary-color my-4'></div>
                    <p className='leading-relaxed mb-8'>
                        Decetable will help you to reach your goals. Set a goal
                        with a deadline and put it real money. If you dont reach
                        your goal the money will go to another address that you
                        specify. If you reach it you get all your money back.
                        <br />
                        You make yourself accountable and this is one of the
                        best way to avoid procrastination and achieve your
                        goals.
                    </p>
                </div>
            </div>
            <div className='container px-5 py-24 mx-auto flex flex-wrap'>
                <div className='flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto'>
                    <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
                        <div className='h-full w-1 bg-white pointer-events-none'></div>
                    </div>
                    <div className='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-secondary-color text-white relative z-10 title-font font-medium text-sm'>
                        1
                    </div>
                    <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
                        <div className='flex-shrink-0 w-24 h-24 bg-gray-800 text-secondary-color rounded-full inline-flex items-center justify-center'>
                            <svg
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                className='w-12 h-12'
                                viewBox='0 0 24 24'
                            >
                                <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
                            </svg>
                        </div>
                        <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                            <h2 className='font-medium title-font text-white mb-1 text-xl'>
                                Put in real money
                            </h2>
                            <p className='leading-relaxed'>
                                Make yourself accountable and put in your money.
                                Specify an account that will decide it in the
                                end.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex relative pb-20 sm:items-center md:w-2/3 mx-auto'>
                    <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
                        <div className='h-full w-1 bg-white pointer-events-none'></div>
                    </div>
                    <div className='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-secondary-color text-white relative z-10 title-font font-medium text-sm'>
                        2
                    </div>
                    <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
                        <div className='flex-shrink-0 w-24 h-24 bg-gray-800 text-secondary-color rounded-full inline-flex items-center justify-center'>
                            <svg
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                className='w-12 h-12'
                                viewBox='0 0 24 24'
                            >
                                <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                            </svg>
                        </div>
                        <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                            <h2 className='font-medium title-font text-white mb-1 text-xl'>
                                Backup Account
                            </h2>
                            <p className='leading-relaxed'>
                                Specify an address where your money will go if
                                you dont reach your goal.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex relative pb-20 sm:items-center md:w-2/3 mx-auto'>
                    <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
                        <div className='h-full w-1 bg-white pointer-events-none'></div>
                    </div>
                    <div className='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-secondary-color text-white relative z-10 title-font font-medium text-sm'>
                        3
                    </div>
                    <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
                        <div className='flex-shrink-0 w-24 h-24 bg-gray-800 text-secondary-color rounded-full inline-flex items-center justify-center'>
                            <svg
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                className='w-12 h-12'
                                viewBox='0 0 24 24'
                            >
                                <circle cx='12' cy='5' r='3'></circle>
                                <path d='M12 22V8M5 12H2a10 10 0 0020 0h-3'></path>
                            </svg>
                        </div>
                        <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                            <h2 className='font-medium title-font text-white mb-1 text-xl'>
                                Set yourself a Deadline
                            </h2>
                            <p className='leading-relaxed'>
                                Specify a date until you want to reach your
                                goal.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex relative pb-10 sm:items-center md:w-2/3 mx-auto'>
                    <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
                        <div className='h-full w-1 bg-white pointer-events-none'></div>
                    </div>
                    <div className='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-secondary-color text-white relative z-10 title-font font-medium text-sm'>
                        4
                    </div>
                    <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
                        <div className='flex-shrink-0 w-24 h-24 bg-gray-800 text-secondary-color rounded-full inline-flex items-center justify-center'>
                            <svg
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                className='w-12 h-12'
                                viewBox='0 0 24 24'
                            >
                                <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                                <circle cx='12' cy='7' r='4'></circle>
                            </svg>
                        </div>
                        <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                            <h2 className='font-medium title-font text-white mb-1 text-xl'>
                                Paytime
                            </h2>
                            <p className='leading-relaxed'>
                                The account that you specified at the beginning
                                must decide if you reached your goal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
