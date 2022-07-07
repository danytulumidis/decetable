import Image from "next/image";
import { useState } from "react";
import Goal from "../models/Goal";

const Challenge = (props: {
    totalGoals: number;
    account: string;
    createGoal: (goal: Goal, days: number) => Promise<void>;
}): JSX.Element => {
    const { totalGoals, account, createGoal } = props;

    const [name, setName] = useState("");
    const [challenge, setChallenge] = useState("");
    const [days, setDays] = useState(0);
    const [trustedAccount, setTrustedAccount] = useState("");
    const [amount, setAmount] = useState(0);

    const createNewGoal = (): void => {
        const newIDd = totalGoals + 1;
        const newGoal: Goal = new Goal(
            newIDd,
            name,
            challenge,
            amount,
            days,
            false,
            false,
            account,
            trustedAccount
        );

        createGoal(newGoal, days);
    };

    return (
        <section
            id='challenge'
            className='border-y-2 border-secondary-color bg-card-color'
        >
            <div className='container mx-auto flex flex-row gap-4 px-5 py-24 justify-around items-center'>
                <div className='flex flex-col gap-4 items-start w-1/2 ml-20'>
                    <h1 className='title-font sm:text-6xl text-3xl font-medium text-white xl:leading-tight'>
                        Challenge yourself
                    </h1>
                    <p className='text-gray-400 text-center mb-10'>
                        Enter your goal and make yourself accountable.
                    </p>

                    <h2 className='title-font sm:text-2xl font-medium text-white'>
                        Name
                    </h2>

                    <input
                        type='Name'
                        id='name'
                        className='rounded-lg border-transparent flex-1 appearance-none border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110'
                        placeholder='Name of the Goal'
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />

                    <h2 className='title-font sm:text-2xl font-medium text-white'>
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
                            setChallenge(e.target.value);
                        }}
                    ></textarea>

                    <h2 className='title-font sm:text-2xl font-medium text-white'>
                        Time for Completion (in Days)
                    </h2>
                    <div className='relative'>
                        <input
                            type='number'
                            id='days'
                            min='1'
                            step='1'
                            className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110'
                            placeholder='Number of days'
                            value={days}
                            onChange={(e) => {
                                setDays(+e.target.value);
                            }}
                        />
                    </div>
                    <h2 className='title-font sm:text-2xl font-medium text-white'>
                        Amount to invest
                    </h2>
                    <div className='relative'>
                        <input
                            type='number'
                            id='amount'
                            className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110'
                            placeholder='Investment Amount'
                            value={amount}
                            onChange={(e) => {
                                setAmount(+e.target.value);
                            }}
                        />
                    </div>

                    <h2 className='title-font sm:text-2xl font-medium text-white'>
                        Account to be trusted
                    </h2>
                    <div className='relative'>
                        <input
                            type='text'
                            id='trusted'
                            className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary-color focus:border-transparent transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110'
                            placeholder='0x...'
                            value={trustedAccount}
                            onChange={(e) => {
                                setTrustedAccount(e.target.value);
                            }}
                        />
                    </div>

                    <button
                        className='mt-10 h-full inline-flex text-white border-2 border-secondary-color py-2 px-6 focus:outline-none hover:text-secondary-color rounded text-lg z-10 transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110'
                        onClick={createNewGoal}
                    >
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
                                alt='charity'
                                src='/charity.svg'
                            />
                        </div>
                        <h1 className='text-2xl font-bold pb-2'>CHARITY</h1>
                        <p className='text-center text-sm text-gray-400 mb-10 mx-6'>
                            Unreached goals and their investment will be donated
                            to the Charity Save the Children.
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
                            Show your goals to the world, achieve them or fail,
                            you learn either way!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Challenge;
