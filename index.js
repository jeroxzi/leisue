const express = require('express');
const app = express();
const mongoose = require('mongoose');


//Import Routes
const authRoute = require('./routes/auth');

//Connect to DB
mongoose.connect(
    'mongodb+srv://user1:<password>@cluster0.n7imq.mongodb.net/<dbname>?retryWrites=true&w=majority', 
    { useNewUrlParser: true },
    () => console.log('connected to db!')
);

//Middleware
app.use(express.json());



//Route middleware
app.use('/api/user', authRoute);



app.listen(3000, () => console.log('server Up and Running'));

 