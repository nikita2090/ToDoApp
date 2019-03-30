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
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    id: PropTypes.number,
    toggleTask: PropTypes.func,
    deleteTask: PropTypes.func,
};

ToDoItem.defaultProps = {
    text: '',
    isCompleted: false,
    id: 0,
    toggleTask: () => {},
    deleteTask: () => {},
};

export default ToDoItem;