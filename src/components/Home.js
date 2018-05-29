import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import Latihan from './Latihan';
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
    count: 42
};

function reducer(state = initialState, action){
    switch(action.type) {
        case "KALI":
        return {
            count: state.count * 2
        };
        case "TAMBAH":
        return {
            count: state.count + 2
        };
        case "KURANG":
        return {
            count: state.count - 2
        };
        default:
        return state;
    }
}
const store =  createStore(reducer);

store.dispatch({type: "KALI"})
store.dispatch({type: "TAMBAH"})
store.dispatch({type: "KURANG"})


class Home extends Component {
    
    render() {

        return (
            <Grid>
                <Jumbotron>
                    <h2> Welcome to Cika's Page</h2>
                    <p>Let's have fun and enjoy!</p>
                    <Link to="/resume">
                      <Button bsStyle="warning">My Resume</Button>
                    </Link>
                </Jumbotron>
                <Provider store={store}>
              <Latihan count={2}/>
                </Provider>
                <Row className="show-grid text-center">
                <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/foto-cika.jpg" circle className="resume-pic" />
                <h3>Cika</h3>
                <p>It is me</p>
                
                

                </Col>
                </Row>
            </Grid>        
        );
    }
}

export default Home;