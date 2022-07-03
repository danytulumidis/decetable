// TODO: Change SVG in Statistics Cards

const Statistics = (props: {
    totalGoals: number;
    totalGoalsSucceeded: number;
    totalPayback: number;
    totalDonated: number;
}): JSX.Element => {
    const { totalGoals, totalGoalsSucceeded, totalPayback, totalDonated } =
        props;

    return (
        <section id='statistics' className='text-gray-400 body-font my-32'>
            <div className='container px-5 py-24 mx-auto'>
                <div className='flex flex-col text-center w-full mb-20'>
                    <h1 className='sm:text-5xl text-2xl font-medium title-font mb-4 text-white'>
                        So many people, so many goals.
                    </h1>
                    <p className='lg:w-1/2 mx-auto leading-relaxed text-base text-grey-400'>
                        Look at these statistics and see how many people shared
                        their goals here and commited themselves to reach their
                        goals.
                    </p>
                </div>
                <div className='flex flex-wrap -m-4 text-center'>
                    <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                        <div className='border-t-2 border-secondary-color bg-card-color px-4 py-6 rounded-lg shadow-xl'>
                            <svg
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                className='text-secondary-color w-12 h-12 mb-3 inline-block'
                                viewBox='0 0 24 24'
                            >
                                <path d='M8 17l4 4 4-4m-4-5v9'></path>
                                <path d='M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29'></path>
                            </svg>
                            <h2 className='title-font font-medium text-3xl text-white'>
                                {totalGoals}
                            </h2>
                            <p className='leading-relaxed'>Total Goals</p>
                        </div>
                    </div>
                    <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                        <div className='border-t-2 border-secondary-color bg-card-color px-4 py-6 rounded-lg shadow-xl'>
                            <svg
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                className='text-secondary-color w-12 h-12 mb-3 inline-block'
                                viewBox='0 0 24 24'
                            >
                                <path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'></path>
                                <circle cx='9' cy='7' r='4'></circle>
                                <path d='M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75'></path>
                            </svg>
                            <h2 className='title-font font-medium text-3xl text-white'>
                                {totalGoalsSucceeded}
                            </h2>
                            <p className='leading-relaxed'>Goals succeeded</p>
                        </div>
                    </div>
                    <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                        <div className='border-t-2 border-secondary-color bg-card-color px-4 py-6 rounded-lg shadow-xl'>
                            <svg
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                className='text-secondary-color w-12 h-12 mb-3 inline-block'
                                viewBox='0 0 24 24'
                            >
                                <path d='M3 18v-6a9 9 0 0118 0v6'></path>
                                <path d='M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z'></path>
                            </svg>
                            <h2 className='title-font font-medium text-3xl text-white'>
                                {totalPayback}
                            </h2>
                            <p className='leading-relaxed'>Payback</p>
                        </div>
                    </div>
                    <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                        <div className='border-t-2 border-secondary-color bg-card-color px-4 py-6 rounded-lg shadow-xl'>
                            <svg
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                className='text-secondary-color w-12 h-12 mb-3 inline-block'
                                viewBox='0 0 24 24'
                            >
                                <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
                            </svg>
                            <h2 className='title-font font-medium text-3xl text-white'>
                                {totalDonated}
                            </h2>
                            <p className='leading-relaxed'>
                                Donated to charity
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
