import Goal from "../models/Goal";
import FameCard from "./shared/FameCard";

const HallOfFame = (props: {
    goals: Goal[];
    submitGoal: (goal: Goal) => Promise<void>;
}): JSX.Element => {
    const { goals, submitGoal } = props;

    return (
        <section id='halloffame'>
            <div className='flex flex-col items-center'>
                <h1 className='text-white lg:text-5xl'>
                    People and their goals
                </h1>
                {goals.length
                    ? goals.map((goal: Goal) => {
                          return (
                              <FameCard
                                  key={goal.id}
                                  goal={goal}
                                  submitGoal={submitGoal}
                              />
                          );
                      })
                    : null}
            </div>
        </section>
    );
};

export default HallOfFame;
