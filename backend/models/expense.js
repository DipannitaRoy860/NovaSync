const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema(
  {
  groupId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Group",
    required: true,
  },
  title:{
    type: String,
required:true,
  },

  amount:{
    type: Number,
    required: true,
  },

  splitType:{
    type: String,
    enum: ["equal", "exact", "percentage"],
    required: true,
  },

  splits:[
    {
    name: String,
    share: Number,
  },
],
  //participants: [{name: String, share: Number}],
},
{timestamps: true}
);

module.exports = mongoose.model("Expense", ExpenseSchema);
