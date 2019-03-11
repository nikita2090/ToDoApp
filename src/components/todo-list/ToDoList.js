import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../../components/todo-item/ToDoItem';
import './ToDoList.css';


const ToDoList = ({taskList}) => (
    <ul className="todo-list">
        {taskList.map(({id, text, isCompleted}) => (
            <ToDoItem
                key={id}
                text = {text}
                isCompleted = {isCompleted}
            />
        ))}
    </ul>
);

ToDoList.propTypes = {
    taskList: PropTypes.array
};

ToDoList.defaultProps = {
    taskList: []
};

export default ToDoList;
