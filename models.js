const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema(
    {   name: 
            {type:String, 
            unique:true,
            required:[true, "The name is required!"], 
            minlength:[3, "The name must be at least 3 characters long!"]},
        type: 
        {   type:String, 
            required:[true, "The type of pet is required!"], 
            minlength:[3, "Type must be at least 3 characters long!"]},
        desc: 
            {type:String, 
            required:[true, "The description is required!"], 
            minlength:[3, "The description of pet must be at least 3 characters long!"]},

        skills: [String],

        likes:{type:Number, default:0}

    },  
    {timestamps:true}
)

const Pets = mongoose.model('Pet', PetSchema)

module.exports = Pets;