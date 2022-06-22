import Goal from "../models/Goal";
import FameCard from "./shared/FameCard";

const HallOfFame = (props: { goals: Goal[] }): JSX.Element => {
    const { goals } = props;

    return (
        <section id='halloffame'>
            <div className='flex flex-col items-center'>
                <h1 className='text-white lg:text-5xl'>
                    People and their goals
                </h1>
                {goals.map((goal: Goal) => {
                    return <FameCard key={goal.id} goal={goal} />;
                })}
                <FameCard goal={goals[0]} />
                <FameCard goal={goals[0]} />
            </div>
        </section>
    );
};

export default HallOfFame;
