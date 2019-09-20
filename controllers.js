var Pets = require('./models')

var controllers = {


    getallPets: function(req, res){
        Pets.find().sort({type:1})
        .then(data=> res.json({message:"success", allPets:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

    getpet: function(req,res){
        Pets.find({_id:req.params.id})
        .then (data=> res.json({message:"success", pet:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

    addpet: function addpet(req,res){
        Pets.create(req.body)
        .then (data=> res.json({message:"success", pet:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },


    // addpet2: function addpet2(req, res){
    //     Pets.find({name:req.body.name}, function(err, pet){
    //         if (err){
    //             Pets.create(req.body)
    //             .then (data=> res.json({message:"success", pet:data}))
    //             .catch(err => res.json({message:"failed", errors:err}))
    //         }
    //         else{
    //             return res.json({message:"duplicated name"})
    //         }
    //     })
    // },

    updatepet: function updatepet(req, res){
        Pets.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators:true})
        .then (data=> res.json({message:"success", pet:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

    
    deletepet: function deletepet(req,res){
        Pets.findByIdAndDelete({_id:req.params.id})
        .then (data=> res.json({message:"success", pet:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },


    addlikes: function addlikes(req,res){
        Pets.findOneAndUpdate(
            {"_id":req.params.id},
            {
                "$set":{likes:req.body.likes}
            }
        )       
        .then (data=> res.json({message:"success", author:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

}

module.exports = controllers;