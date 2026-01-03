const Expense = require("../models/expense");
const Group = require("../models/group");

exports.addExpense = async (req, res) => {
  //res.json({ success:true, message:"Expense added(test)"});
  try {
    const { groupId,title, amount, splitType, splits} = req.body;
    const group = await Group.findById(groupId);
    if(!group){
      return res.json ({success: false, message:"Group not found"});
    }
    let participants =[];
    if(splitType==="equal"){
      const share = amount/group.members.length;
      participants = group.members.map((m)=>({
        name: m.name,
        share,
        paid: 0
      }));
    }
    if(splitType==="exact"){
      participants = splits.map((s)=>({
        name: s.name,
        share: s.amount,
        paid: 0
      }));
    }
    if(splitType==="percentage"){
      participants = splits.map((s)=>({
        name: s.name,
        share: (amount*s.percent)/100,
      }));
    }
    const expense = new Expense({
      groupId: groupId,
      title,
      amount,
      splitType,
     splits: participants
    });

    await expense.save();

    res.json({ success: true, expense });
  } catch (error) {
    res.json({ success: false, message:error.message });
  }
};
exports.showLedger = async(req,res)=>{
  const{groupId}= req.params;
  const expenses= await Expense.find({groupId:groupId});
  res.json({success: true,expenses})
}