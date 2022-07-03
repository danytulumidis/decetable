import Goal from "../../models/Goal";

const FameCard = (props: {
    goal: Goal;
    submitGoal: (goal: Goal) => Promise<void>;
}): JSX.Element => {
    const { goal, submitGoal } = props;

    let statusBadge: JSX.Element;
    // TODO: Extract in shared component
    if (goal.finished && goal.succeeded) {
        statusBadge = (
            <div className='absolute top-5 right-5 w-1/6 h-8 bg-green-700 rounded-lg shadow-inner flex items-center justify-center'>
                <p className='text-lg'>Success</p>
            </div>
        );
    } else if (goal.finished && !goal.succeeded) {
        statusBadge = (
            <div className='absolute top-5 right-5 w-1/6 h-8 bg-secondary-color rounded-lg shadow-inner flex items-center justify-center'>
                <p className='text-lg'>Failed</p>
            </div>
        );
    } else {
        statusBadge = (
            <div className='absolute top-5 right-5 w-1/6 h-8 bg-blue-700 rounded-lg shadow-inner flex items-center justify-center'>
                <p className='text-lg'>Active</p>
            </div>
        );
    }

    return (
        <div className='px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-8 lg:py-16 text-white'>
            <div className='flex flex-col max-w-screen-lg overflow-hidden border-t-2 border-secondary-color rounded-lg shadow-xl lg:flex-row sm:mx-auto'>
                <div className='relative lg:w-1/2'>
                    <img
                        src='https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80'
                        alt='Persons talking in a work setting.'
                        className='object-cover w-full lg:absolute h-80 lg:h-full'
                    />
                    <svg
                        className='absolute top-0 right-0 hidden h-full text-card-color lg:inline-block'
                        viewBox='0 0 20 104'
                        fill='currentColor'
                    >
                        <polygon points='17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104'></polygon>
                    </svg>
                </div>
                <div className='flex flex-col justify-center p-8 bg-card-color lg:py-16 lg:pl-10 lg:w-1/2 relative'>
                    {statusBadge}
                    <div>
                        <p className='inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-white uppercase bg-secondary-color rounded-full'>
                            {goal.creator}
                        </p>
                    </div>
                    <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
                        {goal.name}
                    </h5>
                    <p className='py-5 mb-5 text-gray-300'>
                        {goal.description}
                    </p>
                    <div className='flex items-center mb-14 gap-4'>
                        <div className='flex flex-col items-left flex-1'>
                            <p className='mb-2'>Trusted Person</p>
                            <p className='flex justify-center px-3 py-1 text-xs font-medium tracking-wider  uppercase bg-secondary-color rounded-full'>
                                {goal.trustedPerson}
                            </p>
                        </div>
                        <div className='flex-1 flex flex-col items-center'>
                            <p className='mb-2'>Deadline</p>
                            <p className='inline-block px-3 py-1 text-xs font-medium tracking-wider  uppercase bg-secondary-color rounded-full'>
                                {new Date(goal.deadline).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                    {!goal.finished || goal.deadline !== 0 ? (
                        <button
                            type='submit'
                            className='inline-flex items-center justify-center h-12 px-6 mr-64 font-black tracking-wide text-white bg-secondary-color rounded-lg hover:bg-secondary-color focus:shadow-outline focus:outline-none transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110'
                            onClick={() => submitGoal(goal)}
                        >
                            Submit
                        </button>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default FameCard;
