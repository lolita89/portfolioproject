import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import './Video.css';

class Video extends Component {
    render() {
        // const opts = {
        //     height: '390',
        //     width: '640',
        //     playerVars: { // https://developers.google.com/youtube/player_parameters
        //       autoplay: 1
        //     }
        //   };
        return (
            <div>
                {/* <Image src="assets/womanheader.jpg" className="header-image img-responsive" /> */}
                <Grid>
                <Row>
                <div>
                <iframe title='women in tech' width="560" height="315" src="https://www.youtube.com/embed/XebNxUE3ugA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                Tech Inspiration</iframe>
                </div>
                </Row>
                </Grid>
            </div>
        );
    }
}

export default Video;