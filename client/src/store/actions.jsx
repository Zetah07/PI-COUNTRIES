import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES'; //
export const GET_SORT = 'GET_SORT';//
export const POPULATION = 'POPULATION';
export const CONTINENTS = 'CONTINENTS';
export const SEARCH = 'SEARCH';//
export const ERROR = 'ERROR';//
export const CLOSE = 'CLOSE';
export const CHECKING = 'CHECKING';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const GET_SELECT_ACTIVITY = 'GET_SELECT_ACTIVITY';

export const getAllCountries = () => async dispatch =>{
    try{
        let contriesData = await axios.get('/countries')
        return dispatch({type:GET_COUNTRIES, payload:contriesData.data})
    }catch(error){
        return dispatch({type:ERROR, payload:error})
    }
}
export const getCountryByName = (value) => async dispatch =>{
    try{
        let countryName = await axios.get(`/countries?name=${value}`)
        return dispatch({type:SEARCH, payload:countryName.data})
    }catch(error){
        return dispatch({type:ERROR, payload:error})
    }
}
export const getActivities = () => async dispatch =>{
    try{
        let activities = await axios.get('/activities')
        return dispatch({type:GET_ACTIVITIES, payload:activities.data})
    }catch(error){
        return dispatch({type:ERROR, payload:error})
    }
}
export const getSort = (payload) => async dispatch =>{
    return dispatch({type:GET_SORT, payload})
}
export const getPopulation = (payload) => async dispatch =>{
    return dispatch({type:POPULATION, payload})
}
export const getContinents = (payload) => async dispatch =>{
    return dispatch({type:CONTINENTS, payload})
}
export const getSelectActivity = (payload) => async dispatch =>{
    return dispatch({type:GET_SELECT_ACTIVITY, payload})
}
export const errorClosed = () => async dispatch =>{
    return dispatch({type:CLOSE})
}
export const checking = () => async dispatch =>{
    return dispatch({type:CHECKING})
}


