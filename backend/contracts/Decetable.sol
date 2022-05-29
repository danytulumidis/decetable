//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Decetable {
    event GoalCreated(uint256 goalID);
    event GoalExecuted(uint256 goalID);

    struct Goal {
        string name;
        string description;
        uint256 investment;
        uint256 deadline;
        bool succeeded;
        bool finished;
        // Investment will go to this when Goal is failed
        address failedAccount;
    }

    mapping(uint256 => Goal) public goals;
    mapping(uint256 => address) public goalToUser;
    // The person that will decide if goal is reached or not
    mapping(address => uint256) public trustedToGoal;

    uint256 public totalGoals;

    modifier onlyTrusted(uint256 _goalID) {
        require(trustedToGoal[msg.sender] == _goalID, "NOT_TRUSTED");
        _;
    }

    /// @notice Creates a Goal for a User
    /// @dev Deadline will be an uint that is measured in days
    function createGoal(
        string calldata _name,
        string calldata _description,
        uint256 _deadline,
        address _failedAccount,
        address _trustedPerson
    ) external payable {
        require(msg.value > 0, "PRICE_MUST_BE_OVER_0");
        Goal storage goal = goals[totalGoals];
        goal.name = _name;
        goal.description = _description;
        goal.investment = msg.value;
        goal.deadline = block.timestamp + (_deadline * 1 days);
        goal.failedAccount = _failedAccount;

        goalToUser[totalGoals] = msg.sender;
        trustedToGoal[_trustedPerson] = totalGoals;

        totalGoals++;

        emit GoalCreated(totalGoals - 1);
    }

    function setGoalStatus(uint256 _goalID, bool _succeeded)
        external
        onlyTrusted(_goalID)
    {
        goals[_goalID].succeeded = _succeeded;

        _executeGoal(_goalID);
    }

    function _executeGoal(uint256 _goalID) private {
        Goal storage goal = goals[_goalID];
        require(goal.finished != true, "ALREADY_EXECUTED");

        if (goal.succeeded == false) {
            (bool succeed, ) = goal.failedAccount.call{value: goal.investment}(
                ""
            );
            require(succeed, "FAILED_SEND_FAIL");
        } else {
            (bool succeed, ) = goalToUser[_goalID].call{value: goal.investment}(
                ""
            );
            require(succeed, "FAILED_SEND_USER");
        }

        goal.finished = true;
        emit GoalExecuted(_goalID);
    }
}
