const { Router } = require('express');
//const { postActivity } = require('./controller');
const router = Router();
const { Activity, Country } = require('../db')

router.get('/', async (req, res) => {
    try {
        let getAll = await Activity.findAll()
        res.send(getAll)
    } catch (error) {
        res.status(404).send(error)
    }
})

router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, country, /* flags */ } = req.body;
    try {
        let newActivity = await Activity.create({ name, difficulty, duration, season, /* country, */ /* flags */ })

        let countryDb = await Country.findAll({
            where: { name: country }
        })

        console.log(country)

        newActivity.addCountry(countryDb)

        res.send('Activity created successfully')
    } catch (error) {
        res.status(404).send(error)
    }
})


module.exports = router;