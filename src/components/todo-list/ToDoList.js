import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../../components/todo-item/ToDoItem';
import './ToDoList.css';


const ToDoList = ({taskList, toggleTask}) => (
    <ul className="todo-list">
        {taskList.map(({id, text, isCompleted}) => (
            <ToDoItem
                key={id}
                text = {text}
                isCompleted = {isCompleted}
                toggleTask={toggleTask}
                id={id}
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
    toggleTask: PropTypes.func.isRequired
};

export default ToDoList;
