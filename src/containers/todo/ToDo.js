import React, {Component} from 'react';

import ToDoInput from '../../components/todo-input/ToDoInput';
import ToDoList from '../../components/todo-list/ToDoList';
import Footer from '../../components/footer/Footer';

import {Container, Row, Col} from 'reactstrap';

import './ToDo.css';


const TASKS = [
    {
        id: 1,
        text: 'Javascript',
        isComplited: true
    },

    {
        id: 2,
        text: 'React',
        isComplited: true
    },

    {
        id: 3,
        text: 'Redux',
        isComplited: true
    }
];

class ToDo extends Component {
    state = {
        activeFilter: 'all'
    };

    render() {
        const {activeFilter} = this.state;
        const taskList = TASKS;
        const isTaskExists = taskList && taskList.length > 0;

        return (
            <Container>
                <Row>
                    <Col >
                        <div className='todo-wrapper'>
                            <ToDoInput/>
                            {isTaskExists && <ToDoList taskList={taskList}/>}
                            {isTaskExists && <Footer amount={taskList.length}
                                                     activeFilter={activeFilter}/>}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ToDo;