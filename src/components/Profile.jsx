import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <div>
                <Image src="assets/womanheader.jpg" className="header-image img-responsive" />
                <Grid>
                <h1>Cika Lolita Sugiharto</h1>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                </Grid>
            </div>
        );
    }
}

export default Profile;