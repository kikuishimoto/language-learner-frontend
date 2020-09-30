export default function tutorsReducer(
    state = { tutors: [], loading: false }, action) {
        switch(action.type) {
            case "GOT_TUTORS":
                return { loading: false, tutors: action.payload.data }
            case "ADDED_TUTOR":
                return {...state, tutors: [...state.tutors, action.payload.data]}
                

            case "FETCHING_TUTORS":
                return {...state, loading: true}
            default:
                return state;
        }
    }