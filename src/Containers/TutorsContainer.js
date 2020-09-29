import React, { Component } from 'react';
import { connect } from 'react-redux';

class TutorsContainer extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
    
}
const mapSateToProps = (state) => {
    return state
}
export default connect(mapSateToProps)(TutorsContainer)