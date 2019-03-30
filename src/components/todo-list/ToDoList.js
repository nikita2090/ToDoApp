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
            text: PropTypes.string,
            isCompleted: PropTypes.bool,
        })
    ),
    toggleTask: PropTypes.func,
    deleteTask: PropTypes.func
};

ToDoList.defaultProps = {
    taskList: {
        id: 0,
        text: '',
        isCompleted: false
    },
    toggleTask: () => {},
    deleteTask: () => {}
};


export default ToDoList;
