import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../actions/listsActions';
import Lists from '../components/Lists';
class ListsContainer extends Component {
    componentDidMount() {
        this.props.fetchLists()
    }
    renderLists() {
        let allLists;
        if (this.props.listsReducer.lists.data) {
            
            allLists = this.props.listsReducer.lists.data
        } else {
            allLists = this.props.listsReducer.lists
        }
        return allLists.map( (list) =>{
            return <Lists key={list.id} list={list} />
        })
    }

    render() {
        return (
            <div>
                {this.renderLists()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state

}
export default connect(mapStateToProps, {fetchLists})(ListsContainer);
