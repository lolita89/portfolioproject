import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2> Welcome to Cika's Page</h2>
                    <p>Let's have fun and enjoy!</p>
                    <Link to="/profile">
                      <Button bsStyle="warning">My Profile</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/foto-cika.jpg" circle className="profile-pic" />
                <h3>Cika</h3>
                <p>It is me</p>
                </Col>
                </Row>
            </Grid>        
        );
    }
}

export default Home;