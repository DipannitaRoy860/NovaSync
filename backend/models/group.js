const mongoose = require("mongoose");
const GroupSchema = new mongoose.Schema({
  groupName:String,
  members:{
  type:[{name: String,
  email: String}],
  default:[]
},
  createdBy: {
  type: mongoose.Schema.Types.ObjectId,
  ref : "User"
}

});
module.exports = mongoose.model("Group",GroupSchema);