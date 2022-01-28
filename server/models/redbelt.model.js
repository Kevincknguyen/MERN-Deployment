const mongoose= require("mongoose")

const PirateSchema=new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Name error: Name is required"],
        minlength:[4,"Name error: Name must be more than 2 cahracters"]
    },
    chests:{
        type:Number,
        required:[true,"Chest error: Whats a pirate without his booty!"],
        min:[1,"Chest error:Whats a pirate without his booty!"]
    },
    catchphrase:{
        type:String,
        required:[true,"Every pirate needs a good catch phrase!"],
        min:[5,"You can do better than that! (phrase)"]

    },
    image:{
        type:String,
        required:[true,"Every pirate needs picture!"]

    },
    post:{
        type:String,
        required:[true,"Man your post!"],
        min:[1,"Man your post!"]

    },
    pegleg:{
        type:Boolean,
        required:[true,"Peg or no?"]
    },
    eyepatch:{
        type:Boolean,
        required:[true,"Eye patch or no?"]
    },
    hookhand:{
        type:Boolean,
        required:[true,"Hook hand or no?"]
    }
},{timestamps:true})


const Pirate=mongoose.model('Pirate',PirateSchema)

module.exports=Pirate
