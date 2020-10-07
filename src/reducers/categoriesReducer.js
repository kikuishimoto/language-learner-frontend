export default function categoriesReducer(
    state = { categories: [], loading: false}, action) {
        switch(action.type) {
            case "GOT_CATEGORIES":
                return { loading: false, categories: action.payload.data}
            case "FETCHING_CATEGORIES":
                return {...state, loading: true}
            case "FETCHING_CATEGORY":
                return {...state, loading: true}
            case "GOT_CATEGORY":
                return {...state, loading: false, categories: action.payload.data}
            default:
                return state;
        }
    }