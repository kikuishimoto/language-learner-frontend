const gotTutors = (tutors) => {
    console.log("in action")
    return { type: "GOT_TUTORS", payload: tutors };
   
}

export const fetchTutors = () => {
    return(dispatch) => {
        dispatch({type: "FETCHING_TUTORS"})
        fetch("http://127.0.0.1:3000/tutors")
        .then((res) => res.json())
        .then((json)=> { 
                dispatch(gotTutors(json))
                
        })
    }
}