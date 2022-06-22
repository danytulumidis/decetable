import Image from "next/image";

const Challenge = (props: {
    challenge: string;
    days: number;
    trustedAccount: string;
}): JSX.Element => {
    const { challenge, days, trustedAccount } = props;

    return (
        <section
            id='challenge'
            className='border-y-2 border-secondary-color bg-card-color'
        >
            <div className='container mx-auto flex flex-row gap-4 px-5 py-24 justify-around items-center'>
                <div className='flex flex-col items-center w-1/2 mr-4'>
                    <h1 className='title-font sm:text-6xl text-3xl mb-6 font-medium text-white'>
                        Challenge yourself
                    </h1>
                    <p className='text-gray-400 text-center mb-10'>
                        Enter your goal and make yourself accountable.
                    </p>
                    <label className='text-gray-700' htmlFor='name'>
                        <div>
                            <h2 className='title-font sm:text-2xl mb-4 font-medium text-white'>
                                Your Goal
                            </h2>
                            <textarea
                                className='flex-1 appearance-none border border-gray-300 w-100 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110'
                                id='goal'
                                placeholder='Enter your Goal!'
                                name='goal'
                                rows={5}
                                cols={40}
                                maxLength={300}
                                value={challenge}
                                onChange={(e) => {
                                    console.log(e.target.value);
                                }}
                            ></textarea>
                        </div>
                    </label>
                    <div className='container mx-auto flex py-10 flex-col md:flex-row gap-10 items-center justify-center'>
                        <div>
                            <h2 className='title-font sm:text-2xl mb-4 font-medium text-white'>
                                Time for Completion (in Days)
                            </h2>
                            <div className='relative'>
                                <input
                                    type='number'
                                    id='rounded-email'
                                    className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110'
                                    placeholder='Your email'
                                    value={days}
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                    }}
                                />
                            </div>
                            <div className='mt-10'>
                                <h2 className='title-font sm:text-2xl mb-4 font-medium text-white'>
                                    Account to be trusted
                                </h2>
                                <div className='relative'>
                                    <input
                                        type='text'
                                        id='rounded-email'
                                        className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110'
                                        placeholder='0x...'
                                        value={trustedAccount}
                                        onChange={(e) => {
                                            console.log(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='h-full inline-flex text-white border-2 border-secondary-color py-2 px-6 focus:outline-none hover:text-secondary-color rounded text-lg z-10 transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110'>
                        Create Goal
                    </button>
                </div>
                <div className='flex flex-col items-end gap-4'>
                    <div className='w-10/12 flex flex-col items-center rounded-lg border-t-2 border-secondary-color bg-main text-white shadow-xl'>
                        <div className='mt-10'>
                            <Image
                                className='object-cover object-center rounded'
                                width={150}
                                height={150}
                                alt='money'
                                src='/money.svg'
                            />
                        </div>
                        <h1 className='text-2xl font-bold pb-2'>DISCLAIMER</h1>
                        <p className='text-center text-sm text-gray-400 mb-10 mx-6'>
                            You will pay real money (MATIC). Only invest as much
                            as you can afford!
                        </p>
                    </div>
                    <div className='w-10/12 flex flex-col items-center rounded-lg border-t-2 border-secondary-color bg-main text-white shadow-xl'>
                        <div className='mt-10'>
                            <Image
                                className='object-cover object-center rounded'
                                width={150}
                                height={150}
                                alt='ethereum'
                                src='/ethereum.svg'
                            />
                        </div>
                        <h1 className='text-2xl font-bold pb-2'>BLOCKCHAIN</h1>
                        <p className='text-center text-sm text-gray-400 mb-10 mx-6'>
                            Your goal will be stored on the blockchain and will
                            be there forever!
                        </p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-start'>
                    <div className='w-10/12 flex flex-col items-center rounded-lg border-t-2 border-secondary-color bg-main text-white shadow-xl'>
                        <div className='mt-10'>
                            <Image
                                className='object-cover object-center rounded'
                                width={150}
                                height={150}
                                alt='goal'
                                src='/goal.svg'
                            />
                        </div>
                        <h1 className='text-2xl font-bold pb-2'>ACCOUNTABLE</h1>
                        <p className='text-center text-sm text-gray-400 mb-10 mx-6'>
                            Make yourself accountable and reach your goals and
                            dreams!
                        </p>
                    </div>
                    <div className='w-10/12 flex flex-col items-center rounded-lg border-t-2 border-secondary-color bg-main text-white shadow-xl'>
                        <div className='mt-10'>
                            <Image
                                className='object-cover object-center rounded'
                                width={150}
                                height={150}
                                alt='success'
                                src='/success.svg'
                            />
                        </div>
                        <h1 className='text-2xl font-bold pb-2'>SUCCESS</h1>
                        <p className='text-center text-sm text-gray-400 mb-10 mx-6'>
                            Show your goals to the world, be accountable for it
                            and you will eventually succeed!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Challenge;
