import React, { Component } from 'react';
import Categories from '../components/Categories'
import { connect } from 'react-redux';
import { fetchCategories } from "../actions/categoriesActions";
import CategoryShow from "../components/CategoryShow";

import {
    Switch,
    Route
  } from "react-router-dom";
  
class CategoriesContainer extends Component {
    componentDidMount = () => {
        this.props.fetchCategories()
    }
    renderCategoriesCards() {
        let allCategories;
        
        allCategories = this.props.categoriesReducer.categories
        

        return allCategories.map((category) => {
            return <Categories key={category.id} category={category} />
        })
    }
    
 
    render() {
        if (this.props.categoriesReducer.categories !== []){
        return (
            <div id="CategoriesContainer">
                <Switch>
                    <Route exact path="/categories/:id"
                    component={({match}) => {
                        return (
                            <CategoryShow
                            id={match.params.id}
                            categories= {this.props.categoriesReducer.categories}

                            />
                        )
                        
                    }}
                    />
                    <Route exact path="/categories">
                        {this.renderCategoriesCards()}
                    </Route>
                </Switch>
                
                

            </div>
        )
    } else {
        return <h1>Loading</h1>
    }
}
}
 const mapStateToProps = (state) => {
   
    return state;
}

export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer)
