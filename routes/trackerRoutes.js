const express = require('express');
const router = express.Router();
const Tracker = require('../models/tracker');

router.get('/tracker', async(req, res) => {
    
    const tracker = await Tracker.find({});

    res.render('tracker/index',{tracker});
});

// Get the new from to create new product
router.get('/tracker/new', (req, res) => {
    res.render('tracker/new')
});

// create a new product with the given payload
router.post('/tracker', async (req, res) => {
    
    const newTrack = {
        ...req.body
    }

    await Tracker.create(newTrack);

    res.redirect('/tracker');
});

router.get('/tracker/:id', async(req,res)=>{
    const {id} = req.params;
    const tracks = await Tracker.findById(id);
    res.render('tracker/show',{tracks});
});

// Edit the form 
router.get('/tracker/:id/update', async(req,res)=>{
    const {id} = req.params;
    const tracks =  await Tracker.findById(id);
    res.render('tracker/update',{tracks});
});

//Get the form pre-filled
router.patch('/tracker/:id', async (req, res) => {

    const updatedTracker = req.body;
    const { id } = req.params;
    await Tracker.findByIdAndUpdate(id, updatedTracker);
    res.redirect(`/tracker/${id}`);
});

//Delete the components from the table
router.delete('/tracker/:id',async(req,res)=>{
    const {id} = req.params;
    await Tracker.findOneAndDelete(id);
    res.redirect('/tracker');
});


module.exports = router;