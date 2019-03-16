import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../../components/todo-item/ToDoItem';
import './ToDoList.css';


const ToDoList = ({taskList, toggleTask, deleteTask}) => (
    <ul className="todo-list">
        {taskList.map(({id, text, isCompleted}) => (
            <ToDoItem
                key={id}
                text={text}
                isCompleted={isCompleted}
                id={id}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
            />
        ))}
    </ul>
);

ToDoList.propTypes = {
    taskList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string.isRequired,
            isCompleted: PropTypes.bool,
        }).isRequired
    ).isRequired,
    toggleTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
};

export default ToDoList;
