export const ABI = [
    {
        inputs: [
            {
                internalType: "address payable",
                name: "_charity",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "goalID",
                type: "uint256",
            },
        ],
        name: "GoalCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "goalID",
                type: "uint256",
            },
        ],
        name: "GoalExecuted",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "allGoals",
        outputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "description",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "investment",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "succeeded",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "finished",
                type: "bool",
            },
            {
                internalType: "address payable",
                name: "creator",
                type: "address",
            },
            {
                internalType: "address",
                name: "trustedPerson",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "string",
                name: "_description",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "_deadline",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_trustedPerson",
                type: "address",
            },
        ],
        name: "createGoal",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "getGoals",
        outputs: [
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "bool[]",
                name: "",
                type: "bool[]",
            },
            {
                internalType: "bool[]",
                name: "",
                type: "bool[]",
            },
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "goals",
        outputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "description",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "investment",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "succeeded",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "finished",
                type: "bool",
            },
            {
                internalType: "address payable",
                name: "creator",
                type: "address",
            },
            {
                internalType: "address",
                name: "trustedPerson",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_goalID",
                type: "uint256",
            },
        ],
        name: "setGoalStatus",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "totalCharity",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalGoals",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalGoalsSucceeded",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalPayback",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
export const DECETABLE_CONTRACT = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
