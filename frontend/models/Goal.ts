class Goal {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public investment: number,
        public deadline: number,
        public succeeded: boolean,
        public finished: boolean,
        public creator: string,
        public trustedPerson: string
    ) {}
}

export default Goal;
