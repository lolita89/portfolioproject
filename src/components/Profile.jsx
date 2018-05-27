import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Col xs={6} sm={4}>
                    <Image src="assets/cikacv.jpg" />                
                    </Col>
                </Grid>
            </div>
        );
    }
}

export default Profile;