import {ADD_TASK, TOGGLE_TASK, DELETE_TASK, CHANGE_FILTER } from '../constants';

export const addTask = (id, text, isCompleted) => ({
    type: ADD_TASK,
    id,
    text,
    isCompleted
});

export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    id
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    id
});

export const changeFilter = (activeFilter) => ({
    type: CHANGE_FILTER,
    activeFilter
});
