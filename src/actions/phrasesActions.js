const gotPhrases = (phrases) => {
    console.log("in action")
    return { type: "GOT_PHRASES", payload: phrases };
   
}

export const fetchPhrases = () => {
    return(dispatch) => {
        dispatch({type: "FETCHING_PHRASES"})
        fetch("http://127.0.0.1:3000/phrases")
        .then((res) => res.json())
        .then((json)=> { 
                dispatch(gotPhrases(json))
                
        })
    }
}
