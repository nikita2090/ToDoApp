import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

const FILTERS_BTN = [
    {
        text: 'all',
        id: 'all'
    },
    {
        text: 'Active',
        id: 'active'
    },
    {
        text: 'Completed',
        id: 'completed'
    }
];

const Footer = ({amount, activeFilter}) => (
    <div className="footer">
        <span className="amount">{`${amount} Tasks left`}</span>
        <div className="btn-group">
            {FILTERS_BTN.map(({text, id}) => (
                <button
                    key = {id}
                    className = {id ===activeFilter ? 'filter-btn active' : 'filter-btn'}
                >{text}</button>
            ))}
        </div>
    </div>
);

Footer.propTypes = {
    amount: PropTypes.number,
    activeFilter: PropTypes.string
};

export default Footer;