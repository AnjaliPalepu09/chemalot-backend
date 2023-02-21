const MongoClient = require('mongodb').MongoClient
const url = 'mongodb+srv://chemalot_admin:acunor_chemalot@chemalotcluster.2tubvt6.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url)

const connect = () =>{

    try{
        client.connect();
        return client;

    }catch(error){
        throw error

    }
}

const disconnect = ()=>{
    try{
        client.close();

    }catch(error){
        throw error

    }
}

exports.connect = connect;
exports.disconnect = disconnect;