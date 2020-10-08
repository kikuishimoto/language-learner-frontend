export default function phraseReducer(
    state = { phrases: [], loading: false }, action) {
        switch(action.type) {
            case "GOT_PHRASES":
                return { loading: false, phrases: action.payload.data }
            case "FETCHING_PHRASES":
                return {...state, loading: true}
            case "ADDED_PHRASE":
                return {...state, phrases: [...state.phrases, action.payload.data]}
            default:
                return state;
        }
    }