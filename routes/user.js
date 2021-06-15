const router = require('express').Router();
var UserModel = require('../models/User')

router.post('/', async (req, res) => {
    var requestBody = req.body;
    try{
        // var savedUser = await UserModel.create({
        //     _id: requestBody.email,
        //     name: requestBody.name,
        //     email: requestBody.email,
        //     photoURL: requestBody.photoURL
        // })
        var savedUser = await UserModel.findOne({email: requestBody.email}).exec();
        if(savedUser == null){
            var insertNewUser = await UserModel.create({
                _id: requestBody.email,
                name: requestBody.name,
                email: requestBody.email,
                photoURL: requestBody.photoURL
            })
            res.status(200).json(insertNewUser);
        }
        res.status(200).json(savedUser);
    }
    catch(err) {
        res.status(500).json(err);
    }
})
router.get('/:userEmail',async (req,res) => {
    try{
        const userDetail = await UserModel.findOne({email: req.params.userEmail}).exec();
        res.status(200).json(userDetail);
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router