import React, { Component } from 'react';
import Categories from '../components/Categories'
import { connect } from 'react-redux';
import { fetchCategories } from "../actions/categoriesActions";
class CategoriesContainer extends Component {
    componentDidMount = () => {
        this.props.fetchCategories()
    }
    renderCategoriesCards() {
        let allCategories;
        if (this.props.categoriesReducer.categories.data){
            allCategories = this.props.categoriesReducer.categories.data
        } else {
            allCategories = this.props.categoriesReducer.categories
        }

        return allCategories.map((category) => {
            return <Categories key={category.id} category={category} />
        })
    }
    render() {
       
        return (
            <div>
                {this.renderCategoriesCards()}
                

            </div>
        )
    }
}
 const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer)
