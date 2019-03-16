import React from 'react';
import PropTypes from 'prop-types';

import './ToDoItem.css';

const ToDoItem = ({text, isCompleted, toggleTask, id}) => (
    <li className="todo-item">
        <i className={isCompleted ?
                        'mark far fa-check-circle' : 'mark far fa-circle'}
            onClick={() => toggleTask(id)}/>
        <span className={isCompleted ?
                            'completed text' : 'text'}>{text}</span>
        <i className="fas fa-times"/>
    </li>
);

ToDoItem.propTypes = {
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    toggleTask: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};

export default ToDoItem;