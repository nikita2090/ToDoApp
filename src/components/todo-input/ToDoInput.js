import React from 'react';
import PropTypes from 'prop-types';

import './ToDoInput.css'

const ToDoInput = ({value, onChange, onKeyPress}) => (
    <div className='todo-input-wrapper'>
        <i className='fas fa-plus'/>
        <input
            className='todo-input'
            placeholder='Click to add task'
            onChange={onChange}
            value={value}
            onKeyPress={onKeyPress}
        />
    </div>
);

ToDoInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired
};



export default ToDoInput;