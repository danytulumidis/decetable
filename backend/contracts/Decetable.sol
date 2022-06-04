//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Decetable {
    // EVENTS
    event GoalCreated(uint goalID);
    event GoalExecuted(uint goalID);

    // VARIABLES
    struct Goal {
        string name;
        string description;
        uint investment;
        uint deadline;
        bool succeeded;
        bool finished;
        address payable creator;
        address trustedPerson;
    }

    address payable private immutable charity;
    uint public totalGoals;
    uint public totalPayback;
    uint public totalCharity;

    mapping(uint => Goal) public goals;

    constructor(address payable _charity){
        charity = _charity;
    }

    // MODIFIERS
    modifier onlyTrusted(uint _goalID) {
        require(goals[_goalID].trustedPerson == msg.sender, "NOT_TRUSTED");
        _;
    }

    // FUNCTIONS
    /// @notice Creates a Goal for a User
    /// @dev Deadline will be an uint that is measured in days
    function createGoal(
        string calldata _name,
        string calldata _description,
        uint _deadline,
        address _trustedPerson
    ) external payable {
        require(msg.value > 0, "PRICE_MUST_BE_OVER_0");
        Goal storage goal = goals[totalGoals];
        goal.name = _name;
        goal.description = _description;
        goal.investment = msg.value;
        goal.deadline = block.timestamp + (_deadline * 1 days);
        goal.creator = payable(msg.sender);
        goal.trustedPerson = _trustedPerson;

        totalGoals++;

        emit GoalCreated(totalGoals - 1);
    }

    function setGoalStatus(uint _goalID, bool _succeeded)
        external
        onlyTrusted(_goalID)
    {
        goals[_goalID].succeeded = _succeeded;

        _executeGoal(_goalID);
    }

    function _executeGoal(uint _goalID) private {
        Goal storage goal = goals[_goalID];
        require(goal.finished != true, "ALREADY_EXECUTED");

        if (goal.succeeded == false) {
            (bool succeed, ) = charity.call{value: goal.investment}(
                ""
            );
            require(succeed, "FAILED_SEND_FAIL");
            totalCharity += goal.investment;
        } else {
            (bool succeed, ) = goals[_goalID].creator.call{value: goal.investment}(
                ""
            );
            require(succeed, "FAILED_SEND_USER");
            totalPayback += goal.investment;
        }

        goal.finished = true;
        emit GoalExecuted(_goalID);
    }
}
