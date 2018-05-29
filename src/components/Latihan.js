import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { connect } from "react-redux"

class Latihan extends React.Component {
    
    handleClickKali = () => {
        this.props.dispatch({ type: "KALI"})
}

    handleClickTambah = () => {
        this.props.dispatch({ type: "TAMBAH"})        
}

    handleClickKurang = () => {
        this.props.dispatch({ type: "KURANG"})
}

    render() {
        return (
            <div>
           <Button onClick={this.handleClickKali} >x</Button>
           <span>{this.props.count}</span>
           <Button onClick={this.handleClickTambah}>+</Button>
           <Button onClick={this.handleClickKurang}>-</Button>
           </div>
        );
    }
}

// Latihan.propTypes = {};
const mapStateToProps = state =>({
    count: state.count
})
export default connect(mapStateToProps)(Latihan);
