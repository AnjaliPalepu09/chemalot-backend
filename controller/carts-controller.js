const carts = require('../carts.json')
const CustomError = require('../modules/custom-error')

const saveCart = (req, res, next) =>{
    console.log("came to save cart")
    const {productNumber,frequency,quantity, quantityDenomination, requiredDeliveryTime, idealPrice, additionalNotes, userName } = req.body;
    const createCart = {
        "userName":userName,
        "productNumber":productNumber,
        "frequency":frequency,
        "quantity":quantity,
        "quantityDenomination":quantityDenomination,
        "requiredDeliveryTime":requiredDeliveryTime,
        "idealPrice":idealPrice,
        "additionalNotes":additionalNotes

    }
    carts.push(createCart)
    res.status(201)
    res.json({message:"Cart Created successfully"})

    

}

const getCarts = (req, res, next) =>{
    if(carts.length == 0){
        throw new CustomError("No Carts Available", 404)
    }
    res.json(carts)

}

const deleteCartItem = (req, res, next) =>{
    const value = req.params.value;

    const cart = carts.filter(p=>{
        return p.productNumber !== value

    });
    carts = cart

}

exports.saveCart = saveCart;
exports.getCarts = getCarts;