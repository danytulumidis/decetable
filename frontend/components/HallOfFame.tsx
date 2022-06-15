import FameCard from "./shared/FameCard";

const HallOfFame = () => {
    return (
        <section id='halloffame'>
            <div className='flex flex-col items-center'>
                <h1 className='text-white lg:text-5xl'>
                    People and their goals
                </h1>
                <FameCard />
                <FameCard />
            </div>
        </section>
    );
};

export default HallOfFame;
