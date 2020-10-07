
const gotCategories = (categories) => {
    console.log("in action")
    return { type: "GOT_CATEGORIES", payload: categories };
}
const gotCategory = (category) => {
    console.log("in action")
    return { type: "GOT_CATEGORY", payload: category};
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
    debugger
    return(dispatch) => {
        dispatch({type: "FETCHING_CATEGORY"})
        fetch("http://127.0.0.1:3000/categories/" + {id})
        .then((res) => res.json())
        .then((json)=> { 
            debugger
            dispatch(gotCategory(json))
                
        })
    }
}
