import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import PhraseCard from "./PhraseCard";
import { fetchCategory } from "../actions/categoriesActions"


class CategoryShow extends Component {
    componentDidMount= () => {
        let id = this.props.id
        if (this.props.categories === [] ){
            debugger
            this.props.fetchCategory(id)
        }
    }
    render() {
        return (
            
            <div> hello </div>

        )
    }

}
const mapStateToProps = (state) => {
    return state
 }

export default connect(mapStateToProps, {fetchCategory})(CategoryShow)