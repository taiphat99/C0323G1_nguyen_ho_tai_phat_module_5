import React, { useEffect, useState } from 'react';
import * as toDoListService from './ToDoListService';


const ToDoList = () => {
    const [list, setList] = useState([]);


    useEffect(() => {
        getAll();
    }, [])


    const getAll = async () => {
        const result = await toDoListService.getAll();
        setList(result);
    }


    const add = async () => {
        let task = document.getElementById("task").value;
        await toDoListService.addToDoList({ title: task });
        await getAll();
        document.getElementById("task").value = "";
    }


    return (
        <div>
            <h1>To Do List</h1>
            <input type='text' id="task" ></input><button onClick={add}>Add</button>
            <ul>
                {list.map((task) => (
                    <li key={task.id}>{task.title}</li>
                )
                )}

            </ul>
        </div>
    );
};

export default ToDoList;