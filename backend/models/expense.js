const mongoose = require("mongoose");
const expenseSchema = new mongoose.Schema({
  groupId: String,
  paidBy:String,
  amount:String,
description:String
});
module.exports = mongoose.model("Expense", expenseSchema);