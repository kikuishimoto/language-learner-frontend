export default function listsReducer(
    state = { lists: [], loading: false }, action) {
        switch(action.type) {
            case "GOT_LISTS":
                return { loading: false, lists: action.payload }
                

            case "FETCHING_LISTS":
                return {...state, loading: true}
            default:
                return state;
        }
    }