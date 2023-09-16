const mongoose = require('mongoose');

const connectionString =
process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/codespaceDB';

mongoose.connect(connectionString);
const db = mongoose.connection;

// if not connected successfully 
db.on('error',(err)=>{
    console.log("Mongodb connection failed", err)
})

// if connected successfully 
db.once('open',()=>{
    console.log("Connected to Mongodb")
})

module.exports = mongoose.connection;
