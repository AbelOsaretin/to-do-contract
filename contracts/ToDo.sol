// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ToDo {
    // Creating a structured data type for my todo contrct.
    struct ToDoInfo {
        string title;
        string description;
        bool status;
    }

    // Created an array to store the structured todo tasks
    ToDoInfo[] todos;

    // Function to create new todo task
    function createToDo(
        string memory _title,
        string memory _description
    ) external {
        todos.push(
            ToDoInfo({title: _title, description: _description, status: false})
        );
    }

    //Function to see ToDo tasks created
    function seeToDo(uint256 _index) external view returns (ToDoInfo memory) {
        return todos[_index];
    }

    // Function to Update ToDo task
    function updateToDo(
        uint256 _index,
        string memory _title,
        string memory _description
    ) external {
        todos[_index].title = _title;
        todos[_index].description = _description;
    }

    // Function to Delete Task
    function deleteToDo(uint256 _index) external {
        delete todos[_index];
    }

    //Function to Toggle Done or Not Done
    function markToDo(uint256 _index) external {
        if (todos[_index].status == false) {
            todos[_index].status = true;
        } else {
            todos[_index].status = false;
        }
    }
}
