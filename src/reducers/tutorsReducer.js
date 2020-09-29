export default function tutorsReducer(
    state = { tutors: [], loading: false }, action) {
        switch(action.type) {
            case "GOT_TUTORS":
                return { loading: false, tutors: action.payload }
                

            case "FETCHING_TUTORS":
                return {...state, loading: true}
            default:
                return state;
        }
    }