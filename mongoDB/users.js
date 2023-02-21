const mongoUtil = require('./mongodb-connect')


const createUser =   (userObj) => {
    
      
    let client;
    try{
        
        client = mongoUtil.connect();
        const coll = client.db("chemalot").collection("users");
        coll.insertOne(userObj);

    }catch(error){
        return "Couldnt store data in Uers table";
        
    }finally{
        client.close();
        return "User inserted successfully";

    }
    

}



const getUser = (req, res, next) => {


}

const updateUser = (req, res, next) => {


}

exports.createUser = createUser;
exports.getUser = getUser;
exports.updateUser = updateUser;