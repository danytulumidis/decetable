const FameCard = () => {
    return (
        <div className='px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-16'>
            <div className='flex flex-col max-w-screen-lg overflow-hidden bg-secondary-color border rounded-lg shadow-xl lg:flex-row sm:mx-auto'>
                <div className='relative lg:w-1/2'>
                    <img
                        src='https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80'
                        alt='Persons talking in a work setting.'
                        className='object-cover w-full lg:absolute h-80 lg:h-full'
                    />
                    <svg
                        className='absolute top-0 right-0 hidden h-full text-white lg:inline-block'
                        viewBox='0 0 20 104'
                        fill='currentColor'
                    >
                        <polygon points='17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104'></polygon>
                    </svg>
                </div>
                <div className='flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
                    <div>
                        <p className='inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-tertiary-color uppercase bg-red-300 rounded-full'>
                            0xzf68e8efhefhe87
                        </p>
                    </div>
                    <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
                        Best goal ever
                    </h5>
                    <p className='py-5 mb-5 text-gray-800'>
                        <span className='font-bold'>Our Platform</span> will
                        help you craft and build your next idea. Utilize our
                        drag and drop components to build the application of
                        your dreams.
                    </p>
                    <div className='flex items-center'>
                        <button
                            type='submit'
                            className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-tertiary-color rounded-lg hover:bg-secondary-color focus:shadow-outline focus:outline-none'
                        >
                            Submit
                        </button>
                        <div className='flex flex-col items-center'>
                            <p>Trusted Person</p>
                            <p className='inline-block px-3 py-1 text-xs font-medium tracking-wider text-tertiary-color uppercase bg-red-300 rounded-full'>
                                0x787gsgfxc34sddf
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FameCard;
