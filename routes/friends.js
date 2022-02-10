const express = require('express');
const router = express.Router();
const Friend = require('../models/model');


router.get('', async (req, res) => {
    const data = await Friend.find();
    res.json({ data });
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    const data = await Friend.find({ id: id });


    if (data) {
        res.json({ data })
    } else {
        res.json({ message: 'user not available' })
    }

})

router.post('', async (req, res) => {
    console.log(req.body);

    const friend = new Friend({
        id: req.body.id,
        name: req.body.name
    })


    try {
        const saveFriend = await friend.save();
        res.json(saveFriend);
    }
    catch (err) {
        res.json({ message: "Error" });
    }
})

module.exports = router;
