
const gotCategories = (categories) => {
    console.log("in action")
    return { type: "GOT_CATEGORIES", payload: categories };
}
const gotCategory = (category) => {
    console.log("in action")
    return { type: "GOT_CATEGORY", payload: category};
}
const gotCategoryPhrases = (phrases) => {
    return { type: "GOT_CATEGORY_PHRASES", payload: phrases};
}


export const fetchCategories = () => {
    return(dispatch) => {
        dispatch({type: "FETCHING_CATEGORIES"})
        fetch("http://127.0.0.1:3000/categories")
        .then((res) => res.json())
        .then((json)=> { 
                dispatch(gotCategories(json))
                
        })
    }
}
export const fetchCategory = (id) => {
    
    return(dispatch) => {
        //dispatch({type: "FETCHING_CATEGORY"})
    
        fetch(`http://127.0.0.1:3000/categories/${id}`)
        .then((res) => res.json())
        .then((json)=> {
            dispatch(gotCategory(json))
                
        })
    }
}
export const fetchCategoryPhrases = (id) => {
    return(dispatch) => {
    fetch(`http://127.0.0.1:3000/categories/${id}/phrases`)
    .then((res)=> res.json())
    .then((json)=> {
        dispatch(gotCategoryPhrases(json))
    })
}
}
