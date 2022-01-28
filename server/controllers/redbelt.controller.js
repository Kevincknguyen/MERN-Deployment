const Pirate = require("../models/redbelt.model")

module.exports.test=(req,res)=>{
    res.json({message: "Test RedBelt"})
}



module.exports.allPirate=(req,res)=>{
    Pirate.find().sort({name:1})
        .then(allPirate=>res.json(allPirate))
        .catch(err=>res.status(400).json(err))
}

module.exports.createPirate=(req,res)=>{
    Pirate.create(req.body)
        .then(newPirate=>res.json(newPirate))
        .catch(err=>res.status(400).json(err))
}


module.exports.onePirate=(req,res)=>{
    Pirate.findOne({_id: req.params.id})
        .then(onePirate=>res.json(onePirate))
        .catch(err=>res.status(400).json(err))
}


module.exports.editPirate=(req,res)=>{
    Pirate.findOneAndUpdate({_id: req.params.id},req.body,{new:true, runValidators:true})
        .then(editPirate=>res.json(editPirate))
        .catch(err=>res.status(400).json(err))
}


module.exports.deletePirate=(req,res)=>{
    Pirate.deleteOne({_id: req.params.id})
        .then(deletePirate=>res.json(deletePirate))
        .catch(err=>res.status(400).json(err))
}