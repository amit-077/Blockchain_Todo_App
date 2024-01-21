//SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

contract TodoList{

    struct todo{
        string todo;
        uint timestamp;
        bool isDeleted;
    }

    todo[] public todoList;

    function addItem(string memory task) public  {
        todoList.push(todo(task, block.timestamp, false));
    }

    function deleteItem(uint index) public {
        todoList[index].isDeleted = true;
    }

    function returnTodos() public view returns (todo[] memory){
        return todoList;
    }
}