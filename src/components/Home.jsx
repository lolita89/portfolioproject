import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
            <Grid>
                <Jumbotron>
                    <h2> Welcome to Cika's Page</h2>
                    <p>Let's have fun and enjoy!</p>
                </Jumbotron>
                <Link to="/about">
                </Link>
                <Button bsStyle="warning">About</Button>
            </Grid>
            </div>
        );
    }
}

export default Home;