import {CHANGE_FILTER} from "../constants";
import { load } from 'redux-localstorage-simple';

let STATE = load({namespace: 'to-do-app'});

if (!STATE || !STATE.filter || !STATE.filter.length) {
    STATE = {
        filter: 'all',
    }
}

const filter = (state = STATE.filter, {type, activeFilter}) => {
    switch (type) {
        case CHANGE_FILTER:
            return activeFilter;
        default:
            return state;
    }
};

export default filter;