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
    uint public totalGoalsSucceeded;

    Goal[] public allGoals;

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
    /// @dev Deadline will be an uint that is measured in days in seconds.
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
        goal.deadline = _deadline;
        goal.creator = payable(msg.sender);
        goal.trustedPerson = _trustedPerson;

        totalGoals++;

        allGoals.push(goal);

        emit GoalCreated(totalGoals - 1);
    }

    function setGoalStatus(uint _goalID)
        external
        onlyTrusted(_goalID)
    {
        goals[_goalID].succeeded = true;

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
            totalGoalsSucceeded++;
            require(succeed, "FAILED_SEND_USER");
            totalPayback += goal.investment;
        }

        goal.finished = true;
        emit GoalExecuted(_goalID);
    }

    function getGoals() public view returns (string[] memory, string[] memory, uint[] memory, uint[] memory, bool[] memory, bool[] memory, address[] memory,address[] memory){
      string[] memory name = new string[](totalGoals);
      string[] memory description = new string[](totalGoals);
      uint[] memory investment = new uint[](totalGoals);
      uint[] memory deadline = new uint[](totalGoals);
      bool[] memory succeeded = new bool[](totalGoals);
      bool[] memory finished = new bool[](totalGoals);
      address[] memory creator = new address[](totalGoals);
      address[] memory trustedPerson = new address[](totalGoals);
      for (uint i = 0; i < totalGoals; i++) {
          Goal storage goal = goals[i];
          name[i] = goal.name;
          description[i] = goal.description;
          investment[i] = goal.investment;
          deadline[i] = goal.deadline;
          succeeded[i] = goal.succeeded;
          finished[i] = goal.finished;
          creator[i] = goal.creator;
          trustedPerson[i] = goal.trustedPerson;
      }

      return (name,description,investment,deadline,succeeded,finished,creator,trustedPerson);
  }

}