const Expense = require("../models/expense");
const Group = require("../models/group");

exports.getSettlement = async (req, res) => {
  try {
    const { groupId } = req.params;

    const expenses = await Expense.find({ group: groupId });
    const group = await Group.findById(groupId);

    if (!group || !expenses.length) return res.json([]);

    // Step 1: calculate net balance per member
    const members = group.members;
    const balance = {};

    members.forEach((m) => (balance[m.email] = 0));

    expenses.forEach((e) => {
      const total = e.amount;
      const num = e.participants.length;
      e.participants.forEach((p) => {
        balance[p.email] -= total / num; // what they owe
      });
      balance[e.paidBy] += total; // paid by who
    });

    // Step 2: create creditors and debtors
    const creditors = [];
    const debtors = [];

    for (const key in balance) {
      if (balance[key] > 0) creditors.push({ email: key, amount: balance[key] });
      else if (balance[key] < 0) debtors.push({ email: key, amount: -balance[key] });
    }

    // Step 3: settle debts greedily
    const settlements = [];
    let i = 0,
      j = 0;

    while (i < debtors.length && j < creditors.length) {
      const pay = Math.min(debtors[i].amount, creditors[j].amount);
      settlements.push({
        fromName: debtors[i].email,
        toName: creditors[j].email,
        amount: pay,
      });
      debtors[i].amount -= pay;
      creditors[j].amount -= pay;
      if (debtors[i].amount === 0) i++;
      if (creditors[j].amount === 0) j++;
    }

    res.json(settlements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error calculating settlement" });
  }
};