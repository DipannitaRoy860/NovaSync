const Expense = require("../models/expense");
const Group = require("../models/group");

exports.addExpense = async (req, res) => {
  res.json({ success:true, message:"Expense added(test)"});
  try {
    const { groupId,title, amount, participants} = req.body;
    const expense = new Expense({
      group: groupId,
      title,
      amount,
     participants
    });

    await expense.save();

    res.json({ success: true, expense });
  } catch (error) {
    res.json({ success: false, message:error.message });
  }
};
exports.showLedger = async(req,res)=>{
  const{groupId}= req.params;
  const expenses= await Expense.find({group:groupId});
  res.json({success: true,expenses})
}