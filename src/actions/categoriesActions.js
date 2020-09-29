
const gotCategories = (categories) => {
    console.log("in action")
    return { type: "GOT_CATAGORIES", payload: categories };
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
