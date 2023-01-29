const express = require('express');
const bodyParser = require('body-parser')
const CustomError = require('./modules/custom-error')

const chemicalRoute = require('./routes/chemicals-route');
const cartsRoute = require('./routes/carts-route');
const userRoute = require('./routes/user-routes')

const app = express();

app.use(bodyParser.json());

app.use('/chemicals',chemicalRoute);
app.use('/carts',cartsRoute);
app.use('/user', userRoute)
app.use((req, res, next) => {
  next(new CustomError("Api doesnt exist", 404));
});

app.use(( error ,req ,res ,next) => {
    // if(res.headerSent){
    //     return next(error);
    // }
    console.log("came here")
    res.status(error.code || 500);
    res.json({message: error.message || "Internal Server Error"});

});

app.listen(5000);

// mongodb+srv://acunor_mongo:%40cun0r2022@cluster0.lbflc0d.mongodb.net/