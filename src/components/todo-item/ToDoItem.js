import React from 'react';
import PropTypes from 'prop-types';

import './ToDoItem.css';

const ToDoItem = ({text, isCompleted, id, toggleTask, deleteTask}) => (
    <li className="todo-item">
        <i className={isCompleted ?
                        'mark far fa-check-circle' : 'mark far fa-circle'}
            onClick={() => toggleTask(id)}/>

        <span className={isCompleted ?
                            'completed text' : 'text'}>{text}</span>

        <i className="fas fa-times"
           onClick={() => deleteTask(id)}/>
    </li>
);

ToDoItem.propTypes = {
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    toggleTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default ToDoItem;