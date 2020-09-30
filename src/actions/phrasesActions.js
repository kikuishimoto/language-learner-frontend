
const gotPhrases = (phrases) => {
    console.log("in action")
    return { type: "GOT_PHRASES", payload: phrases };
   
}
const addPhrase = (phrase) => ({type: "ADDED_PHRASE", payload: phrase})

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
export const createPhrase = (phrase) => {
    return(dispatch) => {
        const configObj ={
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(phrase)
        };
        fetch("http://127.0.0.1:3000/phrases", configObj)
        .then((res) => res.json())
        .then((newPhrase) => dispatch(addPhrase(newPhrase)));

    }

}
