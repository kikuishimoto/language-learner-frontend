import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import PhraseCard from "./PhraseCard";
import { fetchCategoryPhrases, fetchCategory } from "../actions/categoriesActions"
import './PhraseCard.css'

class CategoryShow extends Component {
    componentDidMount(){
        const id = this.props.id
        if (!this.props.categories.length){
            this.props.fetchCategory(id)
        }
        this.props.fetchCategoryPhrases(id)

    }
    renderPhraseCards() {
        let allPhrases;
        //if (this.props.phraseReducer.phrases.data){
        allPhrases = this.props.categoriesReducer.category_phrases
        //} else {
        //    allPhrases = this.props.phraseReducer.phrases
        //}
        
        return allPhrases.map((phrase) => {
            return <PhraseCard key={phrase.id} phrase={phrase} />
        })
    }
    render() {
        if (!this.props.categoriesReducer.categories.length) {
            return(
                <div>
                    <h1>Loading...</h1>
                </div>
            )
            
            } else {
                const category = this.props.categoriesReducer.categories.find((category) => category.id == this.props.id)
                return (
                    <div>
                    <h1> {category.attributes.name} </h1>
                    {this.renderPhraseCards()}
                    </div>
    
                )
            }

    
        

    }

}
const mapToProps = (state) => {
    return state;
}

export default connect(mapToProps, {fetchCategoryPhrases, fetchCategory})(CategoryShow)