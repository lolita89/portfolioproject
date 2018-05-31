import React from 'react';
import { Button } from 'react-bootstrap';
// #1 USING REDUX => Connect to react redux in the file of component
import { connect } from "react-redux"
// import { state } from './reducers/reducer'

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
           <Button bsStyle="danger" bsSize="large" onClick={this.handleClickKali} ><b>x</b></Button>
           <Button bsStyle="danger" bsSize="large" onClick={this.handleClickTambah}><b>+</b></Button>
           <Button bsStyle="danger" bsSize="large" onClick={this.handleClickKurang}><b>-</b></Button>
           <span>{this.props.count}kali</span>
           </div>
        );
    }
}

// #2 USING REDUX => Create mapStateToProps function
const mapStateToProps = state =>({
    count: state.count
})

// #1 USING REDUX => Connect to react redux in the file of component
export default connect(mapStateToProps)(Latihan);
