const { Router } = require('express');
const { getAllCountries, getCountryByName, getCountryById } = require('../controllers/controller');
const router = Router();

router.get('/', async (req, res)=>{
    const {name} = req.query;
    try{
        if(name){
            const getName = await getCountryByName(name)
            res.status(200).send(getName);
        } else{
            const getAllApi = await getAllCountries()
            res.status(200).send(getAllApi);
        }
    } catch (error){
        res.status(404).send(error);
    }
})

router.get('/:id', async (req, res)=>{
    const{id}= req.params;
    try{
        const getId = await getCountryById(id)
        res.status(200).send(getId);
    } catch (error){
        res.status(404).send(error);
    }
})

module.exports = router;