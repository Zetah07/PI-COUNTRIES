const axios = require("axios");
const { Country, Activity } = require("../db.js");

const getCountries = async () => {
  try {
    const api = await axios.get(`http://restcountries.com/v3/all`);
    const result = api.data?.map((country) => {
      return {
        id: country.cca3,
        name: country.name.common,
        flag: country.flags[0],
        continent: country.continents[0],
        capital: country.capital,
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      };
    });
    return result;
  } catch (error) {
    throw new Error("cannot get all countries", error);
  }
};

const getAllCountries = async () => {
  const countriesFromApi = await getCountries();
  let result = await Country.findAll({
    includes: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  const countriesFromDB = result?.map((country) => {
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
    };
  });
  return [...countriesFromApi, ...countriesFromDB];
};

const getCountryByName = async (name) => {
  try {
    const allCountries = await getAllCountries();
    const filterName = allCountries.filter((country) =>
      country.name.toLowerCase().includes(name.toLowerCase())
    );
    if (filterName.length > 0) {
      return filterName;
    } else {
      throw new Error(`cannot get country ${name}`);
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getCountryById = async (id) => {
  const api = await axios.get(`http://restcountries.com/v3/alpha/${id}`);
  const result = api.data.results?.map((country) => {
    return {
      id: country.cca3,
      name: country.name.common,
      flag: country.flags[0],
      continent: country.continents[0],
      capital: country.capital,
      subregion: country.subregion,
      area: country.area,
      population: country.population,
    };
  });
  return result;
};

// const postActivity = async (name, difficulty, duration, season) => {
//   const newActivity = await Activity.create({
//     name,
//     difficulty,
//     duration,
//     season,
//   });
//   return newActivity;
// };

module.exports = {
  getAllCountries,
  getCountryByName,
  getCountryById,
};
