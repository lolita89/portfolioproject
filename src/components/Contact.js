import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class Contact extends Component {
    constructor() {
        super()
        
        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="name">Name:</Label>
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <input
                            type="email"
                            name="email"
                            onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="message">Message:</Label>
                        <input
                            type="textarea"
                            name="message"
                            onChange={this.handleChange} />
                    </FormGroup>

                    <Button>Submit</Button>

                </Form>
                
            </div>
        );
    }
}

export default Contact;