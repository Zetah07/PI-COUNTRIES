const {Router} = require('express');
const {Activity} = require('../db');
const {addActivitytoCountry} = require('../controllers/controller');
const router = Router();

router.get('/', async (req, res) => {
    try{
    const getAll = await Activity.findAll()
    res.status(200).send(getAll)
    }catch(error){
        res.status(404).send(error)
    }
})

router.post('/', async (req,res) => {
    try{
        const {name,difficulty,duration,season, country} = req.body;
        if(!name || !difficulty || !duration || !season || !country){
        res.status(404).json("No se enviaron los datos necesarios");   
        }else{
            await addActivitytoCountry(name,difficulty,duration,season, country);
            res.status(201).send("Se agregó la actividad correctamente");
        }
    }catch(error){
        res.status(404).send(error.message);   
    }
});

module.exports = router;

