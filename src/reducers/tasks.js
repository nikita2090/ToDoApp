import {ADD_TASK, TOGGLE_TASK, DELETE_TASK} from '../constants';
import { load } from 'redux-localstorage-simple';

let STATE = load({namespace: 'to-do-app'});

if (!STATE || !STATE.tasks || !STATE.tasks.length) {
    STATE = {
        tasks: []
    }
}

const tasks = (state = STATE.tasks, {type, id, text, isCompleted}) => {
    switch (type) {
        case ADD_TASK:
            return [
                ...state, {
                    id,
                    text,
                    isCompleted
                }
            ];
        case TOGGLE_TASK:
            return [...state].map((task) => {
                if (task.id === id) {
                    task.isCompleted = !task.isCompleted;
                }
                return task;
            });
        case DELETE_TASK:
            return [...state].filter(task => task.id !== id);
        default:
            return state;
    }
};

export default tasks;