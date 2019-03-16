import React, {Component} from 'react';

import ToDoInput from '../../components/todo-input/ToDoInput';
import ToDoList from '../../components/todo-list/ToDoList';
import Footer from '../../components/footer/Footer';

import {Container, Row, Col} from 'reactstrap';

import './ToDo.css';

import {connect} from 'react-redux';
import {addTask, toggleTask} from '../../actions/actionCreator'

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
        if (inputText.length > 3 && key === 'Enter') {
            const {addTask} = this.props;

            addTask(new Date().getTime(), inputText, false);

            this.setState({
                inputText: ''
            });
        }
    };


    render() {
        const {activeFilter} = this.state;
        const {tasks, toggleTask} = this.props;
        const isTaskExists = tasks && tasks.length > 0;

        return (
            <Container>
                <Row>
                    <Col>
                        <div className='todo-wrapper'>
                            <ToDoInput
                                value={this.state.inputText}
                                onChange={this.handleInputChange}
                                onKeyPress={this.addTask}/>
                            {isTaskExists && <ToDoList taskList={tasks} toggleTask={toggleTask}/>}
                            {isTaskExists && <Footer amount={tasks.length}
                                                     activeFilter={activeFilter}/>}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(state => ({
    tasks: state.tasks
}), {addTask, toggleTask})(ToDo);