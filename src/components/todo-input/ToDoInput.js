import React from 'react';
import PropTypes from 'prop-types';

import './ToDoInput.css'


const ToDoInput = ({value, onChange, onPlusClick, onEnterPress}) => (
    <div className='todo-input-wrapper'>
        <i className='fas fa-plus'
           onClick={onPlusClick}/>
        <input
            className='todo-input'
            placeholder='Click to add task'
            onChange={onChange}
            value={value}
            onKeyPress={onEnterPress}
        />
    </div>
);


ToDoInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onPlusClick: PropTypes.func,
    onEnterPress: PropTypes.func
};

ToDoInput.defaultProps = {
    value: '',
    onChange: () => {},
    onPlusClick: () => {},
    onEnterPress: () => {}
};

export default ToDoInput;