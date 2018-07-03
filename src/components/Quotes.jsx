import React, { Component } from 'react';
import { Image, ResponsiveEmbed } from 'react-bootstrap';
import './Quotes.css';


class Quotes extends React.Component {
    // handleChange(e){
    //     const title = e.target.value
    //     this.props.changeTitle(title);

    // }
    render() {
        return (
            <div>
            <div className="text-center">
                <Image src="assets/woman-in-tech.jpg" className="header-image img-responsive" />
                <Image src="assets/woman-in-tech2.jpg" className="header-image img-responsive" />
                <Image src="assets/woman-in-tech3.jpg" className="header-image img-responsive" />
                <Image src="assets/woman-in-tech4.jpg" className="header-image img-responsive" />
            </div>
            <div>
                {/* {this.props.title}
                <input value={this.props.title} onChange={this.handleChange.bind(this)} /> */}
            </div>
            </div>
            
        );
    }
}

export default Quotes;

