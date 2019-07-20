import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import {save} from 'redux-localstorage-simple';


/*const logger = (state) => (next) => (action) => {
    console.log('action started', action);
    next(action);
    console.log('action finished', action);
};*/

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


const configureStore = preloadedState => (
    createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                save({namespace: 'to-do-app'})
            )
        )
    )
);

const store = configureStore({});

export default store;