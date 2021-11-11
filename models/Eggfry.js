const mongoose = require("mongoose")
const EggfrySchema = mongoose.Schema({

Onions:{
    type: Number,
    minLength: 3,
    maxLength: 100
},

spices : {
    type:String,
},

curry: {
    type:String,
    min:1,
    max:500
}
})
module.exports = mongoose.model("Eggfry",EggfrySchema)