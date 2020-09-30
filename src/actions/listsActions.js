
const gotLists = (lists) => {
    console.log("in action")
    return { type: "GOT_LISTS", payload: lists };
}

export const fetchLists = () => {
    return(dispatch) => {
        dispatch({type: "FETCHING_LISTS"})
        fetch("http://127.0.0.1:3000/lists")
        .then((res) => res.json())
        .then((json)=> {
            dispatch(gotLists(json))
                
        })
    }
}
