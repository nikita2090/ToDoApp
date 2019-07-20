import React, {Component} from 'react';

import './ToDo.css';

import ToDoInput from '../../components/todo-input/ToDoInput';
import ToDoList from '../../components/todo-list/ToDoList';
import Footer from '../../components/footer/Footer';
import {Container, Row, Col} from 'reactstrap';

import {connect} from 'react-redux';
import {addTask, toggleTask, deleteTask, changeFilter} from '../../actions/actionCreator'


class ToDo extends Component {
    state = {
        inputText: ''
    };

    handleInputChange = ({target: {value}}) => {
        this.setState({
            inputText: value
        })
    };

    onPlusClick = () => {
        this.addTask();
    };

    onEnterPress = ({key}) => {
        if (key === 'Enter') {
            this.addTask();
        }
    };

    addTask = () => {
        const {inputText} = this.state;
        if (inputText.length > 2) {
            const {addTask} = this.props;

            addTask(new Date().getTime(), inputText, false);

            this.setState({
                inputText: ''
            });
        }
    };

    filterTasks = (tasks, activeFilter) => {
        switch (activeFilter) {
            case 'active':
                return tasks.filter(task => !task.isCompleted);
            case 'completed':
                return tasks.filter(task => task.isCompleted);

            default:
                return tasks;
        }
    };

    getActiveTasks = (tasks) => tasks.filter(task => (
        !task.isCompleted
    )).length;


    render() {
        const {inputText} = this.state;
        const {tasks, toggleTask, deleteTask, filter, changeFilter} = this.props;
        const isTaskExists = tasks && tasks.length > 0;

        const filteredTasks = this.filterTasks(tasks, filter);
        const activeTasksAmount = this.getActiveTasks(tasks);

        return (
            <Container>
                <Row>
                    <Col>
                        <div className='todo-wrapper'>
                            <ToDoInput
                                value={inputText}
                                onChange={this.handleInputChange}
                                onEnterPress={this.onEnterPress}
                                onPlusClick={this.onPlusClick}
                            />
                            {isTaskExists && <ToDoList taskList={filteredTasks}
                                                       toggleTask={toggleTask}
                                                       deleteTask={deleteTask}/>}
                            {isTaskExists && <Footer amount={activeTasksAmount}
                                                     activeFilter={filter}
                                                     changeFilter={changeFilter}/>}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default connect(({tasks, filter}) => ({
    tasks,
    filter
}), {addTask, toggleTask, deleteTask, changeFilter})(ToDo);