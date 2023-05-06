const mongoose=require("mongoose");
const noteschema=mongoose.Schema({
    name:String,
    title:String,
    desc:String,
    date:String
})
const notesmodel=mongoose.model("notes",noteschema);
module.exports={
    notesmodel
}