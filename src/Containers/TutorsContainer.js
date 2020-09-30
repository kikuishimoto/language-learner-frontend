import React, { Component } from 'react';
import Tutors from '../components/Tutors';
import { connect } from 'react-redux';
import { fetchTutors } from "../actions/tutorsActions";
import TutorInput from "../components/TutorInput"



class TutorsContainer extends Component {
    componentDidMount = () => {
        this.props.fetchTutors()

    }
    renderTutors() {
        let allTutors;
        //if (this.props.tutorsReducer.tutors.data) {
        allTutors = this.props.tutorsReducer.tutors
        //} else {
        //    allTutors = this.props.tutorsReducer.tutors
        //}
        return allTutors.map((tutor) => {
            return <Tutors key={tutor.id} tutor={tutor} />
        })

    }
    render() {
        return (
            <div>
                <TutorInput />
                {this.renderTutors()}

            </div>
        )
    }
    
}
const mapSateToProps = (state) => {
    return state
}
export default connect(mapSateToProps, {fetchTutors})(TutorsContainer)