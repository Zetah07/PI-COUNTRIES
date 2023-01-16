const {Router} = require('express');
const {Activity, Country} = require('../db')
const router = Router();

router.get('/', async (req, res) => {
    try{
    const getAll = await Activity.findAll()
    res.status(200).send(getAll)
    }catch(error){
        res.status(404).send(error)
    }
})



router.post('/', async (req, res) => {
    const {name, difficulty, duration, season, /* country */} = req.body;
    try{
        const newActivity = await Activity.create({name, difficulty, duration, season})
        // const countryDb = await Country.findAll({
        //     where:{name: country}
        // })
        // await newActivity.addCountry(countryDb)
        res.status(200).send('Activity created succesfully')
    }catch(error){
        res.status(404).send(error)
    }
})

module.exports = router;

