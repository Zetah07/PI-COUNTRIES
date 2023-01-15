import {
  CHECKING,
  CLOSE,
  ERROR,
  SEARCH,
  GET_COUNTRIES,
  GET_SORT,
  POPULATION,
  CONTINENTS,
  GET_ACTIVITIES,
  GET_SELECT_ACTIVITY,
} from "./actions";

const initialState = {
  countries: [],
  activities: [],
  sorting: [],
  error: false,
  check: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      const e = [...action.payload];
      return {
        ...state,
        countries: action.payload,
        sorting: e,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case GET_SELECT_ACTIVITY:
      const result = state.countries.filter((event) =>
        event.activity.includes(action.payload)
      );
      return {
        ...state,
        sorting: result,
      };
    case GET_SORT:
      const sort =
        action.payload === "asc"
          ? state.sorting.sort((a, b) => (a.name > b.name ? 1 : -1))
          : state.sorting.sort((a, b) => (a.name < b.name ? 1 : -1));
      return {
        ...state,
        sorting: sort,
      };
    case POPULATION: // si no me corre aqui esta el error 😢
      const sortPopulation =
        action.payload === "high"
          ? state.sorting.sort((a, b) => b.population - a.population)
          : action.payload === "low"
          ? state.sorting.sort((a, b) => a.population - b.population)
          : [...state.countries];
      return {
        ...state,
        sorting: sortPopulation,
      };
    case CONTINENTS:
      let continent = state.countries.filter(
        (event) => event.continent === action.payload
      );
      return {
        ...state,
        sorting: continent,
      };
    case SEARCH:
      return {
        ...state,
        sorting: [action.payload],
      };
    case ERROR:
        return {
            ...state,
            error: true,
        };
        case CLOSE:
            return {
                ...state,
                error: false,
            };
    case CHECKING:
        return {
            ...state,
            check: true,
        };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
