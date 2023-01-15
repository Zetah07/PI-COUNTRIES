const axios = require('axios');
const { Country, Activity } = require('../db.js');

const getCountries = async () =>{
    try{
    const api = await axios.get(`http://restcountries.com/v3/all`)
    const result = api.data.results ?.map(country =>{
        return{
            id: country.cca3, 
            name: country.name.common,
            flag: country.flags[0],
            continent: country. continents[0],
            capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            population: country.population,
        }
    })
    return result;
    }
    catch(error){
        throw new Error('cannot get all countries', error);
    }
}

const getAllCountries = async () =>{
    const countriesFromApi=await getCountries();
    let result = await Country.findAll({
        includes:{
            model: Activity,
            attributes: ['name'],
            through: {
                attributes: []
            }
        },
    })
    const countriesFromDB = result ?.map((country) => {
        return {
            id: country.id,
            name: country.name,
            flag: country.flag,
            continent: country.continent,
            capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            population: country.population,
            activities: country.activities.map((activity) => activity.name),
        }
    })
    return [...countriesFromApi, ...countriesFromDB]
}

const getCountryByName = async (name) =>{
    const api = await axios.get(`http://restcountries.com/v3/name/${name}`)
    const result = api.data.results ?.map(country =>{
        return{
            id: country.cca3, 
            name: country.name.common,
            flag: country.flags[0],
            continent: country. continents[0],
            capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            population: country.population,
        }
    })
    return result;
}

const getCountryById = async (id) =>{
    const api = await axios.get(`http://restcountries.com/v3/alpha/${id}`)
    const result = api.data.results ?.map(country =>{
        return{
            id: country.cca3, 
            name: country.name.common,
            flag: country.flags[0],
            continent: country. continents[0],
            capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            population: country.population,
        }
    })
    return result;
}

// const postActivity = (id, name, difficulty, duration, season) => {
//     return {
//         id,
//         name,
//         difficulty,
//         duration,
//         season
//     }
// } 

module.exports = {
    getAllCountries,
    getCountryByName,
    getCountryById,
    // postActivity
}