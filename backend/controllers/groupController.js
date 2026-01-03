const Group = require("../models/group");
exports.createGroup = async(req,res)=>{
  try{
    const{ groupName,userId} = req.body;
    const group=new Group({
      groupName,createdBy:userId,members:[]
    });
    await group.save();
    res.json({success:true,
       message: "Group created successfully", group});
  } catch (error){
    res.json({success:false, message: "Error creating group"});
  }
};

exports.addMembers = async (req, res) => {
  try {
    const { groupId, name, email, finalize } = req.body;

        
    if (!groupId) return res.json({ success: false, message: "Group ID missing" });
const group = await Group.findById(groupId);
 if (!group) return res.json({ success: false, message: "Group not found" });
    // If finalize is true, just check members count
    if(!Array.isArray(group.members)) {group.members=[];}
    if (finalize) {
      if (!group.members || group.members.length < 4) {
        return res.json({
          success: false,
          message: "Sorry, group can't be finalized. Add at least 4 members",
        });
      }
      return res.json({ success: true, message: "Group finalized successfully" });
    }

    // Regular add member flow
    if (!name || !email) {
      return res.json({ success: false, message: "Missing name or email" });
    }

    // Avoid duplicates
    if (group.members.find((m) => m.email === email)) {
      return res.json({ success: false, message: "Member already added" });
    }

    group.members.push({ name, email });
    await group.save();

    res.json({ success: true, membersCount: group.members.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
// Get group by ID (for AddExpense.js)
exports.getGroup = async (req, res) => {
  try {
    const { id } = req.params;   // matches /api/groups/:id
    const group = await Group.findById(id);

    if (!group) {
      return res.status(404).json({ success: false, message: "Group not found" });
    }

    // Send back members so frontend can use them
    res.json({ success: true, members: group.members });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

