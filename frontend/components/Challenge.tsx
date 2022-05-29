import Image from "next/image";

const Challenge = (props: {
    challenge: any;
    days: any;
    trustedAccount: any;
    failedAccount: any;
}): JSX.Element => {
    const { challenge, days, trustedAccount, failedAccount } = props;

    return (
        <section id='challenge' className='min-h-screen'>
            <div className='absolute -left-20 top-42 opacity-50'>
                <Image width={280} height={280} alt='hero' src='/blobby.svg' />
            </div>
            <div className='absolute right-0 top-42 opacity-50'>
                <Image width={480} height={480} alt='hero' src='/blobby.svg' />
            </div>
            <div className='container mx-auto flex px-5 py-24 flex-col items-center'>
                <h1 className='title-font sm:text-5xl text-3xl mb-4 font-medium text-white'>
                    Challenge yourself
                </h1>
                <div className='border-2 border-secondary-color my-4 w-1/6'></div>
                <label className='text-gray-700' htmlFor='name'>
                    <textarea
                        className='flex-1 appearance-none border border-gray-300 w-100 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent'
                        id='goal'
                        placeholder='Enter your Goal!'
                        name='goal'
                        rows={5}
                        cols={40}
                        value={challenge}
                    ></textarea>
                </label>
                <div className='container mx-auto flex px-5 py-24 flex-col md:flex-row gap-10 items-center justify-center'>
                    <div>
                        <h2 className='title-font sm:text-2xl mb-4 font-medium text-white'>
                            Time for Completion (in Days)
                        </h2>
                        <div className='relative'>
                            <input
                                type='number'
                                id='rounded-email'
                                className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent'
                                placeholder='Your email'
                                value={days}
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className='title-font sm:text-2xl mb-4 font-medium text-white'>
                            Account to be trusted
                        </h2>
                        <div className='relative'>
                            <input
                                type='text'
                                id='rounded-email'
                                className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent'
                                placeholder='0x...'
                                value={trustedAccount}
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className='title-font sm:text-2xl mb-4 font-medium text-white'>
                            Fail Account
                        </h2>
                        <div className='relative'>
                            <input
                                type='text'
                                id='rounded-email'
                                className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent'
                                placeholder='0x...'
                                value={failedAccount}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Challenge;
