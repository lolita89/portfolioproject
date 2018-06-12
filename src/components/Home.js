import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import Latihan from '../containers/Latihan.js'
import Quotes from './Quotes';

class Home extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         title: "Welcome",
    //     };
    // }

    // changeTitle(title){
    //     this.setState({title});

    // }
    render() {
        return (
            <Grid>
                <Jumbotron>
                <h2> Hey, my name is Cika. Nice to meet you :D </h2>
                    <p className="subtitle">I am a Front End Developer living in The Netherlands.</p>
                    <Link to="/resume">
                      <Button bsStyle="warning"><b>My Resume</b></Button>
                    </Link>
                </Jumbotron>                
                <Row className="show-grid text-center">
                <Col xs={4} md={5} >
                    <a href="https://github.com/lolita89">
                    <Image className="Github" src="assets/GitHub_Logo.png" />
                    </a>
                    <a href="https://www.linkedin.com/in/cikalolita/">
                    <Image className="Github" src="assets/linkedin.png" />
                    </a>
                </Col>
                <Col xs={4} md={5} mdPush={2} >
                    <Image src="assets/foto-cika.jpg" circle className="resume-pic" />
                    <h3>Cika Lolita SUgiharto</h3>
                    <p>A Junior Front-end Developer</p>
                {/* <Quotes changeTitle={this.changeTitle.bind(this)} title={this.state.title}/> */}
                </Col>
                </Row>
            </Grid>        
        );
    }
}

export default Home;