const users = require('../users.json')
const uuid = require('uuid')
const CustomError = require('../modules/custom-error')

const validateUserLogin = (req, res, next) =>{
    const {userName, password} = req.body;
    const user = users.find(p=> p.userName === userName && p.password === password);
    console.log("user",user)
    if(!user){
        throw new CustomError("Login Failed. Incorrect user name / Password", 403);
    }
    console.log("user", user)
    res.json({"message":" Welcome  "+user.firstName})

};

const registerUser = (req, res,next) => {
    const {userName, firstName, lastName, password, email, phoneNumber, shippingAdress} = req.body
    const user = users.find(p=>p.userName === userName)
    if(user){
        throw new CustomError("User Name already exists. Please Login if existing user/ Register with new user name", 404)
    }
    
    const userObj = {
        id: uuid.v4(),
        userName,
        firstName, 
        lastName, 
        password, 
        email, 
        phoneNumber, 
        shippingAdress
    }
    users.push(userObj);
    res.json({"message":"User registered successfullly"})


};

exports.validateUserLogin = validateUserLogin;
exports.registerUser = registerUser;
