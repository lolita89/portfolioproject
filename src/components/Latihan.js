import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Latihan extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
           <Button bsStyle="primary" onClick={this.props.actionz} >{this.props.labelqwqw}</Button>
        );
    }
}

// Latihan.propTypes = {};

export default Latihan;
