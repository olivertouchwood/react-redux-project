export const reducer = (state = {
    movies: [],
    selectedOption: 'release_date',
    selectedGenre: '',
    query: '',
    sortOrder: 'asc',
    offset: 0,
    limit: 20,
    total: null,
    showDropdown: false
}, action) => {
    switch (action.type) {
        case "OPTIONS":
            state = {
                ...state,
                selectedOption: action.payload,
                offset: 0
            };
            break;
        case "GET_MOVIES":
            state = {
                ...state,
                movies: action.payload,
                total: action.payload.length
            };
            break;
        case "GENRE":
            state = {
                ...state,
                selectedGenre: action.payload,
                offset: 0
            };
            break;
        case "QUERY":
            state = {
                ...state,
                query: action.payload,
                offset: 0
            };
            break;
        case "SORT_ORDER":
            state = {
                ...state,
                sortOrder: action.payload,
                offset: 0
            };
            break;
        case "GET_TOTAL":
            state = {
                ...state,
                total: action.payload
            };
            break;
        case "SET_SIZE":
            state = {
                ...state,
                limit: action.payload,
                offset: 0
            };
            break;
        case "SET_PAGE":
            state = {
                ...state,
                offset: action.payload
            };
            break;
        case "SHOW_DROPDOWN":
            state = {
                ...state,
                showDropdown: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};
