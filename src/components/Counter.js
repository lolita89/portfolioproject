import React from 'react';
import './ApiEx.css';


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement =  this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement(){
        this.setState({
            count: this.state.count - 1
        })
    }

    reset(){
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div className="container-api">

                <div className="button_container">
                    <button className="button" onClick={this.increment}>increment!</button>
                    <button className="button" onClick={this.decrement}>decrement!</button>
                    <button className="button" onClick={this.reset}>reset!</button>
                </div>

                <p>{this.state.count}</p>
            </div>
        );
    }
}


export default Counter;
