const { getHome, getByName, getById } = require('../controllers/controller');
const axios = require('axios');
jest.mock('axios');

describe('getHome()', () => {
    it('should get a list of countries from the restcountries API', async() => {
      const countries = await getHome();
      expect(typeof countries).toBe('object');
      expect(countries.length).toBeGreaterThan(0);
    });
  });
  
  describe('getByName()', () => {
    it('should get a single country from the restcountries API', async() => {
     const country = await getByName('Singapore');
     expect(typeof country).toBe('object');
     expect(country.name).toBe('Singapore');
    });
  });
  
  describe('getById()', () => {
    it('should get a single country from the restcountries API', async() => {
     const country = await getById('MYS');
     expect(typeof country).toBe('object');
     expect(country.name).toBe('Malaysia');
    });
  });
