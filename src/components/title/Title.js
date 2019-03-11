import React from 'react';
import PropTypes from 'prop-types';

import './Title.css';
import {Container, Row, Col} from "reactstrap/dist/reactstrap.es";

const Title = ({title}) => (
    <header>
        <Container>
            <Row>
                <Col>
                    <h1 className="title">{title}</h1>
                </Col>
            </Row>
        </Container>
    </header>
);

Title.propTypes = {
    title: PropTypes.string
};

Title.defaultProps = {
    title: 'Title'
};


export default Title;