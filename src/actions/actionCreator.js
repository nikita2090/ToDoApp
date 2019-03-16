import {ADD_TASK, TOGGLE_TASK} from '../constants';

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
