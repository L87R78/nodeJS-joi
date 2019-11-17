const router = require('express').Router();
const Joi = require('joi');
//const User = require('../models/userModel');

router.get('/', (req, res) =>{
    res.send('index')
})

// router.route('/add', (req, res) => {
//     const Schema = Joi.object().keys({
//         email: Joi.string().trim().email().required(),
//         password: Joi.string().min(5).max(10).required()
//     })
//     Joi.validate(req.body, schema, (err, result) => {
//         if(err){
//             res.send('an error has occurred');
//         }
//         console.log(result)
//         res.send('successfully posted data')
//     })
// })

module.exports = router;