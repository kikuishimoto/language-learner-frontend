import React, { Component } from 'react';
import PhraseCard from "../components/PhraseCard";
import { connect } from 'react-redux';
import { fetchPhrases } from "../actions/phrasesActions";
import PhraseInput from "../components/PhraseInput";
import { Link } from "react-router-dom";

class PhrasesContainer extends React.Component {
    componentDidMount() {
        this.props.fetchPhrases();
    }

    renderPhraseCards() {
            let allPhrases;
            //if (this.props.phraseReducer.phrases.data){
            allPhrases = this.props.phraseReducer.phrases
            //} else {
            //    allPhrases = this.props.phraseReducer.phrases
            //}
            
            return allPhrases.map((phrase) => {
                return <PhraseCard key={phrase.id} phrase={phrase} />
            })
    }
    render() {
        return (
            <div id="PhrasesContainer">
                
                <h2>All Phrases</h2>
                <Link to="phrases/new">📝 Add a new phrase</Link><br></br>
                {this.renderPhraseCards()}
                
                

            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {fetchPhrases})(PhrasesContainer);