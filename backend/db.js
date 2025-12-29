const mongoose = require("mongoose");
async function connectDB(){
  try{
    await 
    mongoose.connect("mongodb+srv://roydipannita860_db_user:Jhilik2025@cluster0.mfbm944.mongodb.net/campusDB?retryWrites=true&w=majority");
    console.log("connected to MongoDB");
  }
  catch(error){
    console.log("error connecting to MongoDB",error);
  }
};
module.exports = connectDB;