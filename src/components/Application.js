import React, { Component } from 'react';
import Latihan from '../containers/Latihan';

class Application extends Component {
    render() {
        return (
            <div>
                <h1>Counter Application</h1>
                <Latihan />
            </div>
        );
    }
}

export default Application;