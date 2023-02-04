const axios = require("axios");
const { Country, Activity } = require("../db");

const getHome = async () => {
  try {
    let api = await axios.get("https://restcountries.com/v3/all");
    api = api.data?.map((e) => {
      return {
        id: e.cca3,
        name: e.name.common,
        flag: e.flags[0],
        continent: e.continents[0],
        capital: e.capital,
        subregion: e.subregion,
        area: e.area,
        population: e.population,
      };
    });
    api = api.filter((e) => e.name !== "Moldova");

    let bdd = await Country.findAll();
    if (!bdd.length) {
      await Country.bulkCreate(api);
    }
    let db = await Country.findAll({
      include: {
        model: Activity,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    db = db.map((e) => {
      return {
        id: e.id,
        name: e.name,
        flag: e.flag,
        continent: e.continent,
        capital: e.capital,
        subregion: e.subregion,
        area: e.area,
        population: e.population,
        activity: e.activities?.map((el) => el.name),
      };
    });
    return db;
  } catch (error) {
    console.log(error.message);
  }
};

const getByName = async (name) => {
  let api = await axios.get(`https://restcountries.com/v3/name/${name}`);
  api = api.data[0];
  api = {
    id: api.cca3,
    name: api.name.common,
    flag: api.flags[1],
    continent: api.continents[0],
    capital: api.capital,
    subregion: api.subregion,
    area: api.area,
    population: api.population,
  };

  return api;
};

const getById = async (id) => {
  let api = await axios.get(`https://restcountries.com/v3/alpha/${id}`);
  api = api.data[0];
  api = {
    id: api.cca3,
    name: api.name.common,
    flag: api.flags[1],
    continent: api.continents[0],
    capital: api.capital,
    subregion: api.subregion,
    area: api.area,
    population: api.population,
  };
  return api;
};


module.exports = {
  getHome,
  getByName,
  getById,

};
