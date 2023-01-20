import { CHECKING, CLOSE, CONTINENTS, ERROR, GET_ACTIVITIES, GET_COUNTRIES, GET_SELECT_ACTIVITY, GET_SORT, POPULATION, SEARCH } from "./actions"


const initialState = {
    countries: [],
    sorting: [],
    error: false,
    check: false,
    activities: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            const a = [...action.payload]
            return {
                ...state,
                countries: action.payload,
                sorting: a,
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            }
        case GET_SELECT_ACTIVITY:
            const result = state.countries.filter(e => e.activity.includes(action.payload))
            return {
                ...state,
                sorting: result,
            }
        case GET_SORT:
            const sort = action.payload === 'asc' ? state.sorting.sort((a, b) => {
                if (a.name > b.name) return 1;

                if (a.name < b.name) return -1;

                return 0;
            }) : action.payload === 'desc' ? state.sorting.sort((a, b) => {
                if (a.name > b.name) return -1;

                if (a.name < b.name) return 1;

                return 0;
            }) : [...state.countries]
            return {
                ...state,
                sorting: sort
            }
        case POPULATION:
            const sortPopulation = action.payload === 'high' ?
                state.sorting.sort((a, b) => b.population - a.population) :
                action.payload === 'low' ? state.sorting.sort((a, b) => a.population - b.population) : [...state.countries]
            return {
                ...state,
                sorting: sortPopulation
            }

        case CONTINENTS:
            const select = [...state.countries]
            let filter = select.filter(e => e.continent === action.payload)
            console.log(filter);
            return {
                ...state,
                sorting: action.payload === 'all' ? [...state.countries] : filter
            }

        case SEARCH:
            return {
                ...state,
                sorting: [action.payload]
            }

        case 'DELETE_FILTERS':
            return {
                ...state,
                sorting: state.countries
            }
        case ERROR:
            return {
                ...state,
                error: true
            }
        case CLOSE:
            return {
                ...state,
                error: state.error === false ? false : false,
                check: state.check === false ? false : false
            }
        case CHECKING:
            return {
                ...state,
                check: true
            }
        default: return state
    }
}

export default rootReducer