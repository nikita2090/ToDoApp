import React, {Component} from 'react';

import ToDoInput from '../../components/todo-input/ToDoInput';
import ToDoList from '../../components/todo-list/ToDoList';
import Footer from '../../components/footer/Footer';

import {Container, Row, Col} from 'reactstrap';

import './ToDo.css';

import {connect} from 'react-redux';
import {addTask, toggleTask, deleteTask, changeFilter} from '../../actions/actionCreator'

class ToDo extends Component {
    state = {
        activeFilter: 'all',
        inputText: ''
    };

    handleInputChange = ({target: {value}}) => {
        this.setState({
            inputText: value
        })
    };

    addTask = ({key}) => {
        const {inputText} = this.state;
        if (inputText.length > 2 && key === 'Enter') {
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

    getActiveTasks = (tasks) => tasks.filter(task =>(
        !task.isCompleted
    )).length;


    render() {
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
                                value={this.state.inputText}
                                onChange={this.handleInputChange}
                                onKeyPress={this.addTask}/>
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