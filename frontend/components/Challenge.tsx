import Image from "next/image";

const Challenge = (props: {
    challenge: any;
    days: any;
    trustedAccount: any;
}): JSX.Element => {
    const { challenge, days, trustedAccount } = props;

    return (
        <section
            id='challenge'
            className='border-2 rounded-3xl border-secondary-color m-10 bg-card-color'
        >
            <div className='container mx-auto flex px-5 py-24 justify-around items-center'>
                <div className='flex flex-col text-white'>
                    <h1 className='title-font sm:text-6xl text-3xl mb-6 font-medium'>
                        Challenge yourself
                    </h1>
                    <p className='text-gray-400'>
                        Enter your goal and make yourself accountable.
                    </p>
                </div>
                <div className='flex flex-col items-center'>
                    <label className='text-gray-700' htmlFor='name'>
                        <div>
                            <h2 className='title-font sm:text-3xl mb-4 font-medium text-white text-center'>
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
                    <div className='container mx-auto flex px-5 py-24 flex-col md:flex-row gap-10 items-center justify-center'>
                        <div>
                            <h2 className='title-font sm:text-3xl mb-4 font-medium text-white'>
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
                        </div>
                        <div>
                            <h2 className='title-font sm:text-3xl mb-4 font-medium text-white'>
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
            </div>
        </section>
    );
};

export default Challenge;
