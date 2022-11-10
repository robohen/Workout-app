const express = require('express');
const cors = require('cors');
// this helps us connect to our mongoDB
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//middleware which allows to parse json
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
// this is added because it node parses the user on mongoDB, also handles the updates to mongoDB
mongoose.connect(uri, //{ 
    // these are integrated with version and are no longer supported
    // useNewUrlParser: true, 
    // useCreateIndex: true, 
    // useFindAndModify: false, 
    // useUnifiedTopology: true}
    );
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully");
})  

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

//starts the server on whatever port is written
app.listen(port, ()=> {
    console.log(`Server is running on port : ${port}`);
});