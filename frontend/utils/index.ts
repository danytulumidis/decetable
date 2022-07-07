import { ethers } from "ethers";
import Goal from "../models/Goal";

export const formatGoalsArray = (
    fragments: any[],
    totalGoals: number
): Goal[] => {
    let allGoals: Goal[] = [];

    for (let i = 0; i < totalGoals; i++) {
        const deadline = fragments[3][i] * 1000;

        const goal: Goal = {
            id: i,
            name: fragments[0][i],
            description: fragments[1][i],
            investment: +ethers.utils.formatEther(fragments[2][i]),
            deadline: deadline,
            succeeded: fragments[4][i],
            finished: fragments[5][i],
            creator: fragments[6][i],
            trustedPerson: fragments[7][i],
        };

        allGoals.push(goal);
    }

    return allGoals;
};

const checkGoalDeadline = (deadline1: number): boolean => {
    const currentDate: Date = new Date();
    const deadline: Date = new Date(deadline1);
    console.log(currentDate.getTime() > deadline.getTime());

    return currentDate.getTime() > deadline.getTime();
};
