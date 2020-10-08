export default function categoriesReducer(
    state = { categories: [], category_phrases: [], loading: false}, action) {
        switch(action.type) {
            case "GOT_CATEGORIES":
                return {...state, loading: false, categories: action.payload.data}
            case "FETCHING_CATEGORIES":
                return {...state, loading: true}
            case "GOT_CATEGORY":
                return {...state, loading: false, categories: [action.payload.data]}
            case "GOT_CATEGORY_PHRASES":
                
                return {...state, category_phrases: action.payload.data}
            default:
                return state;
        }
    }