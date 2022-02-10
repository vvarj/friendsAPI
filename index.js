const express=require('express');
const app= express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const cors = require('cors');

let PORT=3000;

//middleware
app.use(bodyParser.json());
app.use(cors());


//routes
app.use('/friends',require('./routes/friends'));
app.get('/',(req,res)=>{
    res.json({message:"Welcome to Friends API"});
})



//database connection
mongoose.connect('mongodb://localhost:27017/FriendsData')
        .then(() =>
            console.log('database connected')
        ).catch((err) => console.log(err));




 //port to listen       
app.listen(PORT,()=>{
    console.log('server connected');
})