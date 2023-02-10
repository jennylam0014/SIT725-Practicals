// has the connection codes in this files (previously in index.js)

require('dotenv').config()

// mongoDb connection...
const MongoClient = require('mongodb').MongoClient;

//add database connections...
const uri = "mongodb+srv://jennyylam3:Flower0302@cluster0.oai2ram.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, {useNewUrlParser: true})


client.connect((err,db) => {
    if(!err) {
        console.log('MongoDB Connected')
    }
    else {
        console.log("DB Error: ", err);
        process.exit(1);
    }})

module.exports = client; 