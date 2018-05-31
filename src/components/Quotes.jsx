import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './Quotes.css';

class Quotes extends Component {
    render() {
        return (
            <div className="text-center">
                <Image src="assets/woman-in-tech.jpg" className="header-image" />
                <Image src="assets/woman-in-tech2.jpg" className="header-image" />
                <Image src="assets/woman-in-tech3.jpg" className="header-image" />
                <Image src="assets/woman-in-tech4.jpg" className="header-image " />
            </div>
        );
    }
}

export default Quotes;