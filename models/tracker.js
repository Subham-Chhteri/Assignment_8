const mongoose = require('mongoose');


const trackerSchema = new mongoose.Schema({
    fname: {
        type: String,
        trim: true,
        required:true
    },
    lname: {
        type: String,
        trim: true,
    
    },
    desc: {
        type: String,
        trim:true
    },
    email: {
        type: String,
        trim:true
    },
    etime:{
        type: String,
        trim: true,
    },
    edate:{
        type: String,
        trim: true,
    },
    extime:{
        type: String,
        trim: true,
    }

});


const Tracker = mongoose.model( 'Tracker', trackerSchema);

module.exports = Tracker;