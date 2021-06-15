const router = require('express').Router();
const Conversation = require('../models/Conversation');

router.post('/', async (req, res) => {
    // const newConversation = new Conversation({
    //     members: [req.body.senderId, req.body.receiverId],
    // })
    try{
        // var savedConversation = await newConversation.save();
        var savedConversation = await Conversation.create({
            members: [req.body.senderId, req.body.receiverId]
        })
        res.status(200).json(savedConversation);
    } catch(err) {
        res.status(500).json(err);
    }
})

router.get('/:userId', async(req, res) => {
    try{
        const conversation = await Conversation.find({
            members: {$in: req.params.userId}
        })
        res.status(200).json(conversation)
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;