const gotTutors = (tutors) => {
    console.log("in action")
    return { type: "GOT_TUTORS", payload: tutors };
   
}
const addTutor = (tutor) => ({ type: "ADDED_TUTOR", payload: tutor})

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
export const createTutor = (tutor) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(tutor)
        };
        fetch("http://127.0.0.1:3000/tutors", configObj)
        .then((res)=> res.json())
        .then((newTutor)=> {
            dispatch(addTutor(newTutor))
        });

    }
}