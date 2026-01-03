


const Expense = require("../models/expense");

exports.calculateSettlement = async (req, res) => {
  const { groupId } = req.params;

  const expenses = await Expense.find({ group: groupId });

  let balance = {};

  expenses.forEach((expense) => {
    expense.participants.forEach((p) => {
      balance[p.name] = (balance[p.name] || 0) + p.share;
    });
  });

  res.json({ success: true, balance });
};