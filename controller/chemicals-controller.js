const CustomError = require('../modules/custom-error')
const chemicals = require('../routes/chemicals.json')

const getChemicalByCategory = (req, resp, next)=>{
    console.log("get all chemical details")
    const category = req.params.category;
    const chemicalsByCategory = chemicals.filter(p=>{
        return p.Category === category
    })
    
    if(chemicalsByCategory.length==0){
        console.log("no chemicals found")
        throw new CustomError("Couldnt find chemiclas by category", 404)
    }
    resp.json(chemicalsByCategory)


};

const getChemicalByNameOrCasId = (req, res, next) =>{

    const value = req.params.value;
    console.log("value", value)
    const chemicalsByName = chemicals.find(p=>{

        return p.Chemical_Name === value
    });
    console.log("chemicalsByName", chemicalsByName)
    if(chemicalsByName){
        return res.json(chemicalsByName)
    }

    const chemicalByCasId = chemicals.find(p=>{
        return p.CAS_ID === value
    })
    console.log("chemicalByCasId", chemicalByCasId)
    if(chemicalByCasId){
        return res.json(chemicalByCasId)
    }
    
    if(!chemicalsByName && !chemicalByCasId){
        throw new CustomError("No Chemical Found with CAS ID or Chemical Name", 404)
    }
    

}

exports.getChemicalByCategory = getChemicalByCategory;
exports.getChemicalByNameOrCasId = getChemicalByNameOrCasId;