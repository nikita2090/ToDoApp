import {ADD_TASK, TOGGLE_TASK, DELETE_TASK} from '../constants';

const TASKS = [
    {
        id: 1,
        text: 'Javascript',
        isCompleted: true
    },

    {
        id: 2,
        text: 'React',
        isCompleted: true
    },

    {
        id: 3,
        text: 'Redux',
        isCompleted: false
    }
];

const tasks = (state = TASKS, {type, id, text, isCompleted}) => {
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
            return [...state].filter( task => task.id !== id);
        default:
            return state;
    }
};

export default tasks;