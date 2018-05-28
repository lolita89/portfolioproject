import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import Latihan from './Latihan'

class Home extends Component {
    constructor(props){
        super(props);
            this.state = ({number: 1});
    }

    handleClickKali = () => {
        var newStateKali = this.state.number * 2
        this.setState({number: newStateKali});
    }

    handleClickTambah = () => {
        var newStateTambah = this.state.number + 2
        this.setState({number: newStateTambah});
    }
    
    handleClickKurang = () => {
        var newStateKurang = this.state.number - 1
        this.setState({number: newStateKurang});
    }

    
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

                <Latihan labelqwqw='x' actionz={this.handleClickKali} />
                <Latihan labelqwqw='-' actionz={this.handleClickKurang} />
                <Latihan labelqwqw='+' actionz={this.handleClickTambah} />

                <input value={this.state.number}/>
                
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