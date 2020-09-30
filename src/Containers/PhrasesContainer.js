import React, { Component } from 'react';
import PhraseCard from "../components/PhraseCard";
import { connect } from 'react-redux';
import { fetchPhrases } from "../actions/phrasesActions";
import PhraseInput from "../components/PhraseInput"

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
            <div>
                <h1>hi</h1>
                <PhraseInput />
                {this.renderPhraseCards()}
                
                

            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {fetchPhrases})(PhrasesContainer);