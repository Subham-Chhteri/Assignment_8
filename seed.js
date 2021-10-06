const Tracker = require('./models/tracker');



const tracks = [
    {
        fname: 'Subham',
        lname: 'Chhetri',
        desc: "entered chitkara",
        email: "2103@gmail.com",
        etime:"defalut",
        extime: "defalut",
        edate:"defalut"
    },
    {
        fname: 'kale',
        lname: 'dah',
        desc: "entered chitkara",
        email: "2103@gmail.com",
        etime:"defalut",
        extime: "defalut",
        edate: "defalut"
    },
   
];


const seedDB = async () => {
    
    await Tracker.deleteMany({});
    await Tracker.insertMany(tracks);
    console.log('DB Seeded');
}

module.exports = seedDB;