import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2> Hey, my name is Cika. Nice to meet you :D </h2>
                    <h4 className="subtitle">I am a Front End Developer living in The Netherlands.</h4>
                    <Link to="/resume">
                    <Button bsStyle="warning"><b>My Resume</b></Button>
                    </Link>
                </Jumbotron>

                <Row className="    -grid text-center">
                    <Col xs={4} md={5} >
                        <a href="https://github.com/lolita89">
                        <Image className="Github" src="assets/GitHub_Logo.png" />
                        </a>

                        <br/>
                        <br/>
                        <br/>
                    
                        <a href="https://www.linkedin.com/in/cikalolita/">
                        <Image className="Github" src="assets/linkedin.png" />
                        </a>
                    </Col>

                    <Col xs={4} md={5} mdPush={2} >
                        <Image src="assets/foto-cika.jpg" circle className="resume-pic" />   
                        <h3>Cika Lolita Sugiharto</h3>
                        <h4>A Junior Front-end Developer</h4>
                    </Col>
                </Row>
            </Grid>        
        );
    }
}

export default Home;