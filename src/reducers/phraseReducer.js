export default function phraseReducer(
    state = { phrases: [], loading: false }, action) {
        switch(action.type) {
            case "GOT_PHRASES":
                return { loading: false, phrases: action.payload }
                

            case "FETCHING_PHRASES":
                return {...state, loading: true}
            default:
                return state;
        }
    }